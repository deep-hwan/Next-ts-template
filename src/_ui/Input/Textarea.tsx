/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react'
import { TouchableOpacity, V, TxtSpan } from '@/_ui'
import { useUid } from '@/libs/hooks'
import { FieldContainer } from './container/FieldContainer'

const Textarea = forwardRef((props: EditorType, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const {
        tab,
        rows = 1,
        textCountActive,
        error,
        sizes,
        themes,
        value,
        disabled,
        autoRaise,
        editorScroll,
        ...rest
    } = props
    const id = props?.id ?? useUid()

    const [isFocused, setIsFocused] = useState(false)
    const handleFocus = useCallback(() => setIsFocused(true), [isFocused])
    const handleBlur = useCallback(() => setIsFocused(false), [isFocused])

    //
    // rasize
    useEffect(() => {
        const handleRasie = () => {
            if (value && value !== '' && ref && 'current' in ref && ref.current) {
                ref.current.style.height = 'auto'
                ref.current.style.height = ref.current.scrollHeight + 'px'
            } else if (ref && 'current' in ref && ref.current) {
                ref.current.style.height = 'auto'
            }
        }

        if (autoRaise) handleRasie()
    }, [value, ref, autoRaise])

    return (
        <V.Column gap={4} className="editor-ui">
            <FieldContainer
                sizes={{ ...sizes, maxHeight: autoRaise ? 100 : 'auto' }}
                themes={themes}
                events={{ error, disabled }}
            >
                <V.Row height="100%" align="end">
                    <textarea
                        ref={ref}
                        id={id}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={value}
                        rows={rows}
                        disabled={disabled}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                if (!value || (typeof value === 'string' && value.trim() === '')) e.preventDefault()
                            }
                        }}
                        css={{
                            minHeight: sizes?.minHeight ? sizes?.minHeight : '48px',
                            maxHeight: autoRaise ? 100 : 'auto',
                            fontSize: sizes?.inputSize ?? 15,
                            padding: sizes?.padding ?? 13,
                            lineHeight: 1.6,
                            overflow: rows >= 2 ? 'auto' : 'visible',
                            '::-webkit-scrollbar': {
                                display: editorScroll ? 'flex' : rows >= 2 ? 'flex' : 'none',
                                width: '4px',
                                height: '4px',
                            },
                            '::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
                            '::-webkit-scrollbar-thumb': {
                                backgroundColor: '#cccccc',
                                borderRadius: '100px',
                            },
                            '::-webkit-scrollbar-thumb:hover': { background: '#e2e2e2' },
                            '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
                                width: 0,
                                height: 0,
                                backgroundColor: 'transparent',
                            },
                        }}
                        {...rest}
                    />

                    {!!tab && (
                        <V.Column width="auto" minHeight={48} crossAlign="center">
                            <TouchableOpacity
                                onClick={() => tab.onClick && tab.onClick()}
                                css={{
                                    fontSize: tab.size ?? 14,
                                    color: tab.color ?? '#4788f4',
                                    whiteSpace: 'nowrap',
                                    padding: '5px 10px 8px 2px',
                                    position: 'sticky',
                                }}
                                disabled={tab.disabled}
                            >
                                {tab.name ?? '확인'}
                            </TouchableOpacity>
                        </V.Column>
                    )}
                </V.Row>
            </FieldContainer>

            {textCountActive && (
                <TxtSpan color="#aaa" size={(sizes?.edgeSize as any) ?? 12}>
                    {typeof props.value === 'string' ? props.value.length : 0}
                    {'/' + (props.maxLength ?? '전체 길이를 전달해주세요')}
                </TxtSpan>
            )}
        </V.Column>
    )
})

export { Textarea }
