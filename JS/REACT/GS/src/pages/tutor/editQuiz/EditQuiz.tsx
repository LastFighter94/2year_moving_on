import {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import ApiSample from "../../../API/ApiSample";
import {IQuiz} from "../../../types/types";
import CreateOrEditQuiz from "../../../reusedUILogic/createOrEditQuiz/CreateOrEditQuiz";
// import classes from './EditQuiz.module.scss'

const EditQuiz:FC = observer(() => {
    const {id} = useParams()

    return (
        <div>
            <p>Edit Test functional (by id) - {id}</p>
            <CreateOrEditQuiz quizStore="edit"/>
        </div>
    )
})

export default EditQuiz;