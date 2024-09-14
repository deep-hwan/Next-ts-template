import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import { TouchableOpacity, TabType } from 'react-touchableopacity'
import { colors } from '@/libs/themes'

//
type Types = {
    children?: ReactNode
    as?: 'button' | 'div' | 'span' | 'li'
} & TabType &
    HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement> &
    ButtonHTMLAttributes<HTMLButtonElement>

//
export default function TouchableOpacityTab(props: Types) {
    return (
        <TouchableOpacity
            {...props}
            width={props?.width ?? 'auto'}
            txtColor={props.txtColor ?? colors.keyColor}
            whiteSpace={props.whiteSpace ?? 'nowrap'}
            positionType={props.positionType ?? 'relative'}
        >
            {props.children}
        </TouchableOpacity>
    )
}
