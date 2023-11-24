import {FC} from "react";

import {observer} from "mobx-react-lite";

import { Outlet } from "react-router-dom"

// import classes from './TutorLayout.module.scss'

const TutorLayout:FC = observer(() => {
    return (
        <div>
            <h2>Tutor layout</h2>
            <div>
                <Outlet/>
            </div>
        </div>
    )
})

export default TutorLayout;