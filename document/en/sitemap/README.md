## Sitemap

✏️ Edit `NEXT_PUBLIC_SITE_URL` in the `.env` file

### Getting Started

    npx next-sitemap --config next-sitemap.config.js

---

### SEO creation and settings

🗂️ **Path: src > \_head > next-seo.ts**  
Fetch SEO components from each page and optimize the title, content, and images for each page. This can be processed for better SEO optimization.

---

### Sitemap settings

#### next-sitemap.config.js // next-seo.config.js

(🙏🏻 Mandatory Processing) You can set information and optimization about the SEO of the site to be deployed

#### src > pages > apis > sitemap.ts

Code for creating and deploying dynamic site maps (query:id).
If dynamic routing exists on the site you want to deploy, make sure to update the code appropriately.
Entering the yarn build command creates server-sitemap.xml

#### src > pages > server-sitemap.xml

This collects dynamic and static routes for your site and provides them to search engines.  
It generates the sitemap in real-time on the server side using `getServerSideProps` and saves it in the public folder.  
👉🏻 Modify the code to match the routing format of each page.

### scripts > generate-sitemap.js

This script collects all page paths from your website and generates a `sitemap.xml` file.  
This file helps search engines understand your site structure and better index your pages.  
👉🏻 Modify the code to match the routing format of each page.

---

### Sitemap creation

**✅ yarn run build** or **npm run build** >> sitemap이 public에 생생 및 배포됩니다
