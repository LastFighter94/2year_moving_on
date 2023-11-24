import React, {FC, } from "react";
import {observer} from "mobx-react-lite";
import CreateOrEditQuiz from "../../../reusedUILogic/createOrEditQuiz/CreateOrEditQuiz";
// import classes from './CreateQuiz.module.scss'

const CreateQuiz:FC = observer(() => {
    return (
        <div>
            <p>Create Quiz Functional</p>
            <CreateOrEditQuiz quizStore="create"/>
        </div>
    )
})

export default CreateQuiz;