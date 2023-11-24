import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {Card} from "antd";
import { Tabs, TabsProps } from 'antd';
import QuestionTextEdit from "reusedUILogic/createOrEditQuiz/questionAddCard/questionEdit/questionTextEdit/questionTextEdit";
import QuestionChoicesEdit from "reusedUILogic/createOrEditQuiz/questionAddCard/questionEdit/questionChoicesEdit/questionChoicesEdit";
import {IQ} from "../../../types/types";
import {Quiz} from "../store/Quiz";
// import classes from './questionAddCard.module.scss'

interface IProps {
    question: IQ,
    question_id: number,
    mainQuizStore: Quiz | null
}

const QuestionAddCard:FC<IProps> = observer((
    {
        question_id,
        question,
        mainQuizStore
    }) => {
    const onChange = (key: string) => {
        if (key === 'text') mainQuizStore?.changeServerQuestionsState(question_id, 'text')
        if (key === 'choice') mainQuizStore?.changeServerQuestionsState(question_id, 'choice')
    };

    const questionText = mainQuizStore?.questionsState.find(q => q.question_id === question_id)?.textQuestion
    const questionChoice = mainQuizStore?.questionsState.find(q => q.question_id === question_id)?.choiceQuestion

    const questionServer = mainQuizStore?.serverQuestionsComputed.find(q => q.question_id === question_id)

    const items: TabsProps['items'] = [
        {
            key: 'text',
            label: `Text Question`,
            children: (<QuestionTextEdit
                question_sentence={question.sentence}
                mainQuizStore={mainQuizStore}
                question_id={question_id}
                question={questionText}
            />),
        },
        {
            key: 'choice',
            label: `Choice Question`,
            children: (<QuestionChoicesEdit
                question_sentence={question.sentence}
                mainQuizStore={mainQuizStore}
                question_id={question_id}
                question={questionChoice}
            />)
        },
    ];

    return (
        <div className="mb-2">
            <Card size="small">
                <Tabs
                    defaultActiveKey={questionServer?.type === 'text' ? 'text' : 'choice'}
                    onChange={onChange}
                    tabPosition="top"
                    items={items}
                    type="card"
                />
            </Card>
        </div>
    )
})

export default QuestionAddCard;