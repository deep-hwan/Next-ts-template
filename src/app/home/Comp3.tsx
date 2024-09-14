//libs
import { Spacing, Txt, V } from '@/_ui'
import { colors } from '@/libs/themes'

//
export default function Comp3() {
    return (
        <V.Column>
            <Txt as="h2" size={18}>
                오직 개발에만 집중하세요
            </Txt>

            <Spacing size={6} />

            <Txt color={colors.grey[300]}>당신의 생산성을 위해 모든 것을 준비해뒀어요 🧑‍💻</Txt>

            <Spacing size={16} />

            <V.ScrollDragHorizontal>
                <V.Items direction="row" gap={8}>
                    {[
                        {
                            txt: 'SEO 제공',
                            subTxt: 'SEO 최적화 및 사이트맵에 필요한 모든 셋팅을 해뒀어요 오직 개발에만 집중하세요!',
                        },
                        {
                            txt: 'PWA 제공',
                            subTxt: '유연한 UI로 네이티브 앱을 느낌을 경험할 수 있어요 그리고 WebView에도 이질함이 없어요',
                        },
                        {
                            txt: '컴포넌트 최적화',
                            subTxt: '컴포넌트의 재사용성을 고려하여 위젯 과 스타일을 최적화 및 구현해뒀어요',
                        },
                        {
                            txt: '다양한 위젯',
                            subTxt: '오직 개발에만 집중할 수 있도록 누구나 쉽게 사용할 수 있는 위젯들을 만들었어요',
                        },
                        {
                            txt: '작업 셋팅',
                            subTxt: '개발에 필요한 패키지들을 미리 셋팅하고 최신 버전들로 제공하고 있어요',
                        },
                    ].map((item, i) => (
                        <V.Item
                            key={i}
                            minWidth={190}
                            padding={{ all: 16 }}
                            border={{ solid: 1, color: colors.chiffon[500] }}
                            borderRadius={16}
                            gap={8}
                            height="100%"
                        >
                            <Txt size={16} as="strong">
                                {item.txt}
                            </Txt>
                            <Txt size={13} color={colors.grey[200]} whiteSpace="pre-line">
                                {item.subTxt}
                            </Txt>
                        </V.Item>
                    ))}
                </V.Items>
            </V.ScrollDragHorizontal>
        </V.Column>
    )
}
