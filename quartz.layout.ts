import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/keymaker7",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.ProfileImage(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: (node) => {
        const name = (node as any).name ?? ""
        // hide private/structural folders from the sidebar
        if (name === "_archive") return false
        if (name === "attachments") return false
        if (name === "tags") return false
        return true
      },
      mapFn: (node) => {
        if (!node.displayName) return
        // strip leading "[어벤저스] " etc. prefix only — do NOT touch dates/dashes
        const cleaned = node.displayName
          .replace(/^\[[^\]]*\]\s*/, "")
          // strip leading "YYYY-MM-DD-HHMM_" timestamp prefix on auto-generated posts
          .replace(/^\d{4}-\d{2}-\d{2}-\d{4}_\s*/, "")
          .trim()
        if (cleaned) node.displayName = cleaned
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.ProfileImage(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: (node) => {
        const name = (node as any).name ?? ""
        // hide private/structural folders from the sidebar
        if (name === "_archive") return false
        if (name === "attachments") return false
        if (name === "tags") return false
        return true
      },
      mapFn: (node) => {
        if (!node.displayName) return
        // strip leading "[어벤저스] " etc. prefix only — do NOT touch dates/dashes
        const cleaned = node.displayName
          .replace(/^\[[^\]]*\]\s*/, "")
          // strip leading "YYYY-MM-DD-HHMM_" timestamp prefix on auto-generated posts
          .replace(/^\d{4}-\d{2}-\d{2}-\d{4}_\s*/, "")
          .trim()
        if (cleaned) node.displayName = cleaned
      },
    }),
  ],
  right: [],
}
