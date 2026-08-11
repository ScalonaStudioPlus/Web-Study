/// <reference types="vite/client" />

// Allow importing video files as asset URLs
declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}
