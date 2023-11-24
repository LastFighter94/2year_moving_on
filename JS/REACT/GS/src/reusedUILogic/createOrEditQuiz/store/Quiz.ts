import {action, makeAutoObservable} from "mobx";
import { makePersistable } from 'mobx-persist-store';
import {IQ, IUnifiedQuestion, questionType} from "../../../types/types";
import {arrFromNumber} from "../../../helpers/helpers";
import {antdNotification} from "../../../helpers/notifications/antdNotification";
import {errorConsts} from "../../../helpers/errorConsts";
import axios from "axios";
import {domain} from "../../../helpers/helpers";
import {defaultChoiceQuestion, defaultChoiceText, defaultTextQuestion} from "./defaultQuizQuestion";
import {quizZero} from "../../../API/quizZero";

class Quiz {
    questionsIdsArr: number[] = []
    addQuestionsIdsArr: number[] = []

    maxChoiceOptionsLength: number = 5

    description: string = 'Description'
    successPercentCutoff: number = 0

    questionsState: IUnifiedQuestion[] = []
    serverQuestionsState: IQ[] = []

    constructor() {
        makeAutoObservable(this) // параметром принимает контекст текущего класса
        // makePersistable(this, { name: 'Quiz Store', properties: ['defaultQuestionsState', 'description'], storage: window.localStorage });
    }

    setDescription(payload: string){this.description = payload}
    setSuccessPercentCutoff(payload: number){this.successPercentCutoff = payload}

    // async setExistingQuestionsStates(id: number){
    setExistingQuestionsStates(id: number){
        // ОСТАНОВИЛСЯ ЗДЕСЬ
        // await axios.get(`${domain}/quiz/${id}`).then(
        //     action("fetchSuccess", res => {

                // todo - костыльчик - id's - ждем Колю
                let res: {data: any} = {data: 0}
                res.data = quizZero

                this.successPercentCutoff = res.data.successPercentCutoff
                this.description = res.data.description

                this.setQuestionsIdsArr(res.data.questionList.length)
                this.setQuestionsStates(this.questionsIdsArr)

                let questionList = res.data.questionList
                this.serverQuestionsState = questionList

                this.questionsState = this.questionsState.map(q => {
                    let updatedQ = questionList.find((serverQ: IQ) => serverQ.question_id === q.question_id)
                    if (updatedQ.type === 'text'){
                        q.textQuestion = updatedQ
                    }
                    if (updatedQ.type === 'choice'){
                        q.choiceQuestion = updatedQ
                    }
                    return q
                })

                console.log(JSON.parse(JSON.stringify(this.questionsState)))
            // }),
            // action("fetchError", error => {
            //     // ant notification
            //     console.log(error, 'ERROR!')
            // })
        // )

        // console.log(JSON.parse(JSON.stringify(this.questionsState)), 'question state from quiz by id')
    }

    setQuestionsIdsArr(number: number){this.questionsIdsArr = arrFromNumber(number)}

    setAddQuestionsIdsArr(number: number){
        this.addQuestionsIdsArr = [] // resetting state of IdsArr
        if (number <= 0) return // todo *** - ant notification
        let lastQuestionsId = this.questionsIdsArr?.slice(-1)[0]
        this.addQuestionsIdsArr = arrFromNumber(number).map(item => item + lastQuestionsId)
    }

    addToQuestionState(){
        if (this.addQuestionsIdsArr.length <= 0) return
        this.questionsIdsArr = this.questionsIdsArr.concat(this.addQuestionsIdsArr)
        this.setQuestionsStates(this.addQuestionsIdsArr)
        this.addQuestionsIdsArr = [] // resetting state of IdsArr
    }

    setQuestionsStates(questionsNumber: number[]){
        if (questionsNumber.length <= 0) return // todo *** - ant notification
        
        questionsNumber.forEach(n => {
            let defaultQuestion = {
                question_id: n,
                textQuestion: defaultTextQuestion(n),
                choiceQuestion: defaultChoiceQuestion(n)
            }

            this.questionsState.push(defaultQuestion)
            this.serverQuestionsState.push(defaultTextQuestion(n))
        })
    }
    
