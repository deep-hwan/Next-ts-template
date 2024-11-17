const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

module.exports = {
  siteUrl: siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.8,

  alternateRefs: [
    { href: `${siteUrl}/`, hreflang: 'ko' },
    { href: `${siteUrl}/en`, hreflang: 'en' },
    { href: `${siteUrl}/ko`, hreflang: 'ko' },
  ],

  additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],

  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: '/',
        alternateRefs: config.alternateRefs,
      };
    }
    return {
      loc: path,
      alternateRefs: config.alternateRefs.map(ref => ({
        ...ref,
        href: `${ref.href}${path}`,
      })),
    };
  },

  additionalPaths: async config => [
    {
      loc: '/menu1',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: '/menu2',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: '/menu3',
      changefreq: 'weekly',
      priority: 0.8,
    },
  ],

  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
