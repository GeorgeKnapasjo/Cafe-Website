import styled from 'styled-components/macro';

export const NavBarContainer = styled.div`
    display:flex;
    height:70px;
    margin:auto;
    border-bottom:1px solid #d5d5d5;
`;

export const MenuBar = styled.div`
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
    background-color:#333;
`;

export const CompanyLogo = styled.div`
    margin:auto;
    box-sizing:border-box;
`;

export const MenuBarContainer = styled.div`
    cursor: pointer;
    padding:1rem;
    ${MenuBar}:first-child{
        transform: ${props => props.transform ? 'rotate(-45deg) translate(-9px, 7px)' : '' };
        -webkit-transform: ${props => props.transform ? 'rotate(-45deg) translate(-9px, 7px)' : '' };
        background-color:${props => props.transform ? '#d3d3d3' : '#333'};
    }

    ${MenuBar}:nth-last-child(2){
        opacity: ${props => props.transform ? '0' : ''};
    }

    ${MenuBar}:last-child{
        transform: ${props => props.transform ? 'rotate(45deg) translate(-8px, -7px)' : ''};
        -webkit-transform: ${props => props.transform ? 'rotate(45deg) translate(-8px, -7px)' : ''};
        background-color:${props => props.transform ? '#d3d3d3' : '#333'};
    }
    :hover{
        ${MenuBar}{
            background-color:${props => props.transform ? '' : '#d3d3d3'};
        }
    }
`;

export const MenuOptionsContainer = styled.div`
    width:100vw;
    display:flex;
    position:absolute;
    margin-top:4rem;
    flex-direction:column;
    
`;

export const MenuOption = styled.div`
    width:inherit;
    background-color:#1A1D36;
    height:30px;
    padding:0.5rem;
    padding-bottom:2rem;
    a{
        text-decoration:none;
        color:white;
    }
`;