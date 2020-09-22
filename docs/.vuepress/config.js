'use strict';

module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Midway',
      description: '面向未来的 Web 全栈应用开发框架',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Midway',
      description: 'Future oriented full-stack web framework',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'Midway',
        description: '面向未来的 Web 全栈应用开发框架',
        repo: 'midwayjs/midway',
        docsDir: 'docs',
        editLinks: true,
        serviceWorker: {
          updatePopup: true,
        },
        sidebar: require('./nav'),
        nav: [
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'Midway',
        description: 'Future oriented full-stack Web framework',
        repo: 'midwayjs/midway',
        docsDir: 'docs',
        editLinks: true,
        serviceWorker: {
          updatePopup: true,
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide' },
          { text: 'IoC', link: '/en/ioc' },
          { text: 'Toolkit', link: '/en/tool_set' },
          { text: 'TS Guide', link: '/en/ts_start' },
          {
            text: 'API',
            link: 'http://midwayjs.org/midway/api-reference/globals.html',
          },
          {
            text: 'MidwayJs Team',
            items: [
              {
                text: 'Framework',
                items: [
                  {
                    text: 'Midway - Future oriented Web framework',
                    link: '/en/',
                  },
                ],
              },
              {
                text: 'Application Manger',
                items: [
                  {
                    text: 'Pandora.js - Node.js Application Manager',
                    link: 'http://midwayjs.org/pandora/',
                  },
                ],
              },
              {
                text: 'Monitoring',
                items: [
                  {
                    text: 'Sandbox - Private Node.js APM',
                    link: 'https://github.com/midwayjs/sandbox-docker',
                  },
                ],
              },
              {
                text: 'Node.js Injection Module',
                items: [
                  {
                    text: 'Injection - Use IoC in your Node.js application',
                    link: 'http://midwayjs.org/injection',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  lastUpdated: 'Last Updated',
};
