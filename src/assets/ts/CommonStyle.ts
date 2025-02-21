import { createGlobalStyle } from "styled-components";

const CommonStyle = createGlobalStyle`
  body { 
    margin: 0px; 
    font-family: 'pretendard'; 
    color: #f9f5ef;
    background: #111;
    /* overflow-x: hidden; */
  }
  p,dl,ol,ul,li,dd,input,h1,h2,h3,h4,h5,h6,article,section { margin: 0px; padding: 0px; }
  textarea { padding: 0px; resize: none; }
  img { vertical-align: top; }
  table th,table td { font-weight: normal; }
  a { color: inherit; text-decoration: auto; }
  i { font-style: normal; }
  ol,ul,li { list-style: none; }

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

  .transition {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transition: 1.5s cubic-bezier(0.74, -0.11, 0.24, 1.12);
  }

  .transition-enter {
    opacity: 0;
  }

  .transition-enter-active {
    opacity: 1;
  }

  .transition-exit {
    opacity: 1;
  }

  .transition-exit-active {
    opacity: 0;
  }
`;

export default CommonStyle;
