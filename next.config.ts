import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob:",
  "font-src 'self' https://fonts.gstatic.com data:",
  `connect-src 'self'${isDev ? " ws: http://localhost:* http://127.0.0.1:*" : ""}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  // Only force HTTPS upgrades in production. In dev the site is served over
  // plain HTTP on localhost; Safari (unlike Chrome) honours this even for
  // localhost and fails to load CSS/JS, leaving the page unstyled.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // HSTS only in production. Safari persists HSTS even for localhost, which
  // would force every future http://localhost request to https and break dev.
  ...(isDev
    ? []
    : [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]),
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
