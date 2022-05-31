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

img {
  vertical-align: top;
}

html,
body {
   line-height: 1;
  /* background: #000; */
  height: 100%;
  width: 100%;
  font-family: "Ubuntu", sans-serif;
 
 
}
body {
  padding: 0 calc(20px - (100vw - 100%)) 0 0;
}

`;
