// /** @jsxImportSource @emotion/react */
// import Link from 'next/link';
// import { HTMLAttributes } from 'react';
// import { extandedProps } from './_utils/extandedProps';
// import { TabTheme, extandedMediaQuery } from './_utils/themes';
// import { TabType } from './_utils/types';

// //
// type AttriType = Omit<
//   HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>,
//   'color' | 'disabled'
// >;

// type Types = {
//   as?: 'div' | 'li' | 'span' | 'button' | 'a';
//   href?: string;
//   target?: '_blank' | '_self' | '_parent' | '_top';
//   disabled?: boolean | null;
// } & AttriType &
//   TabType;

// //
// export function TouchableOpacity({ as = 'div', txtSize, onClick, ...props }: Types) {
//   const { elementProps } = extandedProps(props);
//   const mq_styles = extandedMediaQuery({ _mediaQuery: props._mediaQuery });

//   const TYPOGRAPH_WEIGHT = {
//     lighter: { fontWeight: '300' },
//     normal: { fontWeight: 400 },
//     medium: { fontWeight: '500' },
//     bold: { fontWeight: '600' },
//   } as const;

//   const txt_ellipsis_extend = {
//     maxWidth: props?.ellipsis?.width ?? props.maxWidth,
//     display: '-webkit-box',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     WebkitBoxOrient: 'vertical',
//     WebkitLineClamp: props?.ellipsis?.line,
//   } as any;

// const tab_theme = TabTheme({
//   ...props,
//   width: props.width ?? 'auto',
//   positionType: props.positionType ?? 'relative',
//   display: props.display ?? 'flex',
//   direction: props.direction ?? 'row',
//   align: props.align ?? 'center',
//   crossAlign: props.crossAlign ?? 'center',
//   txtSize: typeof txtSize === 'string' ? txtSize : (txtSize ?? 14) / 16 + 'rem',
//   txtColor: props.txtColor ?? '#5b94f0',
//   txtWeight: TYPOGRAPH_WEIGHT[props.txtWeight ?? 'normal'].fontWeight,
//   txtAlign: props.txtAlign ?? 'center',
//   whiteSpace: props?.ellipsis?.ellipsis ? 'normal' : (props.whiteSpace ?? 'nowrap'),
//   userSelect: props.userSelect ? props.userSelect : 'none',
//   cursor: props.cursor ? props.cursor : onClick && 'pointer',
//   transitionTime: props.transitionTime ?? 0.3,
//   ...(props.ellipsis?.ellipsis && txt_ellipsis_extend),
// });

//   const globel_theme = {
//     ...(tab_theme as any),
//     ...mq_styles,
//     '&:hover': TabTheme({ ...props._hover }),
//     '&:active': TabTheme({
//       ...props._active,
//       opacity: props._active?.opacity ?? 0.75,
//     }),
//     '&:disabled': TabTheme({ ...props._disabled, txtColor: '#ccc' }),
//   };

//   const Button = () => (
//     <button
//       className='TouchableOpacity'
//       disabled={props.disabled}
//       css={globel_theme}
//       onClick={onClick}
//       {...elementProps}
//     >
//       {props.children}
//     </button>
//   );

//   return (
//     <>
//       {typeof props.disabled === 'boolean' ? (
//         <Button />
//       ) : (
//         <>
//           {as === 'div' && (
//             <div className='TouchableOpacity_div' css={globel_theme} {...elementProps} onClick={onClick}>
//               {props.children}
//             </div>
//           )}

//           {as === 'li' && (
//             <li className='TouchableOpacity_li' css={globel_theme} {...elementProps} onClick={onClick}>
//               {props.children}
//             </li>
//           )}

//           {as === 'span' && (
//             <span className='TouchableOpacity_span' css={globel_theme} {...elementProps} onClick={onClick}>
//               {props.children}
//             </span>
//           )}

//           {as === 'a' && (
//             <Link
//               className='TouchableOpacity_a'
//               href={props.href}
//               target={props.target}
//               css={globel_theme}
//               {...elementProps}
//               onClick={onClick}
//             >
//               {props.children}
//             </Link>
//           )}

//           {as === 'button' && <Button />}
//         </>
//       )}
//     </>
//   );
// }

/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { extandedProps } from './_utils/extandedProps';
import { TabTheme, extandedMediaQuery } from './_utils/themes';
import { TabType } from './_utils/types';

type AttriType = Omit<
  HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>,
  'color' | 'disabled'
>;

type CommonProps = {
  as?: 'div' | 'li' | 'span';
};

type AnchorProps = {
  as: 'a';
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

type TabT = {
  as?: 'button';
  disabled?: boolean | null;
};

type Types = (CommonProps | AnchorProps | TabT) & AttriType & TabType;

export function TouchableOpacity({ as = 'div', txtSize, onClick, ...props }: Types) {
  const { elementProps } = extandedProps(props);
  const mq_styles = extandedMediaQuery({ _mediaQuery: props._mediaQuery });

  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: '300' },
    normal: { fontWeight: 400 },
    medium: { fontWeight: '500' },
    bold: { fontWeight: '600' },
  } as const;

  const txt_ellipsis_extend = {
    maxWidth: props?.ellipsis?.width ?? props.maxWidth,
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: props?.ellipsis?.line,
  } as any;

  const tab_theme = TabTheme({
    ...props,
    width: props.width ?? 'auto',
    positionType: props.positionType ?? 'relative',
    display: props.display ?? 'flex',
    direction: props.direction ?? 'row',
    align: props.align ?? 'center',
    crossAlign: props.crossAlign ?? 'center',
    txtSize: typeof txtSize === 'string' ? txtSize : (txtSize ?? 14) / 16 + 'rem',
    txtColor: props.txtColor ?? '#5b94f0',
    txtWeight: TYPOGRAPH_WEIGHT[props.txtWeight ?? 'normal'].fontWeight,
    txtAlign: props.txtAlign ?? 'center',
    whiteSpace: props?.ellipsis?.ellipsis ? 'normal' : (props.whiteSpace ?? 'nowrap'),
    userSelect: props.userSelect ? props.userSelect : 'none',
    cursor: props.cursor ? props.cursor : onClick && 'pointer',
    transitionTime: props.transitionTime ?? 0.3,
    ...(props.ellipsis?.ellipsis && txt_ellipsis_extend),
  });

  const globel_theme = {
    ...(tab_theme as TabType),
    ...mq_styles,
    '&:hover': TabTheme({ ...props._hover }),
    '&:active': TabTheme({
      ...props._active,
      opacity: props._active?.opacity ?? 0.75,
    }),
    '&:disabled': TabTheme({ ...props._disabled, txtColor: '#ccc' }),
  };

  if (as === 'button' && 'disabled' in props) {
    return (
      <button type='button' disabled={props?.disabled} css={globel_theme} onClick={onClick} {...elementProps}>
        {props.children}
      </button>
    );
  }

  if (as === 'a' && 'href' in props) {
    return (
      <Link href={props.href} target={props.target} css={globel_theme} {...elementProps} onClick={onClick}>
        {props.children}
      </Link>
    );
  }

  const Element = as || 'div';

  return (
    <Element css={globel_theme} onClick={onClick} {...elementProps}>
      {props.children}
    </Element>
  );
}
