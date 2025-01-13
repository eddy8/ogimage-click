import { SiteConfig } from "@/types/siteConfig";

export const SITE_OWNER = "Admin";
export const BASE_URL = "https://ogimage.bituier.com";
export const TWITTER_URL = "";
export const BLUESKY_URL = "";


const baseSiteConfig = {
  name: "Free OG Image Generator",
  title: "Free OG Image Generator - Instantly Create Custom Open Graph Images Online",
  description:
    "Create professional Open Graph (OG) images for your website or social media effortlessly with our Free OG Image Generator. Fully customizable, easy-to-use, and optimized for Facebook, Twitter, LinkedIn, and more.",
  url: BASE_URL,
  metadataBase: new URL(BASE_URL),
  keywords: ['Free OG Image Generator', 'Open Graph Image Creator', 'Custom OG Image Maker', 'Social Media Image Generator', 'Facebook OG Images', 'Twitter OG Images', 'LinkedIn OG Images', 'Online OG Image Tool', 'OG Metadata Generator'],
  authors: [
    {
      name: SITE_OWNER,
      url: BASE_URL,
      twitter: TWITTER_URL,
      bluesky: BLUESKY_URL,
    }
  ],
  creator: SITE_OWNER,
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.svg",
    apple: "/logo.svg", // apple-touch-icon.png
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.webp`],
    creator: baseSiteConfig.creator,
  },
}
