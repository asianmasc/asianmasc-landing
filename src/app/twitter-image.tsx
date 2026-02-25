// Re-export the OpenGraph image for Twitter
export { default, alt, size, contentType } from "./opengraph-image";

// Turbopack requires runtime to be statically declared, not re-exported
export const runtime = "edge";