    changeSentenceState(question_id: number, payload: string){
        this.questionsState = this.questionsState.map(q => {
            if (q.question_id === question_id){
                q.textQuestion = {...q.textQuestion, sentence: payload}
                q.choiceQuestion = {...q.choiceQuestion, sentence: payload}
                return q
            }
            return q
        })
        this.serverQuestionsState = this.serverQuestionsComputed.map(q => {
            if (q.question_id === question_id) return {...q, sentence: payload}
            return q
        })
    }

    changeTrueAnswerOfQuestionTextState(question_id: number, payload: string){
        this.questionsState = this.questionsState.map(q => {
            if (q.question_id === question_id){
                q.textQuestion = {...q.textQuestion, true_answer: payload}
                return q
            }
            return q
        })
        this.changeServerQuestionsState(question_id, "text")
    }

    changeChoiceTextInChoiceQuestion(question_id: number, choice_text: string, choice_id?: number) {
        this.questionsState = this.questionsState.map(q => {
            if (q.question_id === question_id){
                q.choiceQuestion.choices = q.choiceQuestion.choices.map(c => {
                    if (c.id === choice_id) return {...c, text: choice_text}
                    return c
                })
            }
            return q
        })
        this.changeServerQuestionsState(question_id, "choice")
    }

    changeCheckedValueInChoiceQuestion(question_id: number, checked_value: boolean, choice_id?: number){
        this.questionsState = this.questionsState.map(q => {
            if (q.question_id === question_id) {
                q.choiceQuestion.choices = q.choiceQuestion.choices.map(c => {
                    if (c.id === choice_id) return {...c, is_correct: checked_value}
                    return c
                })
            }
            return q
        })
        this.changeServerQuestionsState(question_id, "choice")
    }

    deleteChoiceInChoiceQuestion(question_id: number, choice_id?: number){
        this.questionsState = this.questionsState.map(q => {
            if (q.question_id === question_id) {
                if (q.choiceQuestion.choices.length === 1) {
                    antdNotification(errorConsts.MinChoicesLength.type, errorConsts.MinChoicesLength.description)
                    return q
                }
                q.choiceQuestion.choices = q.choiceQuestion.choices?.filter(c => c.id !== choice_id)
            }
            return q
        })
        this.changeServerQuestionsState(question_id, "choice")
    }

    addChoiceInChoiceQuestion(question_id: number){
        this.questionsState = this.questionsState.map(q => {
            if (q.question_id === question_id) {
                let choicesLength = q.choiceQuestion.choices.length
                let lastChoiceOptionId =  q.choiceQuestion.choices.slice(-1)[0].id // arr[arr.length - 1]

                if (choicesLength > this.maxChoiceOptionsLength - 1){
                    antdNotification(errorConsts.MaxChoicesLength.type, errorConsts.MaxChoicesLength.description)
                    return q
                }
                q.choiceQuestion.choices.push(defaultChoiceText(lastChoiceOptionId + 1))
            }
            return q
        })
        this.changeServerQuestionsState(question_id, "choice")
    }

    changeServerQuestionsState(question_id: number, type: questionType){
        let question = this.questionsState.find(q => q.question_id === question_id)

        if (type === 'text') {
            this.serverQuestionsState = this.serverQuestionsState.map(q => {
                if (q.question_id === question_id && question) return question.textQuestion
                return q
            })
        }

        if (type === 'choice') {
            this.serverQuestionsState = this.serverQuestionsState.map(q => {
                if (q.question_id === question_id && question) return question.choiceQuestion
                return q
            })
        }
    }

    deleteQuestion(question_id: number | string){
        this.serverQuestionsState = this.serverQuestionsState.filter(q => q.question_id !== question_id)
        this.questionsState = this.questionsState.filter(q => q.question_id !== question_id)
        this.questionsIdsArr = this.questionsIdsArr.filter(id => id !== question_id)
    }

    deleteAllQuestions(){
        this.serverQuestionsState = []
        this.questionsState = []

        this.addQuestionsIdsArr = []
        this.questionsIdsArr = []
    }

    get serverQuestionsComputed(){
        return this.serverQuestionsState
    }
}
const createQuizStore = new Quiz()
const editQuizStore = new Quiz()

export {createQuizStore, editQuizStore, Quiz};
