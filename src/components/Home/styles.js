import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    display: flex;
    width: 100%;
    height: 100%;
    
    
    

`;

export const ListAndSearch = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchDiv = styled.div`
    width: 800px;
    height: 60px;
    border: 1px solid #000;
    border-radius: 2px;

    align-items: center;
    justify-content: space-between;

    @media(max-width: 1050px){
        width: 600px;
    }
    @media(max-width: 850px){
        width: 400px;
    }
    @media(max-width: 650px){
        width: 200px;
    }

    > input {
        width: 100%;
        height: 100%;

        box-shadow: 0 0 0 0;
        outline: 0;
        
        padding: 10px 20px 10px 20px;

        font-size: 18px;
        font-family: 'Ubuntu', sans-serif;
    }

`;

export const List = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #f1f1f1;

    margin-top: 10px;
    border: 1px solid #121212;
    border-radius: 2px;

    > ul {
        
        

     > li {
         height: 100%;
         list-style: none;
         border-bottom: 1px solid #131313;
         padding-top: 10px;
         

      > strong {
            font-family: 'Ubuntu';
            
      }

      > a {
          font-family: 'Ubuntu';
          color: gray;
      }
     }   
    }

`;

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    flex-direction: column;
    

`;
