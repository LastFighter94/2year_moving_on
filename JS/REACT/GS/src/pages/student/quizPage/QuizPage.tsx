import {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import ApiSample from "../../../API/ApiSample";
import QuestionCard from "./questionCard/QuestionCard";
import {IQuiz, Answer, getAnswerValue} from "../../../types/types";
import {SendOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {quizZero} from "../../../API/quizZero";
// import classes from './QuizPage.module.scss'

const QuizPage:FC = observer( () => {
    const {id} = useParams()
    const [quiz, setQuiz] = useState<IQuiz>()

    let answersList: Answer[] = []

    useEffect(() => {
        // ApiSample.getQuizById(setQuiz, id)
        setQuiz(quizZero)
    }, [])

    createAnswersList()

    function createAnswersList(){
        quiz?.questionList.map(q => {
            if (q.type === 'text') answersList.push({question_id: q.question_id, type: q.type, answer: '', sentence: q.sentence})
            if (q.type === 'choice') answersList.push({question_id: q.question_id, type: q.type, answer: [], sentence: q.sentence})
        })
    }

    const changeAnswer: getAnswerValue = (qAnswer, qId, type, sentence) => {
        // console.log(qId, qAnswer, type)
        answersList.map((q: Answer) => {
            if (q.question_id == qId) q.answer = qAnswer
        })
        console.log(answersList)
    }

    // console.log(quiz)
    console.log(answersList)

    return (
        <div>
            <p>Test for student functional (by quizId) - {id}</p>
            <p>Description {quiz?.description} | Success percent cutoff: {quiz?.successPercentCutoff}</p>
            {quiz?.questionList.map((question) =>
                <QuestionCard
                    question={question}
                    changeAnswer={changeAnswer}
                    key={question.question_id}
                />
            )}
            <Button type="primary" icon={<SendOutlined />}>Send answers</Button>
        </div>
    )
})

export default QuizPage;