/** @jsxImportSource @emotion/react */
import { usePlatformOs, useUid } from '@/libs/hooks';
import Image from 'next/image';
import { ForwardedRef, forwardRef, HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { PopupImageWrapper } from './instances/PopupImageWrapper';

//
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
  shadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  scale?: number;
  borderRadius?: string | number;
};

//
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

//
const ImageInstance = forwardRef(function ImageInstance(
  { source, alt, objectFit, zoomUp, ...props }: Types,
  ref?: ForwardedRef<HTMLImageElement>
) {
  const uid = useUid();
  const os = usePlatformOs();

  const imgRef = useRef<HTMLImageElement>(null);
  const [isHover, setIsHover] = useState(props.isHover ?? false);
  const [zoomImg, setZoomImg] = useState(false);

  const screenSize = [1440, 1280, 1080, 768, 600, 428];
  const MQ = screenSize.map(bp => `@media (max-width: ${bp}px)`);

  const styleProps: Partial<SizeThemeType> = {};
  const elementProps: Partial<HTMLAttributes<HTMLImageElement>> = { ...props };

  //
  // ZoomUp
  useEffect(() => {
    const clickModalOutside = (event: MouseEvent) => {
      if (zoomImg && imgRef.current && !imgRef.current.contains(event.target as Node)) setZoomImg(false);
    };

    if (zoomImg) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';

    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [zoomImg]);

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
  }, [zoomImg]);

  //
  // handleOnClick
  const handleOnClick = (event: React.MouseEvent<HTMLImageElement>) => {
    if (!!source && zoomUp) {
      setZoomImg(true);
      props.onClick && props.onClick(event);
    } else if (props.onClick) props.onClick(event);
  };

  //
  // hover
  const onHover = useCallback(() => {
    if (props.isHover) setIsHover(!isHover);
  }, [isHover]);

  const stylePropKeys = [
    'size',
    'objectFit',
    'ratio',
    'borderRadius',
    'shadow',
    '_mediaQuery',
    'qualitySize',
    'position',
    'scale',
  ] as const;

  Object.keys(props).forEach(key => {
    if (stylePropKeys.includes(key as keyof SizeThemeType)) {
      styleProps[key as keyof SizeThemeType] = props[key as keyof SizeThemeType] as any;
      delete elementProps[key as keyof HTMLAttributes<HTMLImageElement>];
    }
  });

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
      boxShadow: props?.shadow
        ? `${props?.shadow?.x}px ${props?.shadow?.y}px ${props?.shadow?.blur}px ${props?.shadow?.color}`
        : undefined,
      userSelect: 'none',
      overflow: 'hidden',
      scale: props.scale,
    };
  };

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

  const ImageInstance = () => (
    <div
      id={'image-wrap-' + uid}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      css={{
        ...(imageRasiedWrap(props) as any),
        [MQ[0]]: { ...imageRasiedWrap(props?._mediaQuery?.s1440 ?? {}) },
        [MQ[1]]: { ...imageRasiedWrap(props?._mediaQuery?.s1280 ?? {}) },
        [MQ[2]]: { ...imageRasiedWrap(props?._mediaQuery?.s1080 ?? {}) },
        [MQ[3]]: { ...imageRasiedWrap(props?._mediaQuery?.s768 ?? {}) },
        [MQ[4]]: { ...imageRasiedWrap(props?._mediaQuery?.s600 ?? {}) },
        [MQ[5]]: { ...imageRasiedWrap(props?._mediaQuery?.s428 ?? {}) },
        cursor: props.onClick && 'pointer',
      }}
    >
      <Image
        id={'image-' + uid}
        itemProp='image'
        ref={ref}
        src={source}
        alt={alt}
        priority={props.priority}
        fill
        loading='lazy'
        placeholder='blur'
        quality={90}
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC'
        {...elementProps}
        css={{
          overflow: 'hidden',
          ...imageRasied({
            ...props,
            size: { width: props.size?.width ?? '100%', height: props.size?.height ?? '100%' },
          }),
          [MQ[0]]: { ...imageRasied(props?._mediaQuery?.s1440 ?? {}) },
          [MQ[1]]: { ...imageRasied(props?._mediaQuery?.s1280 ?? {}) },
          [MQ[2]]: { ...imageRasied(props?._mediaQuery?.s1080 ?? {}) },
          [MQ[3]]: { ...imageRasied(props?._mediaQuery?.s768 ?? {}) },
          [MQ[4]]: { ...imageRasied(props?._mediaQuery?.s600 ?? {}) },
          [MQ[5]]: { ...imageRasied(props?._mediaQuery?.s428 ?? {}) },
          scale: props.isHover && os === 'PC' ? '1.07' : 1,
          objectFit: objectFit ?? 'cover',
        }}
      />
    </div>
  );

  return (
    <>
      <ImageInstance />

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
                layout='fill'
                loading='lazy'
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC'
                objectFit='contain'
                {...elementProps}
                style={{ objectFit: 'contain' }}
                css={{ ...imageRasied({ ...props }) }}
              />
            </div>
          </div>
        </PopupImageWrapper>
      )}
    </>
  );
});

export default ImageInstance;
