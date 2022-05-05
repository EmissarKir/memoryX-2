import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
*::after,
*::before {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
ul,
ol,
li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
html,
body {
   line-height: 1;
  /* background: #000; */
  height: 100%;
  width: 100%;
  font-family: "Ubuntu", sans-serif;
}


`;
