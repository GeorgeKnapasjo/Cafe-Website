import React from 'react';
import { AboutUsContainer, AboutUsWrapper } from './AboutUs.styled';

const AboutUs = () => {
    return(
        <AboutUsWrapper>
            <AboutUsContainer>
                <h1>Location</h1>
                <p>Bar Valente is your go to spot for cheap restaurant quality
                     eating in the inner west. Iconic to Dulwich Hill, Bar Valente
                     has been providing quality food for XX amount of years. Whether you're
                     local to the area or just passing by, Bar Valente is a must.</p>
            
            </AboutUsContainer>
            <AboutUsContainer>
                <h1>About Us</h1>
                <p>Bar Valente is your go to spot for cheap restaurant quality
                     eating in the inner west. Iconic to Dulwich Hill, Bar Valente
                     has been providing quality food for XX amount of years. Whether you're
                     local to the area or just passing by, Bar Valente is a must.</p>
            </AboutUsContainer>
        </AboutUsWrapper>
    )
};

export default AboutUs;