## Sitemap

✏️ `.env` 에서 `NEXT_PUBLIC_SITE_URL`을 수정하세요

### 실행하기

    npx next-sitemap --config next-sitemap.config.js

### SEO 생성 및 셋팅

🗂️ **경로 : src > \_head > next-seo.ts**

각 페이지에서 SEO 컴포넌트를 가져와 페이지에 대한 타이틀, 내용, 이미지를 SEO 최적화에 처리할 수 있습니다

---

### Sitemap 셋팅

#### next-sitemap.config.js // next-seo.config.js

(🙏🏻 필수 처리) 배포할 사이트의 SEO에 대한 정보 및 최적화를 설정할 수 있습니다

#### scripts > generate-sitemap.js

Code for creating and deploying dynamic site maps (query:id).
If dynamic routing exists on the site you want to deploy, make sure to update the code appropriately.
Entering the yarn build command creates server-sitemap.xml

---

### 사이트맵 생성

**✅ yarn run build** or **npm run build** >> sitemap이 public에 생생 및 배포됩니다
