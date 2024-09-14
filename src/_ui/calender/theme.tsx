/** @jsxImportSource @emotion/react */
import { colors } from '@/libs/themes'
import { Interpolation } from '@emotion/react'
import { Theme } from '@emotion/react'
import { ReactNode } from 'react'

//
//
export const CalenderGrid = ({ ea, children }: { ea: number; children: ReactNode }) => {
    return (
        <div css={{ width: '100%', gridTemplateColumns: `repeat(${ea}, 1fr)`, display: 'grid', gap: 10 }}>
            {children}
        </div>
    )
}

type Props = {
    isToday?: any
    isWeekend?: any
    selectable?: any
    selectWrap?: any
    size?: number
    isSelectedMonth?: any
}

//
//
export const dd_theme = ({ isToday, isWeekend, selectable, selectWrap, size = 32 }: Props): Interpolation<Theme> => {
    const colorTheme = () => {
        if (!!isToday && !!selectWrap) return '#fff'
        if (!!isWeekend && !!selectWrap) return '#fff'
        if (!!isWeekend && !selectable) return '#bbb'
        if (isToday) return colors.blue[600]
        if (isWeekend) return '#997F8F'
        if (!selectable) return '#bbb'
        if (selectWrap) return '#fff'

        return '#454545'
    }

    const bgTheme = () => {
        if (selectWrap) return colors.keyColor
        if (isToday) return colors.tel[500]

        return ''
    }

    return {
        fontSize: 15,
        minHeight: size,
        maxHeight: size,
        minWidth: size,
        maxWidth: size,
        borderRadius: 10,
        textAlign: 'center',
        padding: 5,
        color: colorTheme() as any,
        backgroundColor: bgTheme(),
        userSelect: 'none',
        cursor: selectable ? 'pointer' : 'default',
        transition: 'background-color 0.3s ease',

        '&:hover': { opacity: selectable && 0.85 },
    }
}

//
//
export const mm_theme = ({ isToday, selectable, isSelectedMonth }: Props): Interpolation<Theme> => {
    const colorTheme = () => {
        if (isSelectedMonth) return colors.white
        if (!selectable) return '#bbb'
        if (isToday) return colors.blue[500]

        return '#555'
    }

    const bgTheme = () => {
        if (isSelectedMonth) return colors.keyColor
        if (isToday && !selectable) return colors.tel[500]
        if (isToday) return colors.tel[500]

        return ''
    }

    return {
        fontSize: 15,
        minHeight: 50,
        maxHeight: 50,
        minWidth: 60,
        maxWidth: 60,
        borderRadius: 16,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: bgTheme(),
        color: colorTheme(),
        userSelect: 'none',
        cursor: selectable ? 'pointer' : 'default',
        transition: 'background-color 0.3s ease',

        '&:hover': { opacity: selectable && 0.85 },
    }
}

export const year_theme = ({
    isToday,
    selectable,
    isSelected,
}: {
    isToday: any
    selectable: any
    isSelected: any
}): Interpolation<Theme> => {
    const colorTheme = () => {
        if (isSelected) return colors.white
        if (!selectable) return '#bbb'
        if (isToday) return colors.blue[500]
        return '#555'
    }

    const bgTheme = () => {
        if (isSelected) return colors.keyColor
        if (isToday && !selectable) return colors.tel[500]
        if (isToday) return colors.tel[500]

        return ''
    }

    return {
        fontSize: 15,
        minHeight: 50,
        maxHeight: 50,
        minWidth: 70,
        maxWidth: 70,
        borderRadius: 16,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgTheme(),
        color: colorTheme(),
        userSelect: 'none',
        cursor: selectable ? 'pointer' : 'default',
        transition: 'background-color 0.3s ease',

        '&:hover': { opacity: selectable ? 0.85 : 1 },
    }
}
