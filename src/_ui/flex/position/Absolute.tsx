/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { P, ViewType } from 'react-layout-flexbox'

type Types = { children?: ReactNode } & HTMLAttributes<HTMLDivElement> & Omit<ViewType, 'positionType'>

const Absolute = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <P.Absolute ref={ref} {...props}>
            {props.children}
        </P.Absolute>
    )
})

export { Absolute }
