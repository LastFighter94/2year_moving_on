import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {Button, Checkbox, Input} from "antd";
import {Quiz} from "../../../store/Quiz";
import QuestionEditWrapper from "../questionEditWrapper";
import {IQuestionChoice} from "../../../../../types/types";
import {PlusCircleOutlined, MinusOutlined} from "@ant-design/icons";
// import classes from './questionChoicesEdit.module.scss'

interface IProps {
    question_sentence: string,
    question_id: number,
    question: IQuestionChoice | undefined,
    mainQuizStore: Quiz | null
}

const QuestionChoicesEdit:FC<IProps> = observer(
    ({
         question_id,
         question_sentence,
         question,
         mainQuizStore}
    ) => {
    return (
        <QuestionEditWrapper
            question_id={question_id}
            question_sentence={question_sentence}
            mainQuizStore={mainQuizStore}
        >
            <p>
                Mark correct answer as checked values
            </p>

            {question?.choices?.map(choice =>
                <p key={choice.id}>
                    <Checkbox
                        onChange={e => mainQuizStore?.changeCheckedValueInChoiceQuestion(question_id, e.target.checked, choice.id)}
                        checked={choice.is_correct}
                    >
                        <Input
                            defaultValue={choice.text}
                            onChange={e => mainQuizStore?.changeChoiceTextInChoiceQuestion(question_id, e.target.value, choice.id)}
                        />
                    </Checkbox>

                    <Button
                        className="mr-1"
                        icon={<MinusOutlined />}
                        onClick={() => mainQuizStore?.deleteChoiceInChoiceQuestion(question_id, choice.id)}
                    >
                    </Button>
                </p>
            )}

            <Button
                className="mr-1"
                icon={<PlusCircleOutlined />}
                onClick={() => mainQuizStore?.addChoiceInChoiceQuestion(question_id)}
            >
                Add one more choice
            </Button>

        </QuestionEditWrapper>
    )
})

export default QuestionChoicesEdit;