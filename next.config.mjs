import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  // We sit inside a folder that has sibling lockfiles; pin the tracing root here.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
