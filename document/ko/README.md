# Create Next Speed Template

빠른 속도와 높은 성능으로 Next.js App을 만들 수 있도록 셋팅된 템플릿입니다<br/>
현재 템플릿은 **page 라우팅** 구조로 제공하고 있어요<br/>

**미리보기:**
[여기에서 확인 가능해요☝🏻](https://next-typescript-tamplate.vercel.app)

## 시작하기

    npx create-next-speed-template my-app
    cd my-app
    yarn run dev

---

## 사용된 주요 라이브러리

- langauage : **Typescript**
- State : **Recoil**
- Asynchronous State : **TanStack Query v5**
- Api : **Axios**
- Style(Css) : **Emotion/react**
- Authentication : **NextAuth**
- Bundler Doctor : **bundle-analyzer**
- SVG : **@svgr/webpack**

---

## 안내사항

해당 템플릿은 Yarn Berry - Plug'n Play 으로 셋팅되었습니다. <br/>Yarn 명령어를 통해 템플릿을 사용할 것을 권장합니다 🙏🏻
<br/>

### Yarn Berry Plug'n Play (PnP) 활성화 유무 (선택)

yarn npm : .yarnrc.yml => nodeLinker: node-modules<br/>
yarn pnp : .yarnrc.yml => nodeLinker: pnp

### ✅ 필수사항 : yarn berry를 초기 설치 및 셋팅하세요

    npm install -g yarn
    yarn set version berry
    yarn install

### ✔️ 선택사항 : Type 및 Prettier 이슈가 발생 시 아래 플러그인 및 명령어를 입력해보세요 🙏🏻

Plug-In 을 설치하세요 : [ZipFS - a zip file system](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)

    yarn dlx @yarnpkg/sdks vscode
    yarn add --dev --exact prettier

### ✔️ 선택사항 : Yarn run build 명령어 입력 이후 이슈가 발생할 때 아래 명령어를 입력해보세요 🙏🏻

    yarn add @babel/runtime --dev
    yarn cache clean
    yarn set version berry
    yarn install

---

## 디자인 시스템 (위젯)

### [🔎 위젯 미리보기 ☝🏻](https://github.com/deep-hwan/next.js-speed-template/tree/main/document/ko/ui/README.md)

🗂️ **경로 : src > \_ui**

완성된 디자인 시스템 위젯들을 확인하세요<br/>
당신의 UI 경험과 작업 능률을 책임질게요<br/>
`🔥 디자인 UI 위젯은 앞으로 꾸준히 업데이트 및 추가될 예정이에요`

---

## Themes (테마)

🗂️ **Root : src > lib > themes**

🔥 빠르게 ui를 완성하는 데에 도움을 제공하는 각 style 요소에요

- colors : 감각적인 디자인 컬러 모음
- fontSize : 각 폰트 사이즈를 rem 형태로로 제공
- media : 각 기기의 화면비를 CSS에서 즉시 사용할 수 있는 형태의 mediaQuery
- styleSheet : 빠른 class와 emotion css를 적용할 수 있는 styleSheet

---

## Utils (유틸 기능)

🗂️ **Root : src > lib > utils**

🔥 프론트 개발에 도움을 제공하는 다양한 유틸 기능이에요

- enum : 미리 셋팅 해둔 key, value를 enum 형태로 관리하기 위한 모음

- regEx : ex) regEx.email.test(email) << 자주 사용되는 정규식을 즉시 사용 가능한 형태의 모음

---

## Custom Hooks (커스텀 훅)

### [🔎 커스텀 훅 미리보기 ☝🏻](https://github.com/deep-hwan/next.js-speed-template/tree/main/document/ko/hooks/README.md)

🗂️ **경로 : src > lib > hooks**

🔥 개발에 도움을 제공하는 커스텀 훅 모음이에요<br/>
`커스텀 훅은 꾸준히 업데이트 될 예정이에요!`

---

## SEO 최적화 및 사이트맵 생성 방법

### [🔎 SEO 최적화 및 사이트맵 생성 보러가기☝🏻](https://github.com/deep-hwan/next.js-speed-template/tree/main/document/ko/sitemap/README.md)

SEO를 최적화 및 셋팅하는 방법과, 동적 및 정적 사이트맵을 생성하고 셋팅하는 방법을 알려줄게요<br/>
`🔥 웹사이트 개발에 매우 중요한 부분이니 반드시 처리할 것을 권장해요!`

---

## 🙏🏻 배포 전 주의사항

배포 전 반드시 아래에 내용을 확인 후, 빌드 하세요

1. 각 seo 및 sitemap 관련된 내용을 서비스에 맞게 수정하세요

2. **next-sitemap.config** 에서 서비스 내용에 맞게 수정 및 확인하세요

3. **public > manifest.json** 에서 PWA를 관련의 앱 내용을 수정하세요

4. **npx next-sitemap** 를 통해 사이트맵을 생성하세요 (: yarn berry pnp 로 개발 시)

5. **(선택) page > api > rss.ts** 에서 rss를 생성할 수 있어요 >> 내용을 수정하세요

6. npm run build
