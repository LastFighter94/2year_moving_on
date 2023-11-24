import React, {FC} from 'react';

import MainMenu from "./mainMenu/MainMenu"
import Content from "./content/Content"

import classes from './PageContainer.module.scss'

const PageContainer:FC = () => {
    return (
        <div className={classes.pageContainer}>
            <MainMenu/>
            <Content/>
        </div>
    );
};

export default PageContainer;