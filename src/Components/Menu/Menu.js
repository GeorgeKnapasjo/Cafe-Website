import React from 'react';
import { MenuContainer, MenuItem, MenuWrapper } from './Menu.styled';

const Menu = () => {
    return(
        <MenuWrapper>
            <MenuContainer>
                <h1>Menu</h1>
            <MenuItem>
                <h2>Breakfast</h2>
                <p>Eggs on Toast</p>
                <p>Smashed Avocado</p>
                <p>Country Breakfast</p>
                <p>Breakfast Stack</p>
                </MenuItem>
                <MenuItem>
                <h2>Lunch</h2>
                <p>Cheese Burger</p>
                <p>Grilled Chicken Burger</p>
                <p>Beef Burger</p>
                <p>BLT Focaccia</p>
                <p>Chicken Schnitzel Focaccia</p>
                </MenuItem>
                <MenuItem>
                <h2>Beverages</h2>
                <p>Coke</p>
                <p>Fanta</p>
                <p>Sprite</p>
                <p>Cappuccino</p>
                <p>Flat White</p>
                </MenuItem>
                <MenuItem>
                <h2>Snacks</h2>
                <p>Plain Bagel</p>
                <p>Salmon Bagel</p>
                <p>Chips with Sweet Chilli Sauce</p>
                <p>Garlic Bread</p>
                <p>Garlic Bread</p>
                </MenuItem>
            </MenuContainer>
        </MenuWrapper>
    )
};

export default Menu;