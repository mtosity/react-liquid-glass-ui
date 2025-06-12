import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "image",
      values: [
        {
          name: "image",
          value:
            'center / cover no-repeat url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670")',
        },
        {
          name: "gradient-warm",
          value:
            "linear-gradient(135deg, #ff9a56 0%, #ff6b95 50%, #c44569 100%)",
        },
        {
          name: "gradient-cool",
          value:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        },
        {
          name: "gradient-aurora",
          value:
            "linear-gradient(135deg, #a8edea 0%, #fed6e3 25%, #ff9a9e 50%, #fecfef 75%, #fecfef 100%)",
        },
        {
          name: "dark",
          value: "#111827",
        },
        {
          name: "light",
          value: "#F9FAFB",
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h1Glass",
        "h2Glass",
        "h3Glass",
        "h4Glass",
        "p",
        "body",
        "small",
        "muted",
      ],
    },
    as: {
      control: "text",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a default text.",
    variant: "body",
  },
};

export const GlassHeaders: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-12">
      <Typography variant="h1Glass">9:41</Typography>
      <Typography variant="h2Glass">Tuesday, April 1</Typography>
      <Typography variant="h3Glass">Good Morning</Typography>
      <Typography variant="h4Glass">Partly Cloudy</Typography>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "gradient-warm",
    },
  },
};

export const GlassOnCoolBackground: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-12">
      <Typography variant="h1Glass">9:41</Typography>
      <Typography variant="h2Glass">Messages</Typography>
      <Typography variant="h3Glass">Now Playing</Typography>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "gradient-cool",
    },
  },
};

export const GlassOnImageBackground: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-12">
      <Typography variant="h1Glass">9:41</Typography>
      <Typography variant="h2Glass">Lock Screen</Typography>
      <Typography variant="h3Glass">Slide to unlock</Typography>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "image",
    },
  },
};

export const GlassAuroraBackground: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-12">
      <Typography variant="h1Glass">12:34</Typography>
      <Typography variant="h2Glass">Sunday, December 15</Typography>
      <Typography variant="h3Glass">Aurora Dreams</Typography>
      <Typography variant="h4Glass">Perfectly Balanced</Typography>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "gradient-aurora",
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      className="flex flex-col gap-6 p-8 rounded-lg"
      style={{ background: "rgba(0,0,0,0.3)" }}
    >
      <div className="mb-4">
        <h3 className="text-white text-lg font-semibold mb-4">
          Regular Typography
        </h3>
        <Typography variant="h1" className="text-white mb-2">
          This is H1
        </Typography>
        <Typography variant="h2" className="text-white mb-2">
          This is H2
        </Typography>
        <Typography variant="h3" className="text-white mb-2">
          This is H3
        </Typography>
        <Typography variant="h4" className="text-white mb-4">
          This is H4
        </Typography>
      </div>

      <div className="mb-4">
        <h3 className="text-white text-lg font-semibold mb-4">
          Glass Typography
        </h3>
        <Typography variant="h1Glass" className="mb-2">
          Glass H1 Header
        </Typography>
        <Typography variant="h2Glass" className="mb-2">
          Glass H2 Header
        </Typography>
        <Typography variant="h3Glass" className="mb-2">
          Glass H3 Header
        </Typography>
        <Typography variant="h4Glass" className="mb-4">
          Glass H4 Header
        </Typography>
      </div>

      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Body Text</h3>
        <Typography variant="p" className="text-white">
          This is a paragraph. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>
        <Typography variant="body" className="text-white">
          This is body text. Used for default content.
        </Typography>
        <Typography variant="small" className="text-white">
          This is small text. Perfect for captions.
        </Typography>
        <Typography variant="muted" className="text-gray-400">
          This is muted text. For less important information.
        </Typography>
      </div>
    </div>
  ),
};

export const TimeDisplay: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center gap-2 p-16">
      <Typography variant="h1Glass">9:41</Typography>
      <Typography variant="h4Glass" className="opacity-80">
        Tuesday, April 1
      </Typography>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "gradient-warm",
    },
  },
};
