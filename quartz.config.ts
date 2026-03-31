import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Home",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "aoyama-hub.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Lora",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FAFAFA",
          lightgray: "#DDE2DD",
          gray: "#b2beb5",
          darkgray: "#2F4F4F",
          dark: "#1A2D2D",
          secondary: "#558B6E",
          tertiary: "#8FBC8F",
          highlight: "rgba(143, 188, 143, 0.15)",
          textHighlight: "##8FBC8F88",
        },
        darkMode: {
          light: "#21282E",         // Adjusted: Deepened your Slate so the text pops out
          lightgray: "#3C4E54",     // Your exact color: Dark Slate (Borders/Search bar)
          gray: "#5A7871",          // Your exact color: Muted Teal (Graph lines)
          darkgray: "#EAECE8",      // Adjusted: Brightened your Ash Gray for readable body text
          dark: "#CBD2C7",          // Your exact color: Light Ash (Used for Headers)
          secondary: "#8CA88F",     // Your exact color: Soft Sage (Links and Graph Nodes)
          tertiary: "#5A7871",      // Your exact color: Muted Teal (Hover states)
          highlight: "rgba(140, 168, 143, 0.15)", // Transparent Soft Sage
          textHighlight: "#8CA88F88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
