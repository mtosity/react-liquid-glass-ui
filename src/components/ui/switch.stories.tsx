import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An iPhone-style toggle switch with smooth glass-like animations. Features a white knob that transforms into a translucent glass appearance during transitions, complete with gradient borders, scaling effects, and spring physics.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size variant of the switch",
    },
    checked: {
      control: { type: "boolean" },
      description: "Controlled checked state",
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Default checked state (uncontrolled)",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Glass Animation Showcase
export const GlassAnimation: Story = {
  render: () => {
    const [isOn, setIsOn] = useState(false);

    return (
      <div className="flex flex-col items-center gap-8 p-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Glass Animation Effect
          </h3>
          <p className="text-gray-600 mb-6 max-w-md">
            Watch the knob transform into a translucent glass with gradient
            borders, scale to 125%, slide smoothly, then return to its solid
            white state.
          </p>
        </div>

        <div className="relative">
          <Switch checked={isOn} onCheckedChange={setIsOn} size="lg" />
        </div>

        <div className="text-center">
          <div
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isOn
                ? "bg-green-100 text-green-800 shadow-md"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {isOn ? "State: ON" : "State: OFF"}
          </div>
        </div>
      </div>
    );
  },
};

// Default story
export const Default: Story = {
  args: {
    size: "md",
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Switch size="sm" defaultChecked />
        <span className="text-sm text-gray-600">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Switch size="md" defaultChecked />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Switch size="lg" defaultChecked />
        <span className="text-sm text-gray-600">Large</span>
      </div>
    </div>
  ),
};

// Interactive controlled example
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <Switch checked={checked} onCheckedChange={setChecked} size="md" />
        <p className="text-sm text-gray-600">
          Switch is {checked ? "ON" : "OFF"}
        </p>
      </div>
    );
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    size: "md",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    size: "md",
    disabled: true,
    defaultChecked: true,
  },
};

// Multiple switches demonstration
export const MultipleSwitches: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      soundEffects: false,
    });

    const updateSetting =
      (key: keyof typeof settings) => (checked: boolean) => {
        setSettings((prev) => ({ ...prev, [key]: checked }));
      };

    return (
      <div className="space-y-4 w-64">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium">Notifications</span>
          <Switch
            checked={settings.notifications}
            onCheckedChange={updateSetting("notifications")}
            size="md"
          />
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium">Dark Mode</span>
          <Switch
            checked={settings.darkMode}
            onCheckedChange={updateSetting("darkMode")}
            size="md"
          />
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium">Auto Save</span>
          <Switch
            checked={settings.autoSave}
            onCheckedChange={updateSetting("autoSave")}
            size="md"
          />
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium">Sound Effects</span>
          <Switch
            checked={settings.soundEffects}
            onCheckedChange={updateSetting("soundEffects")}
            size="md"
          />
        </div>
      </div>
    );
  },
};

// Animation showcase
export const AnimationShowcase: Story = {
  render: () => {
    const [isOn, setIsOn] = useState(false);

    return (
      <div className="flex flex-col items-center gap-6 p-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">iPhone-style Switch</h3>
          <p className="text-sm text-gray-600 mb-4">
            Click to see smooth spring animations
          </p>
        </div>

        <Switch checked={isOn} onCheckedChange={setIsOn} size="lg" />

        <div className="text-center">
          <div
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              isOn ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
            }`}
          >
            {isOn ? "✓ Enabled" : "✗ Disabled"}
          </div>
        </div>
      </div>
    );
  },
};
