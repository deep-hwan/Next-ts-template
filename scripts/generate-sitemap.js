const path = require('path');
const fs = require('fs');

const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 예시입니다
export const fetchAppDate = async () => {
  try {
    const res = await axios.get(`${SITE_URL}/api/posts`); /// 동적라우팅 api 주소
    if (res.status !== 200) {
      console.error(`Failed to fetch posts, status code: ${res.status}`);
      return [];
    }
    const posts = res.data;
    // 동적라우팅 처리
    return posts.map(p => `/appDate/${p.id}`); // pages 라우팅 경로
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // 오류 발생 시 빈 배열 반환
  }
};

const generateSitemap = async () => {
  const paths = await fetchAppData();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paths
    .map(url => {
      return `
    <url>
      <loc>${SITE_URL}${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
`;

  fs.writeFileSync(SITEMAP_PATH, sitemap);
};

generateSitemap();
