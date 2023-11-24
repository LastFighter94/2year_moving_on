import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {calculateHeight} from "../../../../helpers/styleHelpers";

const Content:FC = () => {
    return (
        <div
            className="pr-1 pl-1"
            style={{height: calculateHeight(), overflow: 'auto', width: '100%'}}
        >
            <Outlet/>
        </div>
    );
};

export default Content;