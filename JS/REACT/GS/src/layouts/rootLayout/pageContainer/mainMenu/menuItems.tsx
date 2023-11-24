import React from "react";
import {MenuProps} from "antd";

import getItem from "../../../../types/menuTypes"

export const itemsFullExample: MenuProps['items'] = [
    getItem('Menu', 'grp', null, [getItem('Student', 'student'), getItem('Tutor', 'tutor')], 'group'),
];