import React, {FC} from 'react';

import classes from './Footer.module.scss'
import {addGlobModificator} from "../../../helpers/styleHelpers";

const Footer:FC = () => {

    return (
        <div className={addGlobModificator(classes.footer, 'p-1')}>
            Contacts e.t.c
        </div>
    );
};

export default Footer;