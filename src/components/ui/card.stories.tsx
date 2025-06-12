import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { HeartIcon, PlayIcon, StarIcon } from "@radix-ui/react-icons";

const meta = {
  title: "Liquid Glass/Card",
  component: Card,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
        {
          name: "dark gradient",
          value: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        },
        {
          name: "music gradient",
          value: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        },
        {
          name: "warm gradient",
          value:
            "linear-gradient(135deg, #f093fb 0%, #f5576c 40%, #f0e68c 100%)",
        },
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Liquid Glass Card</CardTitle>
        <CardDescription>
          A beautiful card with liquid glass aesthetics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/80">
          This card demonstrates the liquid glass material design with backdrop
          blur, subtle transparency, and elegant borders.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="default" size="sm" label="Cancel" />
        <Button variant="default" size="sm" icon={<PlayIcon />} label="Play" />
      </CardFooter>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-80 overflow-hidden">
      <div
        className="h-48 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg font-semibold mb-1">Ocean Waves</h3>
          <p className="text-white/80 text-sm">Nature's symphony</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-white/70 mb-4">
          Experience the calming sounds of ocean waves with crystal clear audio
          quality.
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="lg"
            icon={
              <div className="flex items-center space-x-1">
                <div className="w-1 h-3 bg-current rounded-full"></div>
                <div className="w-1 h-4 bg-current rounded-full"></div>
                <div className="w-1 h-3 bg-current rounded-full"></div>
              </div>
            }
          />
          <Button variant="default" size="sm" icon={<HeartIcon />} />
          <Button variant="default" size="sm" icon={<StarIcon />} />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    backgrounds: { default: "dark gradient" },
  },
};

export const MusicPlayer: Story = {
  render: () => (
    <Card className="w-96 backdrop-blur-2xl bg-white/5 border-white/10 shadow-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 flex-shrink-0" />
          <div>
            <CardTitle className="text-white text-lg">All Of Me</CardTitle>
            <CardDescription className="text-white/60">Nao</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full bg-white/20 rounded-full h-1">
          <div className="bg-white h-1 rounded-full w-1/3"></div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Button size="sm" variant="default">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </Button>
          <Button
            variant="default"
            size="lg"
            icon={<PlayIcon className="w-6 h-6" />}
          />
          <Button size="sm" variant="default">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    backgrounds: { default: "gradient" },
  },
};

export const NavigationCard: Story = {
  render: () => (
    <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <Button variant="default" size="sm" className="flex-1">
            <div className="flex flex-col items-center gap-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span className="text-xs">Home</span>
            </div>
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            <div className="flex flex-col items-center gap-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              <span className="text-xs">New</span>
            </div>
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            <div className="flex flex-col items-center gap-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-xs">Library</span>
            </div>
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            <div className="flex flex-col items-center gap-1">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="21 21l-4.35-4.35" />
              </svg>
              <span className="text-xs">Search</span>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    backgrounds: { default: "dark gradient" },
  },
};
