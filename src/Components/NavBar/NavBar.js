import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBarContainer, MenuOptionsContainer, MenuBar, NavBarContainer, CompanyLogo, MenuOption } from './NavBar.styled';

const NavBar = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const menuHandler = () => {
        menuClicked ? setMenuClicked(false) : setMenuClicked(true);
    }
    return (
        <>
            <NavBarContainer>
                <MenuBarContainer transform={menuClicked} onClick={menuHandler}>
                    <MenuBar transform={menuClicked} onClick={menuHandler} />
                    <MenuBar transform={menuClicked} onClick={menuHandler} />
                    <MenuBar transform={menuClicked} onClick={menuHandler} />
                </MenuBarContainer>
                {menuClicked &&
                    <MenuOptionsContainer>
                        <MenuOption>
                            <Link to=''>Menu</Link>
                        </MenuOption>
                        <MenuOption>
                            <Link to=''>Contact us</Link>
                        </MenuOption>
                        <MenuOption>
                            <Link to=''>About</Link>
                        </MenuOption>
                    </MenuOptionsContainer>
                }
                <CompanyLogo>Jeff</CompanyLogo>
            </NavBarContainer>
        </>)
}

export default NavBar;