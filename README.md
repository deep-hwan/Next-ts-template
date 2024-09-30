# Create Next Speed Template

This is a template set up to create Next.js App with fast speed and high performance<br/>
The current template is provided in a **page routing** structure.<br/>

**🇰🇷 :**[ 한국어 문서로 내용보기](https://github.com/deep-hwan/next.js-speed-template/blob/main/document/ko/README.md)<br/>

**Demo URL:**
[This Click☝🏻 Please](https://next-typescript-tamplate.vercel.app)

## Getting Started

    npx create-next-speed-template my-app
    cd my-app
    yarn run dev

---

## Use Important Library

- langauage : **Typescript**
- State : **Recoil**
- Asynchronous State : **TanStack Query v5**
- Api : **Axios**
- Style(Css) : **Emotion/react**
- Authentication : **NextAuth**
- Bundler Doctor : **bundle-analyzer**
- SVG : **@svgr/webpack**

---

## Info

This template is set to Yarn Berry - Plug'n Play.<br/> We recommend that you use the template through the Yarn command 🙏🏻

### ⚙️ Yarn Berry Plug'n Play (PnP) enabled or disabled

yarn npm : .yarnrc.yml => nodeLinker: node-modules<br/>
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

### [🔎 Look Design Systems ☝🏻](https://github.com/deep-hwan/next.js-speed-template/tree/main/document/en/ui/README.md)

🗂️ **Root : src > \_ui**

Check out the finished design system widgets<br/>
I'll be responsible for your UI experience and work efficiency<br/>
`🔥 Design UI widgets will be updated and added continuously in the future`

---

## Themes

🗂️ **Root : src > lib > themes**

🔥 Each style element that helps you complete the ui quickly

- colors : collection of sensuous design colors
- fontSize: Each font size is provided in rem form
- media : mediaQuery in which the screen ratio of each device can be used immediately in CSS
- styleSheet: StyleSheet that can apply fast class and motion css

---

## Utils

🗂️ **Root : src > lib > utils**

🔥 Various Util functions to help develop the front

- enum : a collection for managing pre-set keys and values in enum form

- regEx : ex) regEx.email.test(email) <<Collection of frequently used regular expressions available immediately

---

## Custom Hooks

### [🔎 Look Custom Hooks ☝🏻](https://github.com/deep-hwan/next.js-speed-template/tree/main/document/en/hooks/README.md)

🗂️ **Root : src > lib > hooks**

🔥 It's a collection of custom hooks that help you develop<br/>
`Custom hooks will be constantly updated!`

---

## How to optimize SEO and Generate Sitemap

### [🔎 Look Create a Sitemap Method ☝🏻](https://github.com/deep-hwan/next.js-speed-template/tree/main/document/en/sitemap/README.md)

I'll tell you how to optimize and set up SEO, and how to generate and set dynamic and static site maps<br/>
`🔥 It's a very important part of website development, so I recommend you take care of it!`

---

## 🙏🏻 Pre-Deployment Precautions

Make sure to check the contents below before deployment before building

1. Modify the contents related to each seo and sitemap to suit the service

2. Modify and check the **next-sitemap.config** to suit the service

3. Modify the app content related to PWA in **public > manifest.json**

4. Create a site map with **npx next-sitemap** (e.g. when developed with yarnberry pnp)

5. (Optional) You can create rss in **page > api > rss.ts** > modify the content

6. npm run build
