## Sitemap

✏️ Edit `NEXT_PUBLIC_SITE_URL` in the `.env` file

### SEO creation and settings

🗂️ **Path: src > \_head > seo.ts**  
Fetch SEO components from each page and optimize the title, content, and images for each page. This can be processed for better SEO optimization.

---

### Sitemap settings

#### next-sitemap.config.js

You can set the deployed site here (currently set to default).

#### src > pages > apis > sitemap.ts

Next.js uses API routes to generate XML sitemaps in real time, including both dynamic and static routes, which are then served to search engines.  
When an API request is made, dynamic route data is fetched from the server, added to the sitemap, and returned in XML format to improve SEO.  
👉🏻 Modify the code to match the routing format of each page.

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

- When using Yarn PnP: Run the command **npx next-sitemap**
- For build processes: Use **yarn run build** or **npm run build**
