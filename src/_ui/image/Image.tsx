/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import React, { ForwardedRef, forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react'
import { PopupImageWrapper } from './instances/PopupImageWrapper'

//
type SizeThemeType = {
    size?: {
        width?: 'auto' | '100%' | string | number
        minWidth?: number | string
        maxWidth?: number | string
        height?: 'auto' | '100%' | string | number
        minHeight?: number | string
        maxHeight?: number | string
    }

    ratio?: { x?: number; y?: number }
    shadow?: {
        x?: number
        y?: number
        blur?: number
        color?: string
    }
    borderRadius?: string | number
}

//
type Types = {
    source: string
    alt: string
    zoomUp?: boolean
    objectFit?: 'cover' | 'fill' | 'contain'
    priority?: boolean
    _mediaQuery?: {
        s1440?: SizeThemeType
        s1280?: SizeThemeType
        s1080?: SizeThemeType
        s768?: SizeThemeType
        s600?: SizeThemeType
        s428?: SizeThemeType
    }
} & SizeThemeType &
    HTMLAttributes<HTMLImageElement>

//
const ImageInstance = forwardRef(function ImageInstance(
    { source, alt, objectFit, zoomUp, onClick, ...props }: Types,
    ref?: ForwardedRef<HTMLImageElement>,
) {
    const imgRef = useRef<HTMLImageElement>(null)
    const [zoomImg, setZoomImg] = useState(false)

    useEffect(() => {
        const clickModalOutside = (event: MouseEvent) => {
            if (zoomImg && imgRef.current && !imgRef.current.contains(event.target as Node)) setZoomImg(false)
        }

        if (zoomImg) document.body.style.overflowY = 'hidden'
        else document.body.style.overflowY = 'auto'

        document.addEventListener('mousedown', clickModalOutside)
        return () => {
            document.removeEventListener('mousedown', clickModalOutside)
        }
    }, [zoomImg])

    useEffect(() => {
        if (zoomImg) {
            const scrollY = window.scrollY

            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.overflowY = 'hidden'
        } else {
            const scrollY = document.body.style.top
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.overflowY = 'auto'

            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [zoomImg])

    //
    // handleOnClick
    const handleOnClick = (event: React.MouseEvent<HTMLImageElement>) => {
        if (!!source && zoomUp) {
            setZoomImg(true)
            onClick && onClick(event)
        } else if (onClick) onClick(event)
    }

    const screenSize = [1440, 1280, 1080, 768, 600, 428]
    const MQ = screenSize.map((bp) => `@media (max-width: ${bp}px)`)

    const styleProps: Partial<SizeThemeType> = {}
    const elementProps: Partial<HTMLAttributes<HTMLImageElement>> = { ...props }

    const stylePropKeys = [
        'size',
        'objectFit',
        'ratio',
        'borderRadius',
        'shadow',
        '_mediaQuery',
        'qualitySize',
        'position',
    ] as const

    Object.keys(props).forEach((key) => {
        if (stylePropKeys.includes(key as keyof SizeThemeType)) {
            styleProps[key as keyof SizeThemeType] = props[key as keyof SizeThemeType] as any
            delete elementProps[key as keyof HTMLAttributes<HTMLImageElement>]
        }
    })

    const imageRasiedWrap = (props: SizeThemeType) => {
        return {
            position: 'relative',
            width: props?.size?.width,
            height: props?.size?.height,
            minWidth: props?.size?.minWidth,
            maxWidth: props?.size?.maxWidth,
            minHeight: props?.size?.minHeight,
            maxHeight: props?.size?.maxHeight,
            borderRadius: props?.borderRadius,
            aspectRatio: props?.ratio ? `${props?.ratio.x}/${props?.ratio.y}` : '',
            transition: '0.3s ease-in-out',
            userSelect: 'none',
            boxShadow: props?.shadow
                ? `${props?.shadow?.x}px ${props?.shadow?.y}px ${props?.shadow?.blur}px ${props?.shadow?.color}`
                : undefined,
        }
    }

    const imageRasied = (props: SizeThemeType) => {
        return {
            width: '100%',
            height: '100%',
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            borderRadius: props?.borderRadius,
            transition: '0.3s ease-in-out',
        }
    }

    const ImageInstance = () => (
        <div
            onClick={handleOnClick}
            css={{
                ...(imageRasiedWrap(props) as any),
                [MQ[0]]: { ...imageRasiedWrap(props?._mediaQuery?.s1440 ?? {}) },
                [MQ[1]]: { ...imageRasiedWrap(props?._mediaQuery?.s1280 ?? {}) },
                [MQ[2]]: { ...imageRasiedWrap(props?._mediaQuery?.s1080 ?? {}) },
                [MQ[3]]: { ...imageRasiedWrap(props?._mediaQuery?.s768 ?? {}) },
                [MQ[4]]: { ...imageRasiedWrap(props?._mediaQuery?.s600 ?? {}) },
                [MQ[5]]: { ...imageRasiedWrap(props?._mediaQuery?.s428 ?? {}) },
            }}
        >
            <Image
                ref={ref}
                src={source}
                alt={alt}
                priority={props.priority}
                layout="fill"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC"
                objectFit={objectFit ?? 'cover'}
                style={{objectFit:objectFit??'cover'}}
                {...elementProps}
                css={{
                    ...imageRasied({ ...props }),
                    [MQ[0]]: { ...imageRasied(props?._mediaQuery?.s1440 ?? {}) },
                    [MQ[1]]: { ...imageRasied(props?._mediaQuery?.s1280 ?? {}) },
                    [MQ[2]]: { ...imageRasied(props?._mediaQuery?.s1080 ?? {}) },
                    [MQ[3]]: { ...imageRasied(props?._mediaQuery?.s768 ?? {}) },
                    [MQ[4]]: { ...imageRasied(props?._mediaQuery?.s600 ?? {}) },
                    [MQ[5]]: { ...imageRasied(props?._mediaQuery?.s428 ?? {}) },
                }}
            />
        </div>
    )

    return (
        <>
            <ImageInstance />

            {zoomImg && (
                <PopupImageWrapper onCancel={() => setZoomImg(false)}>
                    <div
                        className="zoom-image"
                        ref={imgRef}
                        css={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            maxWidth: 1200,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            css={{
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <Image
                                ref={ref}
                                src={source}
                                alt={alt}
                                priority={props.priority}
                                layout="fill"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC"
                                objectFit="contain"
                                {...elementProps}
                                style={{objectFit:'contain'}}
                                css={{ ...imageRasied({ ...props }) }}
                            />
                        </div>
                    </div>
                </PopupImageWrapper>
            )}
        </>
    )
})

export default ImageInstance
