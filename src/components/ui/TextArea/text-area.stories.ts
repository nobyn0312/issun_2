import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Textarea } from './text-area'; // components/ui/textarea.tsx

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea',
    },
    value: {
      control: 'text',
      description: 'Value of the textarea',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: fn(), // onChange イベントをモック
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a sample text.',
    placeholder: 'Enter your text here...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter your text here...',
    disabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    placeholder: 'Enter your text here...',
    className: 'bg-gray-100 text-blue-600',
  },
};