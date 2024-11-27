const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dbleui.com';

module.exports = {
  siteUrl: siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.8,

  alternateRefs: [
    { href: `${siteUrl}`, hreflang: 'en' }, // 기본 영어 경로
    { href: `${siteUrl}/ko`, hreflang: 'ko' }, // 한국어 경로
  ],

  additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],

  transform: async (config, path) => {
    if (path === '/') {
      // 루트 경로 처리
      return {
        loc: '/',
        alternateRefs: config.alternateRefs,
      };
    }

    // 다른 경로에 대해 처리
    return {
      loc: path,
      alternateRefs: config.alternateRefs.map(ref => ({
        ...ref,
        href: `${ref.href}`,
      })),
    };
  },

  additionalPaths: async config => [
    {
      loc: '/uiux',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: '/widget',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: '/order', // 고객센터 페이지
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
