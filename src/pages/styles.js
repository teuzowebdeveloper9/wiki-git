import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100vh;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center; 
    align-items: center;    
    min-height: 100vh;
    background: linear-gradient(45deg, black, rgb(32, 11, 90));
    color: rgb(255, 255, 255);
  }
  .box {
    margin-top: 110px;
    background: linear-gradient(45deg, rgb(48, 22, 77), rgb(14, 14, 126), rgb(22, 12, 12));
    height: 450px;
    width: 550px;
  }
  .gitzin {
    height: 80px;
    width: 80px;
    margin-left: 250px;
  }
`