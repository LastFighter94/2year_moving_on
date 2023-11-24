export const errorConsts = {
    noQuizzes: {
        type: 'fetchError',
        description: 'Error occurs when trying to fetch all quizzes!'
    },
    noQuiz: {
        type: 'fetchError',
        description: 'Error occurs when trying to fetch quiz by id!'
    },
    MinChoicesLength: {
        type: 'create-edit quiz error',
        description: 'There must be at least one choice in question! Error occurs when trying to delete last one choice.'
    },
    MaxChoicesLength: {
        type: 'create-edit quiz error',
        description: 'There can not be so many questions in choice-question! Change limitations (maxChoiceOptionsLength).'
    }
}