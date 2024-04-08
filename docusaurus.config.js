// Import the Algolia plugin
const algolia = require('docusaurus-plugin-algolia');
const { themes } = require('prism-react-renderer');

module.exports = {
  // Site metadata
  title: 'Dynamics 365 Business Central User Manual',
  tagline: 'Business Central is Cool 🤗',
  favicon: 'img/favicon.ico',

  // Site URL
  url: 'https://prismatic-gingersnap-404c56.netlify.app/',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'Mwakisaghu',
  projectName: 'bc_user_manual',

  // Error handling
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sw'],
  },

  // Presets
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Mwakisaghu/bc_user_manual',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Mwakisaghu/bc_user_manual',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  // Theme configuration
  themeConfig: {
    image: 'img/Dynamics-365-Business-Central.jpg',
    navbar: {
      title: 'Business Central',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'User Manual',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        // Algolia search will be automatically added by the plugin
        {
          href: 'https://github.com/Mwakisaghu/bc_user_manual',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Manual',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/Mwakisaghu/bc_user_manual',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Business Central, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};
