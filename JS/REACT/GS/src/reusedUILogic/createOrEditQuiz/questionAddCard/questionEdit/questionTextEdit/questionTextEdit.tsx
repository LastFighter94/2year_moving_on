import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {Input} from "antd";
import {Quiz} from "../../../store/Quiz";
import QuestionEditWrapper from "../questionEditWrapper";
import {IQuestionText} from "../../../../../types/types";
// import classes from './questionTextEdit.module.scss'

interface IProps {
    question: IQuestionText | undefined,
    question_id: number | string,
    mainQuizStore: Quiz | null,
    question_sentence: string
}

const QuestionTextEdit:FC<IProps> = observer(
    ({
         question_sentence,
         mainQuizStore,
         question_id,
         question
    }) => {
    return (
        <QuestionEditWrapper
            question_id={question_id}
            question_sentence={question_sentence}
            mainQuizStore={mainQuizStore}
        >
            <Input
                value={question?.true_answer}
                type="text"
                onChange={e => mainQuizStore?.changeTrueAnswerOfQuestionTextState(+question_id, e.target.value)}
            />
        </QuestionEditWrapper>
    )
})

export default QuestionTextEdit;