'use strict';

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Alibaba Taobao MidwayJS Team',
      description: 'Play node.js and change the world, join us!'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'Alibaba Taobao MidwayJS Team',
      description: 'Play node.js and change the world, join us!'
    }
  },
  themeConfig: {
    lang: 'zh-CN',
    repo: 'MidwayJS',
    search: false,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'MidwayJS Products',
            items: [
              {
                text: 'Web Framework',
                items: [
                  { text: 'Midway - Future-oriented web full stack framework', link: 'http://midwayjs.org/midway' },
                ]
              },
              {
                text: 'Application Management',
                items: [
                  { text: 'Pandora.js - Node.js Application Manager', link: 'http://midwayjs.org/pandora' },
                ]
              },
              {
                text: 'Node.js Monitoring Platform',
                items: [
                  { text: 'Sandbox - Privatized node. js monitoring product', link: 'http://midwayjs.org/sandbox' },
                ]
              },
              {
                text: 'Node.js Injection Module',
                items: [
                  { text: 'Injection - Use IoC in your Node.js application', link: 'http://midwayjs.org/injection' },
                ]
              }
            ]
          }
        ]
      },
      '/zh-cn/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        nav: [
          { text: '首页', link: '/zh-cn/' },
          {
            text: 'MidwayJS 系列产品',
            items: [
              {
                text: 'Web 框架',
                items: [
                  { text: 'Midway - 面向未来的 Web 全栈框架', link: 'http://midwayjs.org/midway' },
                ]
              },
              {
                text: '应用管理工具',
                items: [
                  { text: 'Pandora.js - Node.js 应用管理器', link: 'http://midwayjs.org/pandora' },
                ]
              },
              {
                text: '私有化监控产品',
                items: [
                  { text: 'Sandbox - 私有化 Node.js 监控产品', link: 'http://midwayjs.org/sandbox' },
                ]
              },
              {
                text: 'Node.js 依赖注入模块',
                items: [
                  { text: 'Injection - 让你的应用用上 IoC，体验依赖注入的感觉', link: 'http://midwayjs.org/injection' },
                ]
              }
            ]
          }
        ]
      }
    }
  }
};
