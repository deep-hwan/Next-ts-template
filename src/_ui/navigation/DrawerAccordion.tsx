/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ReactNode, forwardRef, useCallback, useEffect, useRef } from 'react'

interface Props {
    open: boolean
    onCancel: () => void
    theme?: 'light' | 'dark'
    cancelTabIconActive?: boolean
    children: ReactNode
}

export const DrawerAccordion = forwardRef((props: Props, ref?: ForwardedRef<HTMLDivElement>) => {
    const { theme = 'light', open, onCancel, cancelTabIconActive = true } = props
    const drawerRef = useRef<HTMLDivElement>(null)

    const clickModalOutside = useCallback(
        (event: MouseEvent) => {
            if (open && drawerRef.current && !drawerRef.current.contains(event.target as Node)) onCancel()
        },
        [open, onCancel, drawerRef],
    )

    useEffect(() => {
        drawerRef.current?.scrollTo(0, 0)

        document.addEventListener('mousedown', clickModalOutside)
        return () => document.removeEventListener('mousedown', clickModalOutside)
    })

    const TYPE_VARIANTS = {
        light: { backgroundColor: '#ffffff', iconFill: '#ccc' },
        dark: { backgroundColor: '#151515', iconFill: '#888' },
    }

    return (
        <>
            <div
                ref={drawerRef}
                css={{
                    zIndex: 2000,
                    width: '100%',
                    position: 'fixed',
                    top: open ? '60px' : '-100%',
                    left: 0,
                    right: 0,
                    background: TYPE_VARIANTS[theme].backgroundColor,
                    transition: '0.3s ease-in-out',
                    paddingTop: `max(0px, env(safe-area-inset-top))`,
                    paddingBottom: `max(0px, env(safe-area-inset-bottom))`,
                    boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
                }}
            >
                <div
                    ref={ref}
                    css={{
                        paddingTop: `max(0px, env(safe-area-inset-top))`,
                        paddingBottom: `max(0px, env(safe-area-inset-bottom))`,
                        paddingRight: `max(0px, env(safe-area-inset-right))`,
                        paddingLeft: `max(0px, env(safe-area-inset-left))`,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 10,
                        overflowY: 'auto',
                        '::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    {props.children}
                </div>
            </div>
        </>
    )
})
