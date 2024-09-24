//libs
import { Spacing, V } from "@/_ui/index";
import { screenSize } from "@/libs/themes";

//components
import Comp1 from "@/app/home/Comp1";
import Comp2 from "@/app/home/Comp2";
import Comp3 from "@/app/home/Comp3";
import Comp4 from "@/app/home/Comp4";
import Comp5 from "@/app/home/Comp5";
import SEO from "@/head/seo";

//
export default function Index() {
    return (
        <>
            <SEO />

            <V.Section>
                <V.Column flex={1} maxWidth={screenSize[3]} padding={{ top: 20, bottom: 100, horizontal: 20 }}>
                    <Comp1 />
                    <Spacing size={12} />
                    <Comp2 />
                    <Spacing size={54} />
                    <Comp3 />
                    <Spacing size={44} />
                    <Comp4 />
                    <Spacing size={44} />
                    <Comp5 />
                </V.Column>
            </V.Section>
        </>
    );
}
