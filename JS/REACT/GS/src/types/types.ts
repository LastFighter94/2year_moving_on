import {CheckboxValueType} from "antd/es/checkbox/Group";
// отдача фронту типов с backend автоматически до того как проект собирается (одноразовая акция)

export interface IQuiz {
    description: string,
    questionList: IQ[],
    quizId: number,
    successPercentCutoff: number
}

export type IQ = IQuestionText | IQuestionChoice

export interface IUnifiedQuestion {
    question_id: number,
    textQuestion: IQuestionText,
    choiceQuestion: IQuestionChoice
}

export type IQuestionText = {
    question_id: number,
    sentence: string,
    type: "text",
    true_answer: string | number
}

export type IQuestionChoice = {
    question_id: number,
    sentence: string,
    type: "choice",
    choices: IChoice[],
}

export interface IChoice {
    text: string,
    is_correct: boolean
    id: number
}

export interface Answer {
    answer: string | number | CheckboxValueType[],
    question_id: string | number,
    sentence: string,
    type: string
}

export type getAnswerValue = (qAnswer: string | number | CheckboxValueType[],qId: string | number, type: string, sentence: string) => void

export type quizStore = "create" | "edit"

export type questionType = "text" | "choice"