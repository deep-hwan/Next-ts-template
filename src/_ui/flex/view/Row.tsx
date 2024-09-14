/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { V, ViewType } from 'react-layout-flexbox'

type Types = { children?: ReactNode } & HTMLAttributes<HTMLDivElement> & Omit<ViewType, 'direction'>

const Row = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <V.Row ref={ref} {...props}>
            {props.children}
        </V.Row>
    )
})

export { Row }
