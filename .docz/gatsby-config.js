const { merge } = require('lodash/fp');

let custom;
try {
  custom = require('./gatsby-config.custom');
} catch (err) {
  custom = {};
}

const config = {
  siteMetadata: {
    title: 'React Design System',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/sean/Code/react-design-system/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Design System',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/Users/sean/Code/react-design-system',
          templates:
            '/Users/sean/Code/react-design-system/node_modules/docz-core/dist/templates',
          packageJson: '/Users/sean/Code/react-design-system/package.json',
          docz: '/Users/sean/Code/react-design-system/.docz',
          cache: '/Users/sean/Code/react-design-system/.docz/.cache',
          app: '/Users/sean/Code/react-design-system/.docz/app',
          appPublic: '/Users/sean/Code/react-design-system/.docz/public',
          appNodeModules: '/Users/sean/Code/react-design-system/node_modules',
          appPackageJson: '/Users/sean/Code/react-design-system/package.json',
          appYarnLock:
            '/Users/sean/Code/react-design-system/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/sean/Code/react-design-system/node_modules/docz-core/node_modules',
          gatsbyConfig: '/Users/sean/Code/react-design-system/gatsby-config.js',
          gatsbyBrowser:
            '/Users/sean/Code/react-design-system/gatsby-browser.js',
          gatsbyNode: '/Users/sean/Code/react-design-system/gatsby-node.js',
          gatsbySSR: '/Users/sean/Code/react-design-system/gatsby-ssr.js',
          importsJs:
            '/Users/sean/Code/react-design-system/.docz/app/imports.js',
          rootJs: '/Users/sean/Code/react-design-system/.docz/app/root.jsx',
          indexJs: '/Users/sean/Code/react-design-system/.docz/app/index.jsx',
          indexHtml:
            '/Users/sean/Code/react-design-system/.docz/app/index.html',
          db: '/Users/sean/Code/react-design-system/.docz/app/db.json',
        },
      },
    },
  ],
};

module.exports = merge(config, custom);
