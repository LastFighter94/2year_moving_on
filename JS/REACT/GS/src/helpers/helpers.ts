import {QuizzesTableRow} from "../types/tableTypes";
import {IQuiz} from "../types/types";

export const fillQuizTableRows = (quizzes: IQuiz[] | undefined) => {
    const rowData: QuizzesTableRow[] = [];

    quizzes?.forEach((quiz: IQuiz, index: number) => {
        rowData.push({
            key: quiz.description,
            description: quiz.description,
            id: index,
            successPercentCutoff: quiz.successPercentCutoff,
            questionsLength: quiz.questionList.length,
            tags: ['python', 'nice']
        })
    })

    return rowData
}

export const arrFromNumber = (number: number, startsWithZero: boolean = false) => {
    // (5) => [1,2,3,4,5], (3) => [1, 2, 3] e.t.c # -> arrFromNumber
    // can return array - which starts from zero
    if (startsWithZero) Array.from({length: number}, (v, k) => k)
    return Array.from({length: number}, (v, k) => k + 1)
}

export const domain: string = 'http://0.0.0.0:8080';