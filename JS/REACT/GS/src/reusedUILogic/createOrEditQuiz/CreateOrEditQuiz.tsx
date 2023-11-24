import React, {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Button, Input} from 'antd';
import {PauseCircleOutlined, PlusCircleOutlined, SaveOutlined} from '@ant-design/icons';
import QuestionAddCard from "./questionAddCard/questionAddCard";
import {createQuizStore, Quiz} from "./store/Quiz";
import {editQuizStore} from "./store/Quiz";
import {useParams} from "react-router-dom";
import {quizStore} from "../../types/types";
// import classes from './CreateOrEditQuiz.module.scss'

interface IProps {
    quizStore: quizStore
}

const CreateOrEditQuiz:FC<IProps> = observer(({quizStore}) => {
    const [additionalQuestionsNum, setAdditionalQuestionsNum] = useState(0)

    const {id} = useParams()

    let mainQuizStore: Quiz | null = null

    if (quizStore === "create") mainQuizStore = createQuizStore
    if (quizStore === "edit") mainQuizStore = editQuizStore

    useEffect(() => {
        // если значение was being cashed (getters в mobx - могут кэшировать данные) - не делаем запрос на back
        // также проверка на функционал "создания" - если да, нет необходимости подтягивать данные
        if (mainQuizStore?.serverQuestionsComputed.length || quizStore === "create") return

        const fillDataFromQuizById = async () => {
            if (id) return mainQuizStore?.setExistingQuestionsStates(+id)
        }

        fillDataFromQuizById()
    }, [])

    return (
        <div>
            <Input
                status={mainQuizStore?.description.length === 0 ? "error" : ''} // also check before sending REQUEST
                value={mainQuizStore?.description}
                addonBefore="Description"
                onChange={e => mainQuizStore?.setDescription(e.target.value)}
            />

            <Input
                // status={mainQuizStore?.successPercentCutoff % 10 ? "error" : ''} // error here, but before
                // there were no error - also beautiful functional - so need fix- todo ***

                // also check before sending REQUEST
                value={mainQuizStore?.successPercentCutoff}

                addonBefore="Success Percent Cutoff 0/100%"
                type="number"
                onChange={e => mainQuizStore?.setSuccessPercentCutoff(+e.target.value)}
            />
            {/* better to make select here */}

            {/* todo *** - make limit to questions addition (n <= 100) - throw error if more - or just use InputNumber ant design component
            todo *** - create hook for preloading - and test it in (n >= 1000 || 10000) case */}

            {mainQuizStore?.questionsState.length === 0 &&
                <>
                    <Input
                        addonBefore="How many questions?"
                        type="number"
                        onChange={e =>
                            mainQuizStore?.setQuestionsIdsArr(+e.target.value)
                        }
                    />
                    <Button icon={<PlusCircleOutlined />} onClick={
                        () => {
                            mainQuizStore?.setQuestionsStates(mainQuizStore?.questionsIdsArr)
                        }
                    }>
                        Add question cards
                    </Button>
                </>
            }

            {mainQuizStore?.questionsState.length !== 0 &&
                <>
                    <Input
                        addonBefore="How many questions?"
                        value={additionalQuestionsNum}
                        type="number"
                        onChange={(e) => {
                            setAdditionalQuestionsNum(+e.target.value)
                            mainQuizStore?.setAddQuestionsIdsArr(+e.target.value)
                        }}
                    />
                    <Button
                        className="mr-1"
                        icon={<PlusCircleOutlined />}
                        onClick={
                        () => {
                            mainQuizStore?.addToQuestionState()
                            setAdditionalQuestionsNum(0)
                        }
                    }>
                        Add more questions
                    </Button>

                    <Button className="mr-1" type="primary" icon={<SaveOutlined />}>Save</Button>
                    <Button className="mr-1" onClick={() => mainQuizStore?.deleteAllQuestions()}>Delete all questions</Button>
                    <Button icon={<PauseCircleOutlined />}>Save as draft</Button>
                    {/* before saving - check @same question sentences, @same choices in choice question - if error - notify - and don't POST
                    - also check success percent cutoff and description */}
                </>
            }

            {mainQuizStore?.serverQuestionsComputed?.map((q) =>
                <QuestionAddCard
                    mainQuizStore={mainQuizStore}
                    question_id={q.question_id}
                    key={q.question_id}
                    question={q}
                />
            )}
        </div>
    )
})

export default CreateOrEditQuiz;