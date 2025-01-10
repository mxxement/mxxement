import { createGlobalStyle } from "styled-components";

const CommonStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'pretendard';
  }

  @font-face {
    font-family: 'pretendard';
    src: url('../assets/font/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
}

  @font-face {
    font-family: 'pretendard';
    src: url('../assets/font/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'pretendard';
    src: url('../assets/font/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'pretendard';
    src: url('../assets/font/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'pretendard';
    src: url('../assets/font/Pretendard-Black.woff2') format('woff2');
    font-weight: 900;
    font-display: swap;
  }
`;

export default CommonStyle;
