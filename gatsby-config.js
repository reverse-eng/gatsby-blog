module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby workshop',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
