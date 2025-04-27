import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextField } from './text-field'; // components/ui/text-field.tsx

const meta = {
  title: 'UI/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
      description: 'Type of the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    error: {
      control: 'boolean',
      description: 'Indicates an error state',
    },
    value: {
      control: 'text',
      description: 'Value of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    id: {
      control: 'text',
      description: 'ID for the input field',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: fn(), // onChange イベントをモック
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name...',
    id: 'name',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email...',
    id: 'email',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
    id: 'password',
  },
};
