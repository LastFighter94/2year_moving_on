import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {Button, Input} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {Quiz} from "reusedUILogic/createOrEditQuiz/store/Quiz";
// import classes from './questionTextEdit.module.scss'

interface IProps {
    question_id: number | string,
    question_sentence: string,
    children: any,
    mainQuizStore: Quiz | null
}

const QuestionEditWrapper:FC<IProps> = observer(
    ({
         question_id,
         question_sentence,
         children,
         mainQuizStore
     }) => {
    return (
        <div>
            {question_id}
            <Input
                placeholder={question_sentence}
                type="text"
                onChange={e => {
                    mainQuizStore?.changeSentenceState(+question_id, e.target.value)
                }}
            />
            {children}
            <Button
                icon={<DeleteOutlined />}
                onClick={() => {
                    mainQuizStore?.deleteQuestion(question_id)
                }}
            >
                Delete question
            </Button>
        </div>
    )
})

export default QuestionEditWrapper;