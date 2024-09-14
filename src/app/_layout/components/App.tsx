import React, { ReactNode } from 'react'
import { NextRouter, useRouter } from 'next/router'

// Components
import Header from './Header'
import BottomNaviTabBar from './BottomNaviTabBar'
import Drawer from './Drawer'
import Footer from './Footer'

//
export default function App({ children }: { children: ReactNode }): JSX.Element {
    const router: NextRouter = useRouter()

    const errPath = router.pathname === '/404'
    const noneView = router.pathname === '/form-fields'

    return (
        <Layout>
            {!errPath && <Header />}

            <Main>{children}</Main>

            {!errPath && <Footer />}

            {!(errPath || noneView) && <BottomNaviTabBar />}

            <Drawer />
        </Layout>
    )
}

const Layout = ({ children }: { children: ReactNode }) => (
    <div id="layout" css={{ ...styleSheet, minHeight: '100vh' }}>
        {children}
    </div>
)

const Main = ({ children }: { children: ReactNode }) => (
    <main id="main_layer" css={styleSheet}>
        {children}
    </main>
)

const styleSheet = {
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
} as any
