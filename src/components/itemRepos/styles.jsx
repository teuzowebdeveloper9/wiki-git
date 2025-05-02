import styled from "styled-components";

export const ItemContainer = styled.div`

   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
    margin-top: 10px;
    width: 80%;
    text-align: center;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: large;
        font-size: 32px;
        color: #FAFAFA;
        margin-bottom: 8px;
    }

    p {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 200px;
        font-size: 12px;
        color: #FAFAFA;
    }    
    h4{
       font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: large;
        font-size: 28px;
        color: #FAFAFA;
        margin-bottom: 8px;
    }
    a{
      border-radius: 10px;
       font-family: "Poppins", sans-serif;
       font-weight: 700;
       width: 150px;
      height: 60px;  
      background-color: black;
      margin-top: 20px;
     text-decoration: none;
     color: white;
    }
    a:hover{
     color:purple;
    }
`