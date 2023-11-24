import {FC} from "react";

import {observer} from "mobx-react-lite";

import { Outlet } from "react-router-dom"

// import classes from './StudentLayout.module.scss'

const StudentLayout:FC = observer(() => {
    return (
        <div>
            <h2>Student layout</h2>
            <Outlet/>
        </div>
    )
})

export default StudentLayout;