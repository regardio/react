import { Map as MapTiler, Marker, Popup } from '@maptiler/sdk';
import { useEffect, useRef } from 'react';
import '@maptiler/sdk/dist/maptiler-sdk.css';

interface MapTilerMarker {
  lat: number;
  lng: number;
  id: string;
  content?: string;
  htmlContent?: string;
  offset?: { x: number; y: number };
}

interface MapTilerMapProps {
  markers: MapTilerMarker[];
  center?: { lat: number; lng: number };
  zoom?: number;
  mapStyle?: string;
  apiKey: string;
  showPopupsImmediately?: boolean;
}

export const MapTilerMap = ({
  markers,
  center,
  zoom = 12,
  mapStyle = 'streets',
  apiKey,
  showPopupsImmediately = false,
}: MapTilerMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapTiler | null>(null);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current || typeof window === 'undefined') return;

    // Calculate center
    let calculatedCenter: [number, number];
    if (center) {
      calculatedCenter = [center.lng, center.lat];
    } else if (markers.length > 0) {
      const firstMarker = markers[0];
      if (firstMarker) {
        calculatedCenter = [firstMarker.lng, firstMarker.lat];
      } else {
        calculatedCenter = [13.404954, 52.520008]; // Berlin [lng, lat]
      }
    } else {
      calculatedCenter = [13.404954, 52.520008]; // Berlin [lng, lat]
    }

    // Initialize map with proper style URL
    const map = new MapTiler({
      center: calculatedCenter,
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/${mapStyle}/style.json?key=${apiKey}`,
      zoom: zoom,
    });

    // Handle missing images gracefully - provide fallback markers
    map.on('styleimagemissing', (e) => {
      const id = e.id;
      console.warn(`Missing sprite image: ${id}`);
      // Don't attempt to add missing images, let the SDK handle it gracefully
    });

    mapRef.current = map;

    // Add markers
    const newMarkers: Marker[] = [];

    markers.forEach((marker) => {
      const markerInstance = new Marker().setLngLat([marker.lng, marker.lat]).addTo(map);

      // Create popup content
      let popupContent = '';
      if (marker.htmlContent) {
        popupContent = marker.htmlContent;
      } else if (marker.content) {
        popupContent = marker.content;
      }

      if (popupContent) {
        const popup = new Popup({
          closeButton: false,
          offset: marker.offset ? [marker.offset.x, marker.offset.y] : [0, 0],
        }).setHTML(popupContent);

        markerInstance.setPopup(popup);

        if (showPopupsImmediately) {
          markerInstance.togglePopup();
        }
      }

      newMarkers.push(markerInstance);
    });

    markersRef.current = newMarkers;

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markersRef.current = [];
    };
  }, [markers, apiKey, mapStyle, zoom, center, showPopupsImmediately]);

  // Update markers when they change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove existing markers
    markersRef.current.forEach((marker) => {
      marker.remove();
    });
    markersRef.current = [];

    // Add new markers
    const newMarkers: Marker[] = [];

    markers.forEach((marker) => {
      const markerInstance = new Marker().setLngLat([marker.lng, marker.lat]).addTo(map);

      // Create popup content
      let popupContent = '';
      if (marker.htmlContent) {
        popupContent = marker.htmlContent;
      } else if (marker.content) {
        popupContent = marker.content;
      }

      if (popupContent) {
        const popup = new Popup({
          closeButton: false,
          offset: marker.offset ? [marker.offset.x, marker.offset.y] : [0, 0],
        }).setHTML(popupContent);

        markerInstance.setPopup(popup);

        if (showPopupsImmediately) {
          markerInstance.togglePopup();
        }
      }

      newMarkers.push(markerInstance);
    });

    markersRef.current = newMarkers;

    if (markers.length > 1) {
      const lngs = markers.map((m) => m.lng);
      const lats = markers.map((m) => m.lat);
      const minLng = Math.min(...lngs);
      const maxLng = Math.max(...lngs);
      const minLat = Math.min(...lats);
      const maxLat = Math.max(...lats);
      map.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 20 },
      );
    }
  }, [markers, showPopupsImmediately]);

  return (
    <div
      className="h-full w-full"
      ref={mapContainerRef}
    />
  );
};
