import React, { Children, ReactElement, cloneElement } from 'react'
import { Sticky } from './position/Sticky'
import { Fixed } from './position/Fixed'
import { Absolute } from './position/Absolute'
import { BottomFixed } from './position/BottomFixed'
import { BottomFixedAnimate } from './position/BottomFixedAnimate'

export function P({ children }: { children: ReactElement }) {
    const child = Children.only(children)

    return cloneElement(child, { ...child.props })
}

P.Sticky = Sticky
P.Fixed = Fixed
P.Absolute = Absolute
P.BottomFixed = BottomFixed
P.BottomFixedAnimate = BottomFixedAnimate
