import {IQuiz} from "../types/types";

export const quizZero: IQuiz = {
    description: "Description",
    quizId: 0,
    successPercentCutoff: 75,
    questionList: [
        {
            "question_id": 1,
            "sentence": "150+150?",
            "type": "text",
            "true_answer": "300"
        },
        {
            "question_id": 2,
            "sentence": "Ancient civilisations are",
            "type": "choice",
            "choices": [
                {
                    "text": "Mycenae",
                    "is_correct": true,
                    "id": 1
                },
                {
                    "text": "Prussia",
                    "is_correct": false,
                    "id": 2
                },
                {
                    "text": "Rome",
                    "is_correct": true,
                    "id": 3
                },
                {
                    "text": "Brazil",
                    "is_correct": false,
                    "id": 4
                },
                {
                    "text": "Sparta",
                    "is_correct": true,
                    "id": 5
                }
            ]
        },
        {
            "question_id": 3,
            "sentence": "Who was the nephew of Caesar",
            "type": "choice",
            "choices": [
                {
                    "text": "Antonius",
                    "is_correct": false,
                    "id": 1
                },
                {
                    "text": "Aurelius",
                    "is_correct": false,
                    "id": 2
                },
                {
                    "text": "Octavius",
                    "is_correct": true,
                    "id": 3
                }
            ]
        }
    ]
}