/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { P, ViewType } from 'react-layout-flexbox'

type Types = { children?: ReactNode } & HTMLAttributes<HTMLDivElement> & Omit<ViewType, 'positionType'>

const Fixed = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <P.Fixed ref={ref} {...props}>
            {props.children}
        </P.Fixed>
    )
})

export { Fixed }
