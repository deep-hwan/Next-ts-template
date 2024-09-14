import fs from 'fs'
import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'



interface SitemapUrl {
    loc: string
    lastmod: string
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL!

    // Fetch dynamic routes from your CMS or API
    const dynamicRoutes = fs.readdirSync('./pages').filter((file) => file.includes('[id].tsx'))
    const dynamicUrls: SitemapUrl[] = dynamicRoutes.map((route) => {
        const id = route.replace('[id].tsx', '')
        return {
            loc: `${SITE_URL}/${id}`,
            lastmod: new Date().toISOString(),
        }
    })

    const staticUrls: string[] = [
        // Add your static URLs here
        SITE_URL,
        `${SITE_URL}/dynamic-path-2`,
    ]

    const allUrls: (SitemapUrl | string)[] = [...staticUrls, ...dynamicUrls]

    const fields: ISitemapField[] = allUrls.map((url) => ({
        loc: typeof url === 'string' ? url : url.loc, // Absolute URL
        lastmod: typeof url === 'string' ? '' : url.lastmod,
    }))

    // 타입 지정 및 변경
    const sitemap: any = await getServerSideSitemap(context, fields)

    // Save the sitemap to the public directory
    fs.writeFileSync('./public/server-sitemap.xml', sitemap)

    return {
        props: {},
    }
}

export default function Sitemap() {
    return null
}
