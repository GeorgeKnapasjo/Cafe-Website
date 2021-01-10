import styled from 'styled-components/macro';

export const BannerWrapper = styled.div`
    display:flex;
    margin:auto;
`;

export const BannerImageContainer = styled.div`
    width:100vw;
    height:320px;
    border: 1px solid black;
    margin:auto;
    img{
        height:inherit;
        width:inherit;
        object-fit:cover;
    }
`;