import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dd, DefinitionList, Dt } from '../components/definition-list';

const meta: Meta<typeof DefinitionList> = {
  component: DefinitionList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/DefinitionList',
};

export default meta;
type Story = StoryObj<typeof DefinitionList>;

export const Default: Story = {
  render: () => (
    <DefinitionList>
      <Dt>Term 1</Dt>
      <Dd>Definition for term 1</Dd>
      <Dt>Term 2</Dt>
      <Dd>Definition for term 2</Dd>
      <Dt>Term 3</Dt>
      <Dd>Definition for term 3</Dd>
    </DefinitionList>
  ),
};

export const Unstyled: Story = {
  render: () => (
    <DefinitionList variant="unstyled">
      <Dt>Term 1</Dt>
      <Dd>Definition for term 1</Dd>
      <Dt>Term 2</Dt>
      <Dd>Definition for term 2</Dd>
    </DefinitionList>
  ),
};

export const ContactInfo: Story = {
  render: () => (
    <DefinitionList>
      <Dt>Email</Dt>
      <Dd>contact@example.com</Dd>
      <Dt>Phone</Dt>
      <Dd>+1 234 567 890</Dd>
      <Dt>Address</Dt>
      <Dd>123 Main Street, City, Country</Dd>
    </DefinitionList>
  ),
};
