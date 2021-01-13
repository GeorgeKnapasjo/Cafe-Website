import React from 'react';
import { useState } from 'react';
import { MenuContainer, MenuItem, MenuWrapper } from './Menu.styled';

const Menu = () => {
    const [fullBreakfastMenu, setFullBreakfastMenu] = useState(false);
    const [fullLunchMenu, setFullLunchMenu] = useState(false);
    const [fullBeverageMenu, setFullBeverageMenu] = useState(false);
    const [fullSnackMenu, setFullSnackMenu] = useState(false);

    const stateSetter = (menu) => {
        switch (menu) {
            case 'breakfast':
                fullBreakfastMenu ? setFullBreakfastMenu(false) : setFullBreakfastMenu(true)
                break;
            case 'lunch':
                fullLunchMenu ? setFullLunchMenu(false) : setFullLunchMenu(true)
                break;
            case 'beverages':
                fullBeverageMenu ? setFullBeverageMenu(false) : setFullBeverageMenu(true)
                break;
            case 'snacks':
                fullSnackMenu ? setFullSnackMenu(false) : setFullSnackMenu(true)
                break;
        }
    }

    return (
        <MenuWrapper>
            <MenuContainer>
                <h1>Menu</h1>
                <MenuItem onClick={() => stateSetter('breakfast')}>
                    <h2>Breakfast</h2>
                    <p>Eggs on Toast</p>
                    <p>Smashed Avocado</p>
                    <p>Country Breakfast</p>
                    <p>Breakfast Stack</p>
                    <p>Deez nuts</p>
                    {fullBreakfastMenu &&
                        <>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                        </>
                    }
                </MenuItem>
                <MenuItem onClick={() => stateSetter('lunch')}>
                    <h2>Lunch</h2>
                    <p>Cheese Burger</p>
                    <p>Grilled Chicken Burger</p>
                    <p>Beef Burger</p>
                    <p>BLT Focaccia</p>
                    <p>Chicken Schnitzel Focaccia</p>
                    {fullLunchMenu &&
                        <>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                        </>
                    }
                </MenuItem>
                <MenuItem onClick={() => stateSetter('beverages')}>
                    <h2>Beverages</h2>
                    <p>Coke</p>
                    <p>Fanta</p>
                    <p>Sprite</p>
                    <p>Cappuccino</p>
                    <p>Flat White</p>
                    {fullBeverageMenu &&
                        <>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                        </>
                    }
                </MenuItem>
                <MenuItem onClick={() => stateSetter('snacks')}>
                    <h2>Snacks</h2>
                    <p>Plain Bagel</p>
                    <p>Salmon Bagel</p>
                    <p>Chips & Sweet Chilli Sauce</p>
                    <p>Garlic Bread</p>
                    <p>Garlic Bread</p>
                    {fullSnackMenu &&
                        <>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                            <p>Test data</p>
                        </>
                    }
                </MenuItem>
            </MenuContainer>
        </MenuWrapper>
    )
};

export default Menu;