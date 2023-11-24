import {IChoice, IQuestionChoice, IQuestionText} from "../../../types/types";

export const defaultTextQuestion = (qNumber: number): IQuestionText => {
    return {
        type: "text",
        sentence: "string",
        question_id: qNumber,
        true_answer: "string"
    }
}

export const defaultChoiceQuestion = (qNumber: number): IQuestionChoice => {
    return {
        sentence: "string",
        type: "choice",
        question_id: qNumber,
        choices: [
            {
                "text": "Choice-option text",
                "is_correct": true,
                "id": 1
            },
            {
                "text": "Choice-option text",
                "is_correct": false,
                "id": 2
            },
            {
                "text": "Choice-option text",
                "is_correct": false,
                "id": 3
            }
        ]
    }
}

export const defaultChoiceText = (newId: number): IChoice => {
    return {
        "text": "Choice-option text",
        "is_correct": false,
        "id": newId
    }
}
