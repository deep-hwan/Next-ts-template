import SEO from "@/head/seo";
import { NextRouter, useRouter } from "next/router";

import { Button, Spacing, Txt, V } from "@/_ui";
import { MQ, colors, fontSize } from "@/libs/themes";

//
export default function Error() {
    const router: NextRouter = useRouter();

    return (
        <>
            <SEO title="페이지를 찾을 수 없습니다" />
            <V.Section>
                <V.Column
                    padding={{ horizontal: 26, bottom: 50 }}
                    crossAlign="center"
                    align="center"
                    flex={1}
                    height="100%"
                    minHeight="100vh"
                >
                    <Txt as="h4" css={{ [MQ[3]]: { fontSize: fontSize.s26 } }}>
                        페이지를 찾을 수 없습니다
                    </Txt>
                    <Spacing size={14} />
                    <Txt as="p" size={16} css={{ color: colors.grey[400] }}>
                        아래 버튼을 통해 이전페이지로 이동하세요
                    </Txt>

                    <Spacing size={34} />
                    <Button
                        maxWidth={200}
                        backgroundColor={colors.keyColor}
                        txtColor={colors.white}
                        borderRadius={100}
                        onClick={() => router.back()}
                    >
                        뒤로가기
                    </Button>
                </V.Column>
            </V.Section>
        </>
    );
}
