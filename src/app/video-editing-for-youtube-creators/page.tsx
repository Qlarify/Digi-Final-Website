import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing for YouTube Creators | Digitinize",
  description: "Professional YouTube video editing for content creators. Grow your channel with high-retention edits, custom thumbnails, and consistent uploads.",
  alternates: { canonical: "https://digitinize.com/video-editing-for-youtube-creators" },
};
const data = {
  badge: "YouTube Creator Editing",
  headline: "Video Editing for",
  subheadline: "YouTube Creators",
  description: "Focus on creating. We handle the editing. High-retention cuts, engaging graphics, and a consistent upload schedule — without the burnout.",
  services: ["Long-Form YouTube Editing", "High-Retention Cut Editing", "Custom Thumbnail Design", "End Screen & Cards", "Chapters & Timestamps", "Short-Form Clips from Long Videos", "Subtitles & Captions", "Weekly Upload Packages"],
  stats: [{ value: "100+", label: "Creators Served" }, { value: "72h", label: "Per Video Turnaround" }, { value: "4K", label: "Output Quality" }, { value: "↑40%", label: "Avg Retention Lift" }],
  cta: "Start a Creator Plan",
};
export default function VideoEditingForYouTubePage() { return <ServiceLandingPage data={data} />; }
