import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 폰트 가져오기 */
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  *[hidden] {
    display: none;
  }

  html, body, #root {
    margin: 0 auto; /* 페이지를 가운데 정렬 */
    padding: 0;
    width: 100%;
    overflow-x: hidden; /* 가로 스크롤 방지 */
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    background-color:rgb(241, 235, 227);
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
