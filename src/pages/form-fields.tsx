import { NextRouter, useRouter } from "next/router";

//libs
import { V, Spacing, Txt } from "@/_ui";
import { colors } from "@/libs/themes";

//components
import Fields from "@/app/form-fields/Fields";
import Result from "@/app/form-fields/Result";
import SEO from "@/head/seo";

//
export default function FormFields() {
    const router: NextRouter = useRouter();

    return (
        <>
            <SEO title="가입하기 템플릿" description="Form 개발할때 다양한 인풋들을 사용해보세요!" />

            <V.Section>
                <V.Column maxWidth={560} padding={{ top: 40, bottom: 60, horizontal: 20 }}>
                    <Txt as="h1" size={24}>
                        {router.query.results
                            ? `최적화된 이미지\n위젯을 경험해봐요`
                            : `다양한 기능들이 제공되는\n인풋 위젯을 경험해보세요!`}
                    </Txt>

                    <Spacing size={14} />

                    <Txt color={colors.grey[300]}>
                        {router.query.results
                            ? `빠르게 트랜디한 UI를 만들어보세요\n당신의 개발 효율이 압도적으로 오를 거에요`
                            : `다양한 페이지 및 상황에 필요한 인풋들을\n누구나 쉽게 사용할 수 있도록 만들어뒀어요!`}
                    </Txt>

                    <Spacing size={30} />

                    {router.query.results ? <Result /> : <Fields />}
                </V.Column>
            </V.Section>
        </>
    );
}
