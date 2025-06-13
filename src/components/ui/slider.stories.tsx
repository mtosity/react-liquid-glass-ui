import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta = {
  title: "UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(to right,rgb(22, 10, 46),rgb(29, 17, 88))",
        },
        {
          name: "dark",
          value:
            'center / cover no-repeat url("https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=4140")',
        },
        {
          name: "image",
          value:
            'center / cover no-repeat url("https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=3674")',
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    showValue: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-72">
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Small</span>
        <Slider defaultValue={[25]} max={100} size="sm" showValue />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Medium</span>
        <Slider defaultValue={[50]} max={100} size="md" showValue />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Large</span>
        <Slider defaultValue={[75]} max={100} size="lg" showValue />
      </div>
    </div>
  ),
};

// Different value ranges and formatting
export const ValueFormatting: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-72">
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Percentage</span>
        <Slider
          defaultValue={[0.65]}
          max={1}
          step={0.01}
          size="md"
          showValue
          formatValue={(val) => `${Math.round(val * 100)}%`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Currency</span>
        <Slider
          defaultValue={[250]}
          max={1000}
          step={10}
          size="md"
          showValue
          formatValue={(val) => `$${val}`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Temperature</span>
        <Slider
          defaultValue={[22]}
          min={-10}
          max={40}
          step={1}
          size="md"
          showValue
          formatValue={(val) => `${val}°C`}
        />
      </div>
    </div>
  ),
};

// Interactive playground
export const Playground: Story = {
  parameters: {
    backgrounds: {
      default: "image",
    },
  },
  render: () => (
    <div className="flex flex-col gap-8 w-96 p-8">
      <div className="text-center">
        <h2 className="text-white text-2xl font-bold mb-2">
          Liquid Glass Slider
        </h2>
        <p className="text-white/70 text-sm">
          Drag the liquid drop knob to see the fluid animation
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <span className="text-white text-sm font-medium">Volume</span>
          <Slider
            defaultValue={[60]}
            max={100}
            step={1}
            size="lg"
            showValue
            formatValue={(val) => `${val}%`}
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-white text-sm font-medium">Brightness</span>
          <Slider
            defaultValue={[80]}
            max={100}
            step={5}
            size="md"
            showValue
            formatValue={(val) => `${val}%`}
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-white text-sm font-medium">Zoom</span>
          <Slider
            defaultValue={[1]}
            min={0.5}
            max={3}
            step={0.1}
            size="sm"
            showValue
            formatValue={(val) => `${val}x`}
          />
        </div>
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => (
    <div className="flex flex-col gap-8 w-72">
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Normal</span>
        <Slider defaultValue={[50]} max={100} showValue />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-white text-sm">Disabled</span>
        <Slider defaultValue={[30]} max={100} disabled showValue />
      </div>
    </div>
  ),
};
