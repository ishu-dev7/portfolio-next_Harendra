import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Developer Portfolio",
    short_name: "DevFolio",
    description:
      "Senior .NET Full Stack Engineer — backend specialist, technical lead, and AI integration engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0B12",
    theme_color: "#7C5CFF",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
