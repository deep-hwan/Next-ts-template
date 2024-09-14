/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from 'react'
import { V, ViewType } from 'react-layout-flexbox'

type Types = {
    children: ReactNode
    maxWidth?: number | undefined
    gap?: number | undefined
    scrollBarActive?: boolean | undefined
    snap?: boolean | undefined
} & HTMLAttributes<HTMLDivElement>

export const ScrollDragHorizontal = ({ children, ...props }: Types) => {
    return <V.ScrollDragHorizontal {...props}>{children}</V.ScrollDragHorizontal>
}
