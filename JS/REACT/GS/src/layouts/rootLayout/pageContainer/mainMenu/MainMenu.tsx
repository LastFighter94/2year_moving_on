import React, {FC} from 'react';
import {Menu, MenuProps} from 'antd';
import classes from './MainMenu.module.scss'
import {itemsFullExample} from "./menuItems"
import { useNavigate } from 'react-router-dom';
import {addGlobModificator} from "../../../../helpers/styleHelpers";
import {calculateHeight} from "../../../../helpers/styleHelpers";

// здесь можно делать любое состояние items в Menu в зависимости от чего угодно

const MainMenu:FC = () => {
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === 'student'){
            navigate('/student')
        } else if (e.key === 'tutor'){
            navigate('/tutor-admin')
        } else {
            console.log('click ', e);
            navigate('/tests')
        }
    };

    return (
        <div
            className={addGlobModificator(classes.menu, 'bg-white')}
            style={{height: calculateHeight()}}
        >
            <Menu
                onClick={onClick}
                mode="inline"
                items={itemsFullExample}
            />
        </div>
    );
};

export default MainMenu;