/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react'
import { V, P, Avatar } from '@/_ui'
import { LoadingSpinner } from '../loading/LoadingSpinner'

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props {
    onUpload: (e: any) => void
    onCancel: () => void
    loading?: boolean
    source: string
    alt?: string
    size?: number
}

//
export function AvatarUploader({ size = 100, source, alt = '업로드 이미지', onUpload, onCancel, loading }: Props) {
    const uploadRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if (!loading) uploadRef.current?.click()
    }

    return (
        <V.Column maxWidth={size} minWidth={size} maxHeight={size} minHeight={size}>
            {source ? (
                <>
                    <Avatar source={source} alt={alt} size={size} onClick={handleClick} />
                    <P.Absolute
                        position={{ bottom: 0, right: 0 }}
                        backgroundColor="#fff"
                        borderRadius={10}
                        crossAlign="center"
                        align="center"
                        zIndex={10}
                        minWidth={28}
                        maxWidth={28}
                        minHeight={28}
                        maxHeight={28}
                        onClick={onCancel}
                    >
                        <CancelIcon />
                    </P.Absolute>
                </>
            ) : (
                <V.Column
                    maxWidth={size}
                    minWidth={size}
                    maxHeight={size}
                    minHeight={size}
                    backgroundColor="#f8f8f8"
                    borderRadius={100000}
                    crossAlign="center"
                    align="center"
                >
                    {loading ? <LoadingSpinner /> : <CameraIcon size={size} />}
                </V.Column>
            )}

            <input
                ref={uploadRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onUpload}
                aria-hidden={!loading}
                css={[
                    {
                        opacity: '0',
                        cursor: 'pointer',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    },
                ]}
            />
        </V.Column>
    )
}

// -----------------------------------
// -------------- Icons --------------
// -----------------------------------
const CameraIcon = ({ size }: { size: number }) => {
    return (
        <svg width={`${size / 3}px`} id="carmera-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 36.8">
            <path
                id="패스_16850"
                data-name="패스 16850"
                d="M30.419,24.81A7.419,7.419,0,1,1,23,17.521,7.363,7.363,0,0,1,30.419,24.81ZM46,14.46v20.7a5.043,5.043,0,0,1-5.087,5H5.087a5.043,5.043,0,0,1-5.087-5V14.46a5.043,5.043,0,0,1,5.087-5h6.256V7.733A4.412,4.412,0,0,1,15.794,3.36H30.206a4.412,4.412,0,0,1,4.451,4.373V9.461h6.256A5.045,5.045,0,0,1,46,14.46ZM34.234,24.81A11.235,11.235,0,1,0,23,35.847,11.149,11.149,0,0,0,34.234,24.81Z"
                transform="translate(0 -3.36)"
                fill="#cccccc"
            />
        </svg>
    )
}

const CancelIcon = () => {
    return (
        <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <path
                id="xIcon"
                d="M26.334,7.95a13,13,0,1,0,0,18.384,13,13,0,0,0,0-18.384M19.761,21.286l-2.619-2.619-2.621,2.621A1.079,1.079,0,0,1,13,19.761l2.621-2.621L13,14.525A1.079,1.079,0,0,1,14.526,13l2.616,2.617L19.758,13a1.076,1.076,0,0,1,1.522,1.522l-2.616,2.616,2.621,2.619-.23.23.23-.23a1.079,1.079,0,0,1-1.526,1.526"
                transform="translate(-4.141 -4.142)"
                fill="#cccccc"
            />
        </svg>
    )
}
