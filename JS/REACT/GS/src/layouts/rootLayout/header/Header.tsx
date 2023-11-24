import React, {FC, useEffect, useRef} from 'react';
import {NavLink} from "react-router-dom";

import classes from './Header.module.scss'

import {addGlobModificator} from "../../../helpers/styleHelpers";

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import {observer} from "mobx-react-lite";
import {header} from "./store/Header"

const Header:FC = observer(() => {
    const headerDivRef = useRef<HTMLInputElement>(null);

    // сделать кастомный хук?
    useEffect(() => {
        if (headerDivRef.current){
            header.setHeight(getComputedStyle(headerDivRef.current).height)
            header.setMarginBottom(getComputedStyle(headerDivRef.current).marginBottom)
        }
    })

    return (
        <div className={addGlobModificator(classes.header, 'p-1 bg-white mb-1')} ref={headerDivRef}>
            <h2>Grading System</h2>
            <ul>
                <li><Input size="large" placeholder="search" prefix={<SearchOutlined />} /></li>
                <li className="ml-1"><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
            </ul>
        </div>
    );
});

export default Header;