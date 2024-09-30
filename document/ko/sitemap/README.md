## Sitemap

✏️ `.env` 에서 `NEXT_PUBLIC_SITE_URL`을 수정하세요

### SEO 생성 및 셋팅

🗂️ **경로 : src > \_head > seo.ts**

각 페이지에서 SEO 컴포넌트를 가져와 페이지에 대한 타이틀, 내용, 이미지를 SEO 최적화에 처리할 수 있습니다

---

### Sitemap 셋팅

#### next-sitemap.config.js

배포된 사이트를 설정할 수 있습니다 (현재 기본 값으로 셋팅 중)

#### src > pages > apis > sitemap.ts

Next.js API 라우트를 사용해 동적 및 정적 경로를 포함한 XML 사이트맵을 실시간으로 생성하여 검색 엔진에 제공합니다.<br/>
API 요청 시 동적 경로 데이터를 서버에서 가져와 사이트맵에 추가하고, 이를 XML 형식으로 반환해 SEO 최적화를 돕습니다.<br/>
👉🏻 각 페이지 라우팅 형식에 맞게 코드를 수정하세요.

#### src > pages > server-sitemap.xml

사이트의 동적 및 정적 경로를 수집하여 검색 엔진에 제공됩니다<br/>
getServerSideProps를 사용해 서버 측에서 실시간으로 사이트맵을 생성하고, 이를 public 폴더에 저장합니다.<br/>
👉🏻 각 페이지 라우팅 형식에 맞게 코드를 수정하세요.

#### scripts > generate-sitemap.js

웹사이트의 모든 페이지 경로를 수집하여 sitemap.xml 파일을 생성하는 스크립트입니다.<br/>
이 파일은 검색 엔진이 사이트 구조를 이해하고 페이지를 더 잘 인덱싱할 수 있도록 도와줍니다.<br/>
👉🏻 각 페이지 라우팅 형식에 맞게 코드를 수정하세요.

---

### 사이트맵 생성

- Yarn Pnp 사용 시 : **npx next-sitemap** 명령어 입력
- **yarn run build** or **npm run build**
