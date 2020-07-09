module.exports = {
  siteMetadata: {
    title: 'Gatsby starter',
    description: 'Gatsby starter for personal projects',
    keywords: ['gatsby', 'starter'],
    /* Absolute deployment path without trailing slash */
    baseUrl: '',
    /* Used for facebook SEO. Pass 'website' or 'article' */
    contentType: 'website',
    /* Author usernames on social accounts */
    socials: {
      twitter: '',
      facebook: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@utils': 'src/utils',
          '@hooks': 'src/utils/hooks',
          '@api': 'src/api',
          '@images': 'src/images',
          '@icons': 'src/images/icons',
          '@decorators': '.storybook/decorators',
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
  ],
}
