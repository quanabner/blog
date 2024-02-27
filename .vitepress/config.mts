import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "权权代表",
  description: "权权代表的个人博客",
  base: '/blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "个人主页", link: "profile/profile" },
    ],

    sidebar: {
      // 当用户位于 `javascript` 目录时，会显示此侧边栏
      "/javascript/": [
        {
          text: "javascript相关",
          items: [
            { text: "javascript1", link: "/javascript/markdown-examples" },
          ],
        },
      ],

      // 当用户位于 `node` 目录时，会显示此侧边栏
      "/node/": [
        {
          text: "node.js相关",
          items: [
            { text: "node.js1", link: "/node/api-examples" },
          ],
        },
      ],

      // 当用户位于 `nest` 目录时，会显示此侧边栏
      "/nest/": [
        {
          text: "nest相关",
          items: [
            { text: "nest1", link: "/nest/nest-examples" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/quanabner/blog" }],
  },
});
