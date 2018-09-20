'use strict';

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Alibaba Taobao MidwayJs Team',
      description: 'Play node.js and change the world, join us!'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'Alibaba Taobao MidwayJs Team',
      description: 'Play node.js and change the world, join us!'
    }
  },
  themeConfig: {
    lang: 'zh-CN',
    repo: 'midwayjs',
    search: false,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'MidwayJs Products',
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
                  { text: 'Pandora.js - Node.js Application Manager', link: '/' },
                ]
              },
              {
                text: 'Node.js Monitoring Platform',
                items: [
                  { text: 'Sandbox - Privatized node. js monitoring product', link: '#' },
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
            text: 'MidwayJs 系列产品',
            items: [
              {
                text: '框架',
                items: [
                  { text: 'Midway - 面向未来的 Web 全栈框架', link: 'http://midwayjs.org/midway' },
                ]
              },
              {
                text: '应用管理',
                items: [
                  { text: 'Pandora.js - Node.js 应用管理器', link: '/' },
                ]
              },
              {
                text: '监控产品',
                items: [
                  { text: 'Sandbox - 私有化 Node.js 监控产品', link: '#' },
                ]
              }
            ]
          }
        ]
      }
    }
  }
};
