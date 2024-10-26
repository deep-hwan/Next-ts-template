/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  siteUrl: SITE_URL, // 게시하는 site의 url
  exclude: ['/404'],
  generateRobotsTxt: true, // robots.txt generate 여부 (자동생성 여부)
  sitemapSize: 5000, // sitemap별 최대 크기 (최대 크기가 넘어갈 경우 복수개의 sitemap으로 분리됨)
  changefreq: 'daily', // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
  priority: 0.7, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)

  additionalSitemaps: [
    `${SITE_URL}/server-sitemap.xml`, // 서버에서 생성한 sitemap 추가
  ],

  robotsTxtOptions: {
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],

    // 정책 설정
    policies: [
      {
        userAgent: '*', // 모든 검색 엔진 크롤러에 대한 정책을 설정합니다.
        allow: '/', // 전체 사이트에 대한 크롤링을 허용합니다.
      },
      // 추가 정책이 필요할 경우 배열 요소로 추가 작성
    ],
  }, // robots.txt 옵션 설정
};
