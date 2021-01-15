import styled from 'styled-components/macro';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export const FormWrapper = styled.div`
    width:75vw;
    display:flex;
    margin:auto;
    margin-top:10rem;
    font-family: 'Open Sans Condensed', sans-serif;
    font-family: 'Raleway', sans-serif;
    h1{
        text-align:center;
        margin-bottom:2rem;
    }

`;

export const FormContainer = styled.div`
margin:auto;
display:flex;
flex-direction:column;
margin:auto;
width:50vw;
max-width:700px;
Form{
    padding:1rem;
    height:436px;
    border: 1px solid #dee3e5;
    box-shadow: 0 0 4px 2px #dee3e5;
    margin-bottom:10rem;
}


`;

export const LoadingSpinnerWrapper = styled.div`
    margin-top:-1rem;
    height:inherit;
    width:45vw;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
`;

export const LoadingSpinnerContainer = styled.div`
    height:80px;
    width:80px;
    z-index:10;
    position:relative;
`;