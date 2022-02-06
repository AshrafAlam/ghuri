const siteMetadata = {
    title: 'ঘুড়িঃ শিল্প সাহিত্যের বাংলা প্লাটফর্ম',
    author: 'আশরাফুল আলম জয়',
    headerTitle: 'ঘুড়ি',
    description: 'শিল্প সাহিত্যের বাংলা প্লাটফর্ম',
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: 'https://writings-xi.vercel.app',
    siteRepo: 'https://github.com/AshrafAlam/writings',
    siteLogo: '/static/images/logo.png',
    image: '/static/images/avatar.png',
    socialBanner: '/static/images/twitter-card.png',
    email: 'joycsc@gmail.com',
    github: 'https://github.com/AshrafAlam/ghuri',
    facebook: 'https://www.facebook.com/ashraful.alam',
    locale: 'bn',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'UA-9386106-7', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
      provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: 'https://github.com/AshrafAlam/tailwind-nextjs-starter-blog',
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: 'joycsc',
    },
  },
}

module.exports = siteMetadata
