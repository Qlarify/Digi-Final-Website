import { MetadataRoute } from "next";

const BASE_URL = "https://digitinize.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9 },
    { url: "/video-production", priority: 0.9 },
    { url: "/services/corporate-video-production", priority: 0.8 },
    { url: "/services/commercial-video-production", priority: 0.8 },
    { url: "/services/brand-films", priority: 0.8 },
    { url: "/services/color-grading", priority: 0.7 },
    { url: "/video-editing-services", priority: 0.9 },
    { url: "/corporate-video-editing", priority: 0.8 },
    { url: "/motion-graphics", priority: 0.8 },
    { url: "/white-label-video-editing", priority: 0.8 },
    { url: "/portfolio", priority: 0.8 },
    { url: "/industries", priority: 0.7 },
    { url: "/about", priority: 0.7 },
    { url: "/contact", priority: 0.9 },
    // Geo pages
    { url: "/video-editing-dubai", priority: 0.8 },
    { url: "/video-editing-uk", priority: 0.8 },
    { url: "/video-editing-usa", priority: 0.8 },
    { url: "/video-editing-canada", priority: 0.8 },
    { url: "/video-editing-australia", priority: 0.8 },
    // Industry pages
    { url: "/video-editing-for-saas", priority: 0.7 },
    { url: "/video-editing-for-agencies", priority: 0.7 },
    { url: "/video-editing-for-youtube-creators", priority: 0.7 },
    { url: "/video-editing-for-ecommerce", priority: 0.7 },
  ];

  return routes.map(({ url, priority = 0.7, changeFrequency = "monthly" as const }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
