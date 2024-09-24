# <div align="center">

<h1 align="center">Next.js + Typescript Template</h1>

<p align="center">
개발하기 편하도록 미리 셋팅된 Next.js + Typescript 템플릿입니다

V3 버전 업데이트는 yarn berry 의 Plug'n Play(PnP) 적용 가능한 버전 업데이트 되었습니다.

.yarnrc.yml << 참조

: yarn 명령어를 통해 사용하세요

</p>
</div>

## Install

(필수) yarn berry를 셋팅하세요

    npm install -g yarn
    yarn set version berry
    yarn install

(선택) vscode에서 yarn PnP : type or prettier 이슈 발생 시 아래를 설치하세요

    ZipFS - a zip file system << 플러그인 설치
    yarn dlx @yarnpkg/sdks vscode
    yarn add --dev --exact prettier

(선택) yarn run build 문제 시 아래 명령어를 입력하세요

    yarn add @babel/runtime --dev
    yarn cache clean
    yarn install

(선택) typescript 및 emotion 적용 문제 시 아래를 설치하세요

    yarn add @emotion/babel-plugin --dev

---

## Yarn Plug'n Play (PnP) 활성화 유무 (선택)

    yarn set version berry

명령어를 통해 yarn berry를 설치 후

.yarnrc.yml 에서 PnP 환경을 설정합니다

nodeLinker: pnp << 추가 시 yarn Plug'n Play 사용 가능

---

## SITE URL (사이트 데모)

해당 링크에 접속하여 오직 **Next-Ts-Template**에서만 제공하는 다양한 위젯들을 경험할 수 있습니다.

    https://next-typescript-tamplate.vercel.app/

---

## Setting Library

현재 패키지에 설치 및 적용된 **NPM 패키지 라이브러리 / 버전 정보** 입니다.

-   next : 14.2.13
-   typeScript : 5.5.4
-   next-pwa : 5.6.0
-   next-sitemap: 4.2.3
-   date-fns : 4.1.0
-   next-auth : 4.24.7
-   axios : 1.7.7
-   tanstack/react-query : 4.5
-   recoil: 0.7.7
-   emotion : 11.13.3
-   react-cookie : 7.2.0
-   react-flatlist-ui : 1.4.2 (자체 배포/개발 패키지)
-   react-layout-flexbox : 0.1.9 (자체 배포/개발 UI 패키지)
-   react-typogrphy-txt : 0.0.6 (자체 배포/개발 UI 패키지)
-   react-touchableopacity : 0.0.8 (자체 배포/개발 UI 패키지)
-   webpack-bundle-analyzer : 4.10.2 >> build : yarn analyze

---

## Design Systems

### UI_Weidgets (위젯)

##### 파일경로 : src > \_ui

즉시 사용할 수 있는 디자인 UI 위젯입니다.
디자인 위젯은 앞으로 계속해서 추가 및 업데이트 될 예정입니다.

**모든 위젯의 스타일은 src > \_ui > \_themes**경로를 통해 관리하고 있습니다.

**navigation**

-   Appbar : 헤더의 앱바
-   Drawer : 메뉴 드로어
-   DrawerAccordion : 아코디언 메뉴 드로어
-   BottomNavigator : 바텀네비게이션 바/버튼 기능

**display**

-   BlurLayer : 배경 블러 레이어 (팝업 시 사용)
-   Divider : 경계 선을 처리해야할 때 사용합니다
-   Spacing : 여백을 설정할 수 있습니다

**feedback**

-   ToastSnackBar : JengaProvider를 통해 addToast를 사용할 수 있습니다

**flex > view**

-   V : flex 기반의 view 위젯 컴포넌트

    자체 패키지 UI :
    https://github.com/deep-hwan/react-layout-flexbox

    -   Section : 섹션 레이아웃
    -   Row : 가로 정렬 레이아웃 위젯
    -   Column : 세로 정렬 레이아웃 위젯
    -   Form : form 위젯
    -   ScrollDragHorizontal : 가로 터치 스크롤을 통해 영역 외의 레이아웃을 처리할 수 있습니다
    -   Itmes : ul/ol 레이아웃
    -   Item : li 레이아웃

**flex > position**

-   P : flex 기반의 position 위젯 컴포넌트

    -   Absolute
    -   Fixed
    -   Sticky
    -   BottomFixed : 바텀 아래 고정 영역의 Fixed 레이아웃
    -   BottomFixedAnimate : 바텀 애니메이션 Fixed 레이아웃

**image**

-   Image : NEXT.JS 이미지 최적화 간편 셋팅 위젯
-   Avatar : 사용자 아바타 이미지

**input**

-   Input : input(label) + input(field) 각 기능

    -   TextField(텍스트 필드)
    -   PhoneNumberField(연락처 필드 ex_010-1234-5678)
    -   NumbericField(통화화폐 단위 필드 ex_10,000)
    -   TextArea(에디터 필드)
    -   SearchField(검색 필드)
    -   Select : select(label) 기능
    -   Option : 옵션 기능

**switch**

-   Checkbox : 체크박스
-   Switch : 스위치

**reader**

-   AvatarUploader : 아바타 이미지 업로더 기능
-   ImageUploader : 이미지 업로더 기능

**loading**

-   LoaddingSpinner : 로딩스피너
-   LoadingLayer : 로딩 레이어
-   Skeleton : 스켈레톤 로딩

**tab**

자체 패키지 UI :
https://github.com/deep-hwan/react-touchableopacity

-   Button : 타이틀 버튼 위젯
-   TouchableOpacity : react-native 에서 제공되는 prassable 기능의 탭

**typography**

자체 패키지 UI :
https://github.com/deep-hwan/react-typogrphy-txt

-   Txt : h1/h2/h3/h4/h5/h6/b/strong/p 텍스트
-   TxtTab : span 텍스트

**Modal**

-   Modal : 기본 모달 팝업
-   Dialog : Dialog 타입의 모달 팝업
-   BottomSheet : BottomSheet 타입의 IOS 모달
-   CalenderModal : 달력 사용 가능 형태의 모달 위젯

**Calender**

-   Calender : yyyy / yyyy-mm / yyyy-mm-dd 포맷을 제공하는 달력 UI 위젯

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
