import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button, TabType } from 'react-touchableopacity'
import { colors } from '@/libs/themes'

//
type Types = {
    children?: ReactNode
    as?: 's' | 'm' | 'l'
} & TabType &
    ButtonHTMLAttributes<HTMLButtonElement>

//
export default function ButtonTab(props: Types) {
    return (
        <Button {...props} backgroundColor={props.backgroundColor ?? colors.keyColor}>
            {props.children}
        </Button>
    )
}
