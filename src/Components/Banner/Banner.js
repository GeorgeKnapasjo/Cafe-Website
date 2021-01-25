import React from 'react';
import { BannerImageContainer, BannerWrapper } from './Banner.styled';
import test from '../../images/test2.jpg'

const Banner = () => {
    return (
        <BannerWrapper>
            <BannerImageContainer>
                <img src={test} alt='Cafe'/>
            </BannerImageContainer>
         </BannerWrapper> 
    )
}

export default Banner;