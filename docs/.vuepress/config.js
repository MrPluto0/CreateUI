module.exports = {
  title: "CreateUI",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "logo.png",
    repo: "https://github.com/MrPluto0/CreateUI",
    repoLabel: "Github",
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        nav: [
          { text: "主页", link: "/" },
          { text: "指南", link: "/guide/" },
          { text: "组件", link: "/components/" },
        ],
        sidebar: {
          "/components/": [
            {
              title: "介绍",
              path: "",
            },
            {
              title: "畅聊气泡",
              path: "chatbox",
            },
            {
              title: "加载动画",
              path: "loading",
            },
            {
              title: "消息提示框",
              path: "toast",
            },
            {
              title: "模态对话框",
              path: "modal",
            },
            {
              title: "八音盒",
              path: "musicbox",
            },
          ],
        },
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        nav: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide" },
          { text: "Components", link: "/components" },
        ],
      },
    },
  },
  locales: {
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      description: "你的专属个性组件库",
    },
    "/en/": {
      lang: "en-US",
      description: "Vue-powered Static Site Generator",
    },
  },
};
