/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { P, ViewType } from 'react-layout-flexbox'

type Types = { children?: ReactNode } & HTMLAttributes<HTMLDivElement> & Omit<ViewType, 'positionType'>

const Sticky = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <P.Sticky ref={ref} {...props}>
            {props.children}
        </P.Sticky>
    )
})

export { Sticky }
