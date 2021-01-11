import styled from 'styled-components/macro';

export const MenuWrapper = styled.div`
    display:flex;
`;

export const MenuContainer = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    font-family: 'Raleway', sans-serif;
    margin:auto;
    margin-top:3rem;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:70vw;
    h1{
        width:100vw;
        text-align:center;
        margin-top:2rem;
        margin-bottom:4rem;
    }
`;

export const MenuItem = styled.div`
    margin-left:auto;
    margin-right:auto;
    color:#242934;
    padding:1rem;
    width:25vw;
    text-align:center;
    h2{
        padding-bottom:1rem;
        ::after{
            content: "";
            background-color: #000;
            position: relative;
            width: 1px;
            height: 1.5rem;
            top: 10px;
            left: 50%;
            display: block; 
    }
    }
    p{
        padding-bottom:1rem;
        ::after{
                content: "";
                background-color: #242934;
                position: relative;
                width: 1px;
                height: 1.5rem;
                top: 10px;
                left: 50%;
                display: block; 
        }
    }
    :hover{
        border: 1px solid #dee3e5;
        box-shadow: 0 2px 4px 2px #dee3e5;
    }
`;

