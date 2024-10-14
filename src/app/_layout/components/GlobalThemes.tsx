import { JengaProvider } from '@/_ui/JengaProvider';
import { Global, css } from '@emotion/react';
import { ReactNode } from 'react';

//
//
export function GlobalThemes({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

          * {
            box-sizing: border-box;
            text-decoration: none;
            list-style: none;
            margin: 0;
            padding: 0;
            font-family: 'Noto Sans KR', sans-serif;
            user-select: auto;
            -webkit-touch-callout: none;
            -webkit-text-size-adjust: auto;
          }

          html {
            margin: 0;
            padding: 0;
            font-size: 16px;
          }

          body {
            display: block;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            overflow-y: auto;
            word-break: break-all;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          @supports (-webkit-touch-callout: none) {
            html,
            body,
            #layout {
              height: -webkit-fill-available;
            }
          }

          strong,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
            padding: 0;
          }

          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #4e4e51;
            cursor: pointer;
            white-space: nowrap;
            transition: 0.3s ease-in-out;
          }

          ul,
          li {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          button {
            display: flex;
            background-color: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            width: auto;
            color: #4e4e51;
            transition: all 0.3s ease-in-out;
          }

          svg,
          img,
          picture {
            transition: all 0.3s ease-in-out;
          }

          /* Custom Scrollbar Styles */
          ::-webkit-scrollbar {
            width: 8px;
            height: 6px;
          }
          ::-webkit-scrollbar-track {
            background-color: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #999;
            border-radius: 100px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #e2e2e2;
          }

          /* Input Styles */
          input,
          textarea,
          select {
            border: none;
            outline: none;
            text-decoration: none;
            background-color: transparent;
            resize: none;
          }

          input[type='checkbox'],
          input[type='radio'] {
            cursor: pointer;
          }

          select {
            -webkit-appearance: none;
            appearance: none;
            cursor: pointer;
          }

          select::-ms-expand {
            display: none;
          }

          input::-webkit-search-decoration,
          input::-webkit-search-cancel-button,
          input::-webkit-search-results-button,
          input::-webkit-search-results-decoration {
            display: none;
          }
        `}
      />

      <JengaProvider>{children}</JengaProvider>
    </>
  );
}
