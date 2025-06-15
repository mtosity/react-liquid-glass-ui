import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const RewindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
  </svg>
);

const ForwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 18l8.5-6L13 6v12zm-2-6l-8.5-6v12l8.5-6z" />
  </svg>
);

const AirplayIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
    <polygon points="12 15 17 20 7 20 12 15" />
  </svg>
);

const SoundIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm7.5 1.5v3a1.5 1.5 0 0 0 0-3zM14 9v6a4.5 4.5 0 0 0 0-6z" />
    <path d="M16.5 6.5v11a7 7 0 0 0 0-11z" />
  </svg>
);

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(to right, #8B4CC2, #672ED9)",
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
    variant: {
      control: "select",
      options: ["default", "frosted"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="p-8">A simple glassy card.</div>,
    className: "w-80",
  },
};

export const MusicPlayer: Story = {
  render: (args) => (
    <Card {...args} className="w-[340px] p-4">
      <div className="flex items-center gap-4">
        <img
          src="https://plus.unsplash.com/premium_photo-1682125896993-12a1758b6cb3"
          alt="Album art"
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex-1">
          <h2 className="font-bold text-lg">Birds of time</h2>
          <p className="text-white/80">Enna Alouette</p>
        </div>
        <Button
          variant="default"
          size="sm"
          shape="circle"
          icon={<SoundIcon />}
        />
      </div>
      <div className="mt-4">
        <div className="relative h-2 w-full bg-white/20 rounded-full">
          <div className="absolute top-0 left-0 h-full w-2/3 bg-white rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-white/80 mt-1">
          <span>1:45</span>
          <span>-1:04</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <Button
          variant="default"
          size="md"
          shape="circle"
          icon={<RewindIcon />}
        />
        <Button
          variant="default"
          size="lg"
          shape="circle"
          icon={<PauseIcon />}
        />
        <Button
          variant="default"
          size="md"
          shape="circle"
          icon={<ForwardIcon />}
        />
        <Button
          variant="default"
          size="sm"
          shape="circle"
          icon={<AirplayIcon />}
        />
      </div>
    </Card>
  ),
};
