import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './combobox';

const meta: Meta<typeof Combobox.Root> = {
  component: Combobox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Combobox',
};

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Combobox.Root items={fruits}>
        <div className="block text-foreground mb-2">
          Select a fruit
          <Combobox.InputGroup className="mt-1">
            <Combobox.Input placeholder="Search fruits..." />
            <Combobox.Trigger>
              <Combobox.Icon />
            </Combobox.Trigger>
          </Combobox.InputGroup>
        </div>
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              <Combobox.List>
                {fruits.map((fruit) => (
                  <Combobox.Item
                    key={fruit}
                    value={fruit}
                  >
                    <Combobox.ItemIndicator />
                    {fruit}
                  </Combobox.Item>
                ))}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  ),
};

export const WithClear: Story = {
  render: () => (
    <div className="w-80">
      <Combobox.Root items={fruits}>
        <div className="block text-foreground mb-2">
          Select a fruit
          <Combobox.InputGroup className="mt-1">
            <Combobox.Input
              className="pr-20"
              placeholder="Search fruits..."
            />
            <Combobox.Clear />
            <Combobox.Trigger>
              <Combobox.Icon />
            </Combobox.Trigger>
          </Combobox.InputGroup>
        </div>
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              <Combobox.List>
                <Combobox.Empty>No results found</Combobox.Empty>
                {fruits.map((fruit) => (
                  <Combobox.Item
                    key={fruit}
                    value={fruit}
                  >
                    <Combobox.ItemIndicator />
                    {fruit}
                  </Combobox.Item>
                ))}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-80">
      <Combobox.Root
        items={fruits}
        multiple
      >
        <div className="block text-foreground mb-2">
          Select fruits
          <Combobox.InputGroup className="mt-1">
            <Combobox.Chips>
              <Combobox.Chip>
                <Combobox.ChipRemove />
              </Combobox.Chip>
              <Combobox.Input
                className="flex-1 min-w-[120px] bg-transparent focus-visible:outline-none"
                placeholder="Search fruits..."
              />
            </Combobox.Chips>
            <Combobox.Trigger>
              <Combobox.Icon />
            </Combobox.Trigger>
          </Combobox.InputGroup>
        </div>
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              <Combobox.List>
                {fruits.map((fruit) => (
                  <Combobox.Item
                    key={fruit}
                    value={fruit}
                  >
                    <Combobox.ItemIndicator />
                    {fruit}
                  </Combobox.Item>
                ))}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  ),
};
