const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

// 동적 경로 API에서 데이터 가져오기_ 예시 참고하기
// public > server-sitemap.xml 동적 사이트맵이 생성됩니다
async function fetchDynamicRoutes() {
  try {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch(`${SITE_URL}/api/v1/contents/ids`, {
      method: 'POST',
    });
    const data = await response.json();
    const { uiuxIds, widgetIds } = data;

    const currentDate = new Date().toISOString().split('T')[0];

    // 각 ID로 경로 배열 생성
    const uiuxPaths = uiuxIds.map(id => ({
      loc: `${SITE_URL}/uiux/${id}`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.8,
    }));

    const widgetPaths = widgetIds.map(id => ({
      loc: `${SITE_URL}/widget/${id}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7,
    }));

    return [...uiuxPaths, ...widgetPaths];
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
    return [];
  }
}

// 수정 미필요
// 사이트맵 생성 함수
async function generateCustomSitemap() {
  try {
    // `next-sitemap` 명령어 실행
    execSync(`npx next-sitemap --config ${path.resolve(__dirname, '../next-sitemap.config.js')}`, { stdio: 'inherit' });

    // 동적 경로 가져오기
    const dynamicPaths = await fetchDynamicRoutes();

    // server-sitemap.xml에 동적 경로 추가
    const sitemapPath = path.resolve(__dirname, '../public/server-sitemap.xml');
    const dynamicSitemapContent = dynamicPaths
      .map(
        ({ loc, lastmod, changefreq, priority }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`
      )
      .join('\n');

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${dynamicSitemapContent}\n</urlset>`;

    // public/server-sitemap.xml에 파일 생성
    fs.writeFileSync(sitemapPath, sitemapContent);

    console.log('server-sitemap.xml generated successfully');
  } catch (error) {
    console.error('Error generating server-sitemap.xml:', error);
  }
}

generateCustomSitemap();
