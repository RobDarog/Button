import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button, type ButtonSize, type ButtonVariant, type ButtonVisualState } from './Button';

const IconDot = () => <span className="block h-2.5 w-2.5 rounded-full bg-white" />;

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Figma property: Type',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'Figma property: State (forces the visual state for review)',
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'Figma property: Size',
    },
    children: { control: 'text' },
    icon: { control: false },
  },
  args: {
    children: 'Mygtukas',
    type: 'primary',
    state: 'default',
    size: 'medium',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Core states -----------------------------------------------------------

export const Default: Story = {};

export const Primary: Story = {
  args: { type: 'primary', icon: <IconDot /> },
};

export const Secondary: Story = {
  args: { type: 'secondary' },
};

export const Ghost: Story = {
  args: { type: 'ghost' },
};

export const Hover: Story = {
  args: { type: 'primary', state: 'hover', icon: <IconDot /> },
  parameters: {
    docs: {
      description: {
        story: 'Forces the hover look for design review. In real usage this comes from `:hover` automatically.',
      },
    },
  },
};

export const Disabled: Story = {
  args: { type: 'primary', state: 'disabled', icon: <IconDot /> },
};

// --- Sizes -------------------------------------------------------------

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  ),
};

// --- Full interactive matrix, mirrors the Figma variant frame ----------

const TYPES: ButtonVariant[] = ['primary', 'secondary', 'ghost'];
const STATES: ButtonVisualState[] = ['default', 'hover', 'disabled'];
const SIZES: ButtonSize[] = ['medium', 'large'];

export const InteractiveMatrix: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Every Type × State × Size combination from the Figma component set, side by side.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {SIZES.map((size) => (
        <div key={size}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{size}</p>
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            {TYPES.map((type) =>
              STATES.map((state) => (
                <div key={`${type}-${state}-${size}`} className="flex flex-col items-start gap-1.5">
                  <span className="text-[10px] text-gray-400">
                    {type} / {state}
                  </span>
                  <Button type={type} state={state} size={size} icon={type === 'primary' ? <IconDot /> : undefined}>
                    Mygtukas
                  </Button>
                </div>
              )),
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};
