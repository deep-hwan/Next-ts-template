import { useState, useEffect } from 'react'

export function usePlatformOs() {
    const [platform, setPlatform] = useState('Unknown')

    useEffect(() => {
        if (typeof navigator !== 'undefined' && 'userAgent' in navigator) {
            const UA = navigator.userAgent.toLowerCase()

            if (UA.includes('android')) {
                setPlatform('android')
            } else if (UA.includes('iphone') || UA.includes('ipad') || UA.includes('ipod')) {
                setPlatform('ios')
            } else {
                setPlatform('PC')
            }
        }
    }, [])

    return platform
}
