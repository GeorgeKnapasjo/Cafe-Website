import styled from 'styled-components/macro';


export const MenuBar = styled.div`
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
    background-color:#333;

`;
export const MenuBarContainer = styled.div`
    cursor: pointer;
    
    ${MenuBar}:first-child{
        transform: ${props => props.transform ? 'rotate(-45deg) translate(-9px, 7px)' : '' };
        -webkit-transform: ${props => props.transform ? 'rotate(-45deg) translate(-9px, 7px)' : '' };
        background-color:${props => props.transform ? 'white' : '#333'};
    }

    ${MenuBar}:nth-last-child(2){
        opacity: ${props => props.transform ? '0' : ''};
    }

    ${MenuBar}:last-child{
        transform: ${props => props.transform ? 'rotate(45deg) translate(-8px, -7px)' : ''};
        -webkit-transform: ${props => props.transform ? 'rotate(45deg) translate(-8px, -7px)' : ''};
        background-color:${props => props.transform ? 'white' : '#333'};
    }
    :hover{
        ${MenuBar}{
            background-color:${props => props.transform ? '' : 'white'};
        }
    }
`;
