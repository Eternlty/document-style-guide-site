import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "中文技术文档的写作规范",
  description: "中文技术文档的写作规范",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', {}, `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '查看文档', link: '/Introduction' },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '公共领域',
      copyright: 'License：CC0 1.0 Universal (CC0 1.0) Public Domain Dedication'
    },

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '查看文档', link: '/Introduction' },
        ]
      },
      {
        text: '目录',
        items: [
          {text: '标题', link: '/title'},
          {text: '文本', link: '/text'},
          {text: '段落', link: '/paragraph'},
          {text: '数值', link: '/number'},
          {text: '标点符号', link: '/marks'},
          {text: '文档体系', link: '/structure'},
          {text: '参考链接', link: '/reference'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhheo/hexo-butterfly-editor' }
    ]
  }
})
