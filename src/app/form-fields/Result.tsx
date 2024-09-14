import { NextRouter, useRouter } from 'next/router'

//assets
import { Button, Spacing, Image } from '@/_ui'

//libs

export default function Result() {
    const router: NextRouter = useRouter()

    return (
        <>
            <Image
                source="https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public"
                alt="위젯 이미지"
                size={{ width: '100%', height: '100%', minHeight: 300 }}
                borderRadius={10}
                zoomUp
            />

            <Spacing size={20} />

            <Button width="100%" onClick={() => router.push('/')}>
                확인하기
            </Button>
        </>
    )
}
