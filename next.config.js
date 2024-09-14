/** @type {import('next').NextConfig} */

// PWA
const prod = process.env.NODE_ENV === 'production'
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: prod ? false : true,
    buildExcludes: [/middleware-manifest\.json$/],
})
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

// Bundle Analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: false,
})

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    minimumCacheTTL: 60,
    // output: 'export',
    // images: { unoptimized: true },

    siteUrl: siteUrl,
    additionalSitemaps: [`/server-sitemap.xml`],
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.5,
    robotsTxtOptions: {
        additionalSitemaps: [`/server-sitemap.xml`],
        policies: [
            { userAgent: '*', allow: '/' },
            {
                userAgent: '*',
                disallow: ['/404'],
            },
        ],
    },

    images: {
        // unoptimized: false,
        domains: ['imagedelivery.net', 'res.cloudinary.com'],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [428, 600, 768, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },

    async headers() {
        return [
            {
                // Matching all API routes
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ]
    },

    experimental: {
        scrollRestoration: false,
    },
}

// Combine withBundleAnalyzer and withPWA
module.exports = withBundleAnalyzer(withPWA(nextConfig))
