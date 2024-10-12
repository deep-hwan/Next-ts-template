/** @jsxImportSource @emotion/react */
import { useUid } from '@/libs/hooks';
import Image from 'next/image';
import { ForwardedRef, forwardRef, HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { PopupImageWrapper } from './instances/PopupImageWrapper';

type SizeThemeType = {
  size?: {
    width?: 'auto' | '100%' | string | number;
    minWidth?: number | string;
    maxWidth?: number | string;
    height?: 'auto' | '100%' | string | number;
    minHeight?: number | string;
    maxHeight?: number | string;
  };
  ratio?: { x?: number; y?: number };
  shadow?: { x?: number; y?: number; blur?: number; color?: string };
  scale?: number;
  borderRadius?: string | number;
};

type Types = {
  source: string;
  alt: string;
  zoomUp?: boolean;
  objectFit?: 'cover' | 'fill' | 'contain';
  priority?: boolean;
  _mediaQuery?: {
    s1440?: SizeThemeType;
    s1280?: SizeThemeType;
    s1080?: SizeThemeType;
    s768?: SizeThemeType;
    s600?: SizeThemeType;
    s428?: SizeThemeType;
  };
  isHover?: boolean;
} & SizeThemeType &
  Omit<HTMLAttributes<HTMLImageElement>, 'objectFit'>;

const ImageInstance = forwardRef(function ImageInstance(
  { source, alt, objectFit, zoomUp, ...props }: Types,
  ref?: ForwardedRef<HTMLImageElement>
) {
  const uid = useUid();

  const imgRef = useRef<HTMLImageElement>(null);
  const [isHover, setIsHover] = useState(props.isHover ?? false);
  const [zoomImg, setZoomImg] = useState(false);
  const [calculatedHeight, setCalculatedHeight] = useState<string | number>('200px');
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  // 이미지 로드 후 비율 계산하여 height 설정
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    const aspectRatio = naturalHeight / naturalWidth;

    const width = props.size?.width ?? '100%';
    if (typeof width === 'number') {
      setCalculatedHeight(width * aspectRatio);
    } else if (width === '100%') {
      setCalculatedHeight(`${aspectRatio * 100}vw`);
    }
  };

  const handleOnClick = (event: React.MouseEvent<HTMLImageElement>) => {
    if (source && zoomUp) {
      setZoomImg(true);
      props.onClick?.(event);
    } else {
      props.onClick?.(event);
    }
  };

  const imageWrapperStyle = (props: SizeThemeType) => ({
    position: 'relative',
    width: props.size?.width ?? '100%',
    height: props.size?.height || calculatedHeight,
    minWidth: props.size?.minWidth,
    maxWidth: props.size?.maxWidth,
    minHeight: props.size?.minHeight || calculatedHeight,
    maxHeight: props.size?.maxHeight,
    borderRadius: props.borderRadius,
    aspectRatio: props.ratio ? `${props.ratio.x}/${props.ratio.y}` : '',
    transition: '0.3s ease-in-out',
    boxShadow: props.shadow
      ? `${props.shadow.x}px ${props.shadow.y}px ${props.shadow.blur}px ${props.shadow.color}`
      : undefined,
    userSelect: 'none',
    overflow: 'hidden',
    scale: props.scale,
  });

  const imageRasied = (props: SizeThemeType) => {
    return {
      width: props?.size?.width,
      height: props?.size?.height,
      minWidth: props?.size?.minWidth,
      maxWidth: props?.size?.maxWidth,
      minHeight: props?.size?.minHeight,
      maxHeight: props?.size?.maxHeight,
      borderRadius: props?.borderRadius,
      aspectRatio: props?.ratio ? `${props?.ratio.x}/${props?.ratio.y}` : '',
      transition: '0.3s ease-in-out',
      boxShadow: props?.shadow
        ? `${props?.shadow?.x}px ${props?.shadow?.y}px ${props?.shadow?.blur}px ${props?.shadow?.color}`
        : undefined,
    };
  };

  //
  // 팝업 제거
  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (zoomImg && imgRef.current && !imgRef.current.contains(event.target as Node)) setZoomImg(false);
    },
    [zoomImg, setZoomImg]
  );

  useEffect(() => {
    if (zoomImg) {
      const scrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflowY = 'auto';

      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    document.addEventListener('mousedown', clickModalOutside);
    return () => document.removeEventListener('mousedown', clickModalOutside);
  }, [zoomImg]);

  return (
    <>
      <div
        id={`image-wrap-${uid}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        css={{
          ...(imageWrapperStyle(props) as any),
          cursor: props.onClick || zoomUp ? 'pointer' : 'default',
        }}
        {...props}
      >
        <Image
          id={`image-${uid}`}
          itemProp='image'
          ref={ref}
          src={source}
          alt={alt}
          priority={props.priority}
          fill
          loading='lazy'
          placeholder='blur'
          quality={90}
          onClick={handleOnClick}
          onLoad={event => {
            handleImageLoad(event);
            setIsLoading(false); // 이미지 로드 완료 시 로딩 상태 업데이트
          }}
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC'
          css={{
            overflow: 'hidden',
            objectFit: objectFit ?? 'cover',
            height: calculatedHeight,
            filter: isLoading ? 'blur(10px)' : 'none', // 로딩 중 blur 효과 적용
            transition: '0.3s ease-in-out',
            scale: isHover ? 1.05 : 1,
          }}
        />
      </div>

      {zoomImg && (
        <PopupImageWrapper onCancel={() => setZoomImg(false)}>
          <div
            className='zoom-image'
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
            <Image
              ref={ref}
              src={source}
              alt={alt}
              priority={props.priority}
              layout='fill'
              loading='lazy'
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC'
              objectFit='contain'
              style={{ objectFit: 'contain' }}
              css={{ ...imageRasied({ ...props }) }}
            />
          </div>
        </PopupImageWrapper>
      )}
    </>
  );
});

export default ImageInstance;
