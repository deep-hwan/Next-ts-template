/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { V, ViewType } from 'react-layout-flexbox'

type Types = { children?: ReactNode } & HTMLAttributes<HTMLDivElement> & Omit<ViewType, 'direction'>

const Section = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <V.Column as="section" flex={1} align="center" ref={ref} {...props}>
            {props.children}
        </V.Column>
    )
})

export { Section }
