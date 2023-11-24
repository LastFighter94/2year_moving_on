import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import { Card, Checkbox, Input } from 'antd';
import {getAnswerValue, IQ} from "types/types"
// import classes from './QuestionCard.module.scss'

interface IProps {
    question: IQ,
    changeAnswer?: getAnswerValue
}

const QuestionCard:FC<IProps> = observer(({question, changeAnswer}) => {
    const resolveChangeAnswer: getAnswerValue = (qAnswer, qId, type, sentence) => {
        if (changeAnswer) changeAnswer(qAnswer, qId, type, sentence)
    };

    switch (question.type) {
        case "text":
            return (
                <div>
                Question type: {question.type}

                {/* todo обернуть card в компонент */}
                <Card size="small"
                      title={question.sentence}
                      extra={
                          <>
                              Extra text or functional (can be used for info or something else)
                              {/*  can be hidden if needed  */}
                          </>}
                      style={{ maxWidth: 1000 }}
                >

                    <Input
                        onChange={e => resolveChangeAnswer(e.target.value, question.question_id, question.type, question.sentence)}
                    />
                </Card>
            </div>
            )
        case "choice":
            return (
                <div>
                    Question type: {question.type}

                    <Card size="small"
                          title={question.sentence}
                          extra={
                              <>
                                  Extra text or functional (can be used for info or something else)
                                  {/*  can be hidden if needed  */}
                              </>}
                          style={{ maxWidth: 1000 }}
                    >
                        <Checkbox.Group style={{ display: 'block' }} onChange={e => resolveChangeAnswer(e, question.question_id, question.type, question.sentence)}>
                            {question.choices.map(choice =>
                                <p key={choice.text}>
                                    <Checkbox
                                        value={choice.text}
                                    >
                                        {choice.text}
                                    </Checkbox>
                                </p>
                            )}
                        </Checkbox.Group>
                    </Card>
                </div>
            )
    }
})

export default QuestionCard;