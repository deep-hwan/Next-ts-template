import { useEffect } from 'react'

export default function useOpenWebBrowser() {
    useEffect(() => {
        const userAgent = navigator.userAgent || ''
        const isKakaoTalk = userAgent.includes('KAKAOTALK')
        const fullUrl = window.location.href

        if (isKakaoTalk) {
            window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(fullUrl)}`
        }
    }, [])
}
