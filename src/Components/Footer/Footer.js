import React from 'react';
import { StyledFooter, FooterSection } from './Footer.styled';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterSection>
                <h3>Opening hours</h3>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
            </FooterSection>
            <FooterSection>
                <h3>Menu</h3>
                <a href='/'>Breakfast</a>
                <a href='/'>Lunch</a>
                <a href='/'>Beverages</a>
                <a href='/'>Snacks</a>
            </FooterSection>
            <FooterSection>
                <h3>Socials</h3>
            </FooterSection>
        </StyledFooter>
    )
}

export default Footer