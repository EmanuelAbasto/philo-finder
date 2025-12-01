import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "biblioteca.acropolis.org",
      "upload.wikimedia.org",
      "static.wixstatic.com",
      "blogger.googleusercontent.com",
      "i.pinimg.com",
      "drive.google.com",
      "tse2.mm.bing.net",
      "s3.amazonaws.com",
    ],
  },
};

export default nextConfig;
