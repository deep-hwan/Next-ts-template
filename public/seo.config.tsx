import { NextSeo, NextSeoProps } from 'next-seo'

interface SEOProps extends NextSeoProps {
    title?: string
    description?: string
    image?: string | any
}

function SEO({ title, description, image }: SEOProps) {
    const site_url = process.env.NEXT_PUBLIC_BASE_URL
    const site_name = '템플릿'
    const seo_title = title
        ? `${title} | Next.js 템플릿에 오신 것을 환영합니다`
        : 'Next.js 템플릿에 오신 것을 환영합니다'
    const seo_description = description ?? 'Next.js 템플릿에 오신 것을 환영합니다'
    const seo_images =
        image ?? 'https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public'

    return (
        <NextSeo
            title={seo_title} // 영문 65자 / 한글 32자
            description={seo_description} // 영문 160 / 한글 77자
            canonical={site_url}
            openGraph={{
                type: 'website',
                locale: 'ko_KR',
                url: site_url,
                title: seo_title,
                description: seo_description,
                site_name: site_name,
                images: [
                    {
                        url: seo_images,
                        alt: site_name,
                    },
                ], // 16:9 , 1200px 이하
            }}
            twitter={{
                cardType: 'summary_large_image', //4096x4096 이하 2:1
                handle: `@${site_name}`,
                site: site_url,
            }}
        />
    )
}

export default SEO
