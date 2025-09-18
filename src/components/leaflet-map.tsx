import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';

interface MapMarker {
  lat: number;
  lng: number;
  id: string;
  content?: string;
  htmlContent?: string;
  offset?: { x: number; y: number };
}

interface LeafletMapProps {
  markers: MapMarker[];
  mapUrl: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  icon?: {
    iconUrl: string;
    iconSize: [number, number];
    iconAnchor: [number, number];
  };
  attribution?: string;
}

export const LeafletMap = ({
  markers,
  mapUrl,
  center,
  zoom = 6,
  icon = {
    iconAnchor: [12, 41] as [number, number],
    iconSize: [25, 41] as [number, number],
    iconUrl: '/marker-icon-2x.png',
  },
  attribution = '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
}: LeafletMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current || typeof window === 'undefined') return;

    // Calculate center
    let calculatedCenter: [number, number];
    if (center) {
      calculatedCenter = [center.lat, center.lng];
    } else if (markers.length > 0) {
      const firstMarker = markers[0];
      if (firstMarker) {
        calculatedCenter = [firstMarker.lat, firstMarker.lng];
      } else {
        calculatedCenter = [52.520008, 13.404954];
      }
    } else {
      calculatedCenter = [52.520008, 13.404954];
    }

    // Initialize map - check if already initialized
    if (mapRef.current) {
      try {
        // Clean up existing markers
        markersRef.current.forEach((marker) => {
          try {
            mapRef.current?.removeLayer(marker);
          } catch (_error) {
            // Marker might already be removed
          }
        });
        mapRef.current.remove();
      } catch (_error) {
        // Map might already be removed
      }
    }

    // Ensure container is clean and prevent duplicate initialization
    const container = mapContainerRef.current;
    if (container) {
      // Clear any existing content and remove any existing map
      container.innerHTML = '';

      // Check if container already has a map
      const leafletContainer = container as HTMLDivElement & {
        _leaflet_id?: number;
      };
      if (leafletContainer._leaflet_id) {
        delete leafletContainer._leaflet_id;
      }

      // Ensure container has unique ID or remove existing map
      container.setAttribute('data-map-initialized', 'false');
    }

    const map = new L.Map(mapContainerRef.current, {
      center: calculatedCenter,
      scrollWheelZoom: false,
      tapTolerance: 100,
      zoom: zoom,
    });

    // Add tile layer
    new L.TileLayer(mapUrl, {
      attribution,
    }).addTo(map);

    // Create custom icon
    const customIcon = new L.Icon({
      iconAnchor: icon.iconAnchor,
      iconSize: icon.iconSize,
      iconUrl: icon.iconUrl,
    });

    // Add markers with popups
    const newMarkers: L.Marker[] = [];

    markers.forEach((marker) => {
      const markerLatLng: [number, number] = [marker.lat, marker.lng];
      const leafletMarker = new L.Marker(markerLatLng, {
        icon: customIcon,
      }).addTo(map);

      // Apply offset if provided
      const offset = marker.offset || { x: 0, y: 0 };

      // Create popup content
      let popupContent = '';
      if (marker.htmlContent) {
        popupContent = marker.htmlContent;
      } else if (marker.content) {
        popupContent = marker.content;
      }

      if (popupContent) {
        const popup = new L.Popup({
          className: 'custom-map-popup',
          closeButton: false,
          offset: [offset.x, offset.y],
        }).setContent(popupContent);

        leafletMarker.bindPopup(popup);
      }

      newMarkers.push(leafletMarker);
    });

    markersRef.current = newMarkers;

    // Fit bounds if markers exist
    if (markers.length > 0) {
      const bounds = new L.LatLngBounds(markers.map((m) => new L.LatLng(m.lat, m.lng)));
      map.fitBounds(bounds, { padding: [20, 20] });
    }

    mapRef.current = map;

    // Cleanup function
    return () => {
      if (mapRef.current) {
        try {
          // Remove all markers
          markersRef.current.forEach((marker) => {
            try {
              mapRef.current?.removeLayer(marker);
            } catch (_error) {
              // Marker might already be removed
            }
          });
          mapRef.current.remove();
          mapRef.current = null;

          // Clean up container
          if (mapContainerRef.current) {
            mapContainerRef.current.innerHTML = '';
            mapContainerRef.current.removeAttribute('data-map-initialized');
          }
        } catch (_error) {
          // Map might already be removed
        }
      }
      markersRef.current = [];
    };
  }, [markers, mapUrl, zoom, icon, attribution, center]);

  // Update markers when they change
  useEffect(() => {
    const map = mapRef.current;
    if (!map || typeof window === 'undefined') return;

    // Remove existing markers
    markersRef.current.forEach((marker) => {
      try {
        map.removeLayer(marker);
      } catch (_error) {
        // Marker might already be removed
      }
    });
    markersRef.current = [];

    // Create new icon
    const customIcon = new L.Icon({
      iconAnchor: icon.iconAnchor,
      iconSize: icon.iconSize,
      iconUrl: icon.iconUrl,
    });

    // Add new markers with popups
    const newMarkers: L.Marker[] = [];

    markers.forEach((marker) => {
      const markerLatLng: [number, number] = [marker.lat, marker.lng];
      const leafletMarker = new L.Marker(markerLatLng, {
        icon: customIcon,
      }).addTo(map);

      // Apply offset if provided
      const offset = marker.offset || { x: 0, y: 0 };

      // Create popup content
      let popupContent = '';
      if (marker.htmlContent) {
        popupContent = marker.htmlContent;
      } else if (marker.content) {
        popupContent = marker.content;
      }

      if (popupContent) {
        const popup = new L.Popup({
          className: 'custom-map-popup',
          closeButton: false,
          offset: [offset.x, offset.y],
        }).setContent(popupContent);

        leafletMarker.bindPopup(popup);
      }

      newMarkers.push(leafletMarker);
    });

    markersRef.current = newMarkers;

    // Update bounds if markers exist
    if (markers.length > 0) {
      const bounds = new L.LatLngBounds(markers.map((m) => new L.LatLng(m.lat, m.lng)));
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [markers, icon]);

  return (
    <div
      className="h-full w-full"
      ref={mapContainerRef}
    />
  );
};

export default LeafletMap;
