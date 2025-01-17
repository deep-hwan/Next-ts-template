/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const sitemapConfig = {
  siteUrl: siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  outDir: './public',
  priority: 0.7,
  trailingSlash: false, //  true 시 항상 URL 끝에 / 붙임s
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404'],
      },
    ],
    // additionalSitemaps: [`${siteUrl}/sitemap-0.xml`],
  },

  // 특정 경로 설정 -  우선순위 처리
  additionalPaths: async config => [
    {
      loc: '/',
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: '/form-fields',
      changefreq: 'daily',
      priority: 0.8,
    },
  ],
};

module.exports = sitemapConfig;
