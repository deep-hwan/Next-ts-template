# Create Next Speed Template

This is a template set up to create Next.js App with fast speed and high performance<br/>

**🇰🇷 :**[ 한국어 문서로 내용보기](https://github.com/deep-hwan/next.js-speed-template/blob/main/document/README.md)<br/>

**Demo URL:**
[This Click☝🏻 Please](https://next-typescript-tamplate.vercel.app)


## Getting Started

    npx create-next-speed-template my-app
    cd my-app
    yarn run dev


---

## Use Important Library

-   langauage : **Typescript**
-   State : **Recoil**
-   Asynchronous State : **TanStack Query v5**
-   Api : **Axios**
-   Style(Css) : **Emotion/react**
-   Authentication : **NextAuth**
-   Bundler Doctor : **bundle-analyzer**
-   SVG : **@svgr/webpack**



---

## Info

This template is set to Yarn Berry - Plug'n Play.<br/> We recommend that you use the template through the Yarn command 🙏🏻


### ⚙️ Yarn Berry Plug'n Play (PnP) enabled or disabled

yarn npm : .yarnrc.yml => nodeLinker: node-modules
yarn pnp : .yarnrc.yml => nodeLinker: pnp


### ✅ Essential : Set up yarn berry

    npm install -g yarn
    yarn set version berry
    yarn install

### ✔️ Optional : In Case of Type or Prettier Issue

Install Plug-In : [ZipFS - a zip file system](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)
    
    yarn dlx @yarnpkg/sdks vscode
    yarn add --dev --exact prettier

### ✔️ Optional : In the event of an Issue after the Yarn Run Build Command

    yarn add @babel/runtime --dev
    yarn cache clean
    yarn set version berry
    yarn install

---


## Design Systems (Widgets)

### [🔎 Look Design Systems ☝🏻](https://github.com/deep-hwan/next.js-speed-template/tree/main/src/_ui/Readme.md)

🗂️ **Root : src > _ui**

Check out the finished design system widgets<be/>
I'll be responsible for your UI experience and work efficiency




---

## Themes (테마)

#### 파일경로 : src > lib > themes

상황에 따른 컬러 및 사이즈, 미디어쿼리 등을 즉시 사용할 수 있는 테마입니다.

---

## Utils (유틸 기능)

#### 파일경로 src > lib > utils

프론트 개발에 도움이 되는 다양한 유틸 기능입니다.

-   enum : enum을 미리 셋팅 후 가져와 사용할 수 있습니다.

-   regEx : 이메일 및 비밀번호 정규식을 즉시 사용할 수 있습니다. ex\_ regEx.email.text(email)

---

## Hooks (커스텀 훅)

#### 파일경로 src > lib > hooks

프론트 개발에 도움이 되는 커스텀 훅 입니다.

-   useCookie : set, get, remove를 사용하여 쿠키를 설정 및 읽을 수 있습니다

-   useLocalStorage : set, get, remove를 사용하여 로컬스토리지를 설정 및 읽을 수 있습니다

-   useInfiniteQueryObserver : react-query의 인피티니스크롤 hook을 사용합니다

-   useIntersectionObserver : 무한 스크롤 기능을 사용할 때 사용되는 옵저버 훅입니다

-   useObserver : 옵저버의 상태를 처리합니다

-   useMoment : 날짜를 시각적으로 처리하는 훅입니다. (예\_ yyyy-mm-dd , yyyy.mm.dd, y전, 방금전 ...)

-   useClickOutSide : DOM 외부 요소를 클릭 시 처리되는 훅입니다\_ 모달 닫기 기능에 추천합니다

-   useRouteOnload: 해당 페이지에서 나갈 때 저장된 recoil 상태를 초기화 할때 사용하는 훅입니다

-   useTanstackQuery : Tanstack-Query 라이브러리 hook을 관리합니다

-   usePlatformOs : 사용중인 기기의 OS를 반환합니다

-   useSafeArea : IOS기기의 status 영역을 포함하는 padding 값을 생성합니다

-   useStopSwipe : 모바일 기기에서 스와이프를 통해 뒤로가기를 막을 수 있습니다

-   useUid : 임의의 문자열(id) 을 랜덤하게 생성합니다

-   useViewportHeight : 현재 레이아웃의 높이값을 알 수 있습니다

-   useOpenWebBrowser : 플랫폼 내에서 웹뷰로 해당 사이트를 열람할 때 "크롬" 또는 "사파리" 브라우저로 동작됩니다

---

## Site-map

yarn berry PnP 사용 시 사이트 맵 생성을 위해 아래 명령어를 입력하세요

     npx next-sitemap

1. src > head > seo.ts : 검색엔진에 사이트 키워드를 작성 (권장 / 필수)

2. src > pages > api > sitemap.ts 에서 staticPages 라우트 추가 / dynamicRoutes 동적 라우트의 서버 api URL 추가

3. next.config.js 에서 siteUrl > 도메인 주소로 변경

4. next-sitemap.config.js에서 siteUrl : 도메인 주소로 변경 / additionalSitemaps : 도메인 주소/sitemap.xml로 변경

5. npm run build

---

## RSS 수정 (선택)

-   src > pages > api > rss.ts 를 수정하세요

---

## 배포 전 주의사항

배포 전 반드시 아래에 내용을 배포하는 서비스에 맞게 수정한 후 빌드하세요!

1. pages > api > sitemap.ts 에서 사이트 맵을 수정하세요.

2. scripts > generate-sitemap.js 에서 사이트 맵 내용을 수정 후 > package.json에서 scripts > build:next build && node ./scripts/generate-sitemap.js 를 수정하세요

3. next-sitemap.config 에서 사이트 맵 내용을 수정하세요.

4. public > manifest.json 에서 PWA (배포 서비스) 내용 수정

5. next.config.js 에서 siteUrl 수정

6. npx next-sitemap << 명령어를 통해 사이트 맵을 생성하세요 (\* pnp)

7. npm run build
