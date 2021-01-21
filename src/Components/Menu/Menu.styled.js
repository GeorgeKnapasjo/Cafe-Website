import styled from 'styled-components/macro';

export const MenuWrapper = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    font-family: 'Raleway', sans-serif;
    display:flex;
`;

export const MenuContainer = styled.div`
    border: 1px solid #242934;
    margin:auto;
    margin-top:3rem;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:70vw;
    h1{
        color:#242934;
        width:15vw;
        height:6vw;
        text-align:center;
        margin-bottom:0;
        margin-top:-1.5rem;
        background-color:white;
        z-index:10;
        margin-bottom:2rem;
    }
    padding: 0 2rem 2rem 2rem;
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
        cursor:pointer;
    }
`;

