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
      title: "📂 카테고리",
      folderClickBehavior: "collapse",
      folderDefaultState: "open",
      useSavedState: true,
      filterFn: (node) => {
        const hide = ["_archive", "private", "templates", ".obsidian", "테스트", "test", "tags"]
        if (hide.some((h) => node.name === h)) return false
        if (node.name.startsWith("_") && node.file) return false
        return true
      },
      mapFn: (node) => {
        if (node.displayName) {
          node.displayName = node.displayName
            .replace(/^\[.*?\]\s*/, "")
            .replace(/\s*—\s*.+$/, "")
            .replace(/\s*\(.*?\)\s*$/, "")
        }
      },
      sortFn: (a, b) => {
        if (!a.file && b.file) return -1
        if (a.file && !b.file) return 1
        return a.displayName.localeCompare(b.displayName, "ko")
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
      title: "📂 카테고리",
      folderClickBehavior: "collapse",
      folderDefaultState: "open",
      useSavedState: true,
      filterFn: (node) => {
        const hide = ["_archive", "private", "templates", ".obsidian", "테스트", "test", "tags"]
        if (hide.some((h) => node.name === h)) return false
        if (node.name.startsWith("_") && node.file) return false
        return true
      },
      mapFn: (node) => {
        if (node.displayName) {
          node.displayName = node.displayName
            .replace(/^\[.*?\]\s*/, "")
            .replace(/\s*—\s*.+$/, "")
            .replace(/\s*\(.*?\)\s*$/, "")
        }
      },
      sortFn: (a, b) => {
        if (!a.file && b.file) return -1
        if (a.file && !b.file) return 1
        return a.displayName.localeCompare(b.displayName, "ko")
      },
    }),
  ],
  right: [],
}
