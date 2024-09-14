/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef } from 'react'
import { MQ } from '@/libs/themes'
import { Calendar, BlurLayer, V, P } from '@/_ui'

interface Props {
    zIndex?: number
    format?: 'yyyy-mm-dd' | 'yyyy-mm' | 'yyyy'
    open: boolean
    onCancel: () => void
    date: Date
    minDate?: Date
    maxDate?: Date
    onClick: (date: Date | null | any) => void
    theme?: 'light' | 'dark'
}

export function CalenderModal({
    open,
    onCancel,
    format = 'yyyy-mm-dd',
    date,
    onClick,
    theme = 'light',
    zIndex,
    ...props
}: Props) {
    const ref = useRef<HTMLDivElement>(null)

    const THEME_VARIANT = {
        light: { bg: '#fff', bar: '#e0e0e0' },
        dark: { bg: '#222', bar: '#3f3f3f' },
    }

    const clickModalOutside = useCallback(
        (event: MouseEvent) => {
            if (open && ref.current && !ref.current.contains(event.target as Node)) onCancel()
        },
        [open, onCancel],
    )

    useEffect(() => {
        if (open) document.body.style.overflowY = 'hidden'
        else document.body.style.overflowY = 'auto'

        document.addEventListener('mousedown', clickModalOutside)
        return () => document.removeEventListener('mousedown', clickModalOutside)
    }, [open, clickModalOutside])

    return (
        <>
            {open && <BlurLayer zIndex={zIndex ? zIndex - 1 : 9999} />}
            <P.Fixed
                height="100%"
                align="center"
                crossAlign="center"
                zIndex={zIndex ?? 9999}
                position={{
                    top: open ? 0 : ('120%' as any),
                    bottom: 0,
                    right: 0,
                    left: 0,
                }}
                transitionTime={0.3}
                css={{ overscrollBehavior: 'contain' }}
            >
                <V.Column
                    align="center"
                    crossAlign="center"
                    gap={12}
                    _mediaQuery={{
                        s600: {
                            height: '100%',
                            direction: 'column',
                            reverse: true,
                            align: 'center',
                            crossAlign: 'end',
                            padding: { top: 50 },
                        },
                    }}
                    css={{ overscrollBehavior: 'contain' }}
                >
                    <V.Column
                        minWidth={300}
                        maxWidth={400}
                        borderRadius={24}
                        backgroundColor={THEME_VARIANT[theme].bg}
                        padding={{ horizontal: 15, vertical: 20 }}
                        shadow={{ x: 0, y: 0, blur: 20, color: 'rgba(0,0,0,0.1)' }}
                        scroll={{ type: 'auto', y: 'auto', bar: true }}
                        _mediaQuery={{
                            s600: { height: '100%', maxHeight: 500, maxWidth: '100%', borderRadius: '24px 24px 0 0' },
                        }}
                        ref={ref}
                    >
                        <Calendar
                            format={format ?? 'yyyy-mm-dd'}
                            date={date}
                            onClick={(date) => onClick(date)}
                            maxDate={props.maxDate}
                            minDate={props.minDate}
                            {...props}
                        />
                    </V.Column>

                    <IconTheme onClick={onCancel} />
                </V.Column>
            </P.Fixed>
        </>
    )
}
//

function IconTheme({ onClick }: { onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            css={{
                minWidth: '44px',
                minHeight: '44px',
                maxWidth: '44px',
                maxHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                padding: '6px',
                borderRadius: '1000px',
                transition: '0.3s ease-in-out',

                '&:hover': {
                    backgroundColor: '#f5f5f5',
                },

                '&:active': { scale: 0.8 },

                [MQ[3]]: {
                    order: '2',
                },
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16.333" height="16.293" viewBox="0 0 16.333 16.293">
                <path
                    id="cancel-icon"
                    d="M15.711,14.2h0L9.482,7.984l.078-.078,6.1-6.1a1.085,1.085,0,0,0,0-1.51,1.094,1.094,0,0,0-1.513.007L7.979,6.483,1.814.305A1.091,1.091,0,0,0,.3.316a1.073,1.073,0,0,0,.017,1.5L6.486,7.982.309,14.166a1.072,1.072,0,0,0,0,1.505,1.1,1.1,0,0,0,1.511-.013L7.988,9.5l6.173,6.163a1.065,1.065,0,0,0,.753.336.91.91,0,0,0,.756-.29,1.072,1.072,0,0,0,.042-1.507"
                    transform="translate(0.164 0.164)"
                    fill="#c2c2c2"
                    stroke="#c2c2c2"
                    stroke-width="0.2"
                />
            </svg>
        </button>
    )
}
