import axios, {AxiosError} from "axios";
import {IQuiz} from "../types/types";
// exemplary sample for API requests - will be edited

import {antdNotification} from "../helpers/notifications/antdNotification";
import {errorConsts as err} from "../helpers/errorConsts";
import {domain} from "../helpers/helpers";

export default class ApiSample {
    static async getAllQuizzes(setStateCallback: (arg0: IQuiz[]) => void ): Promise<void>{
        try {
            const response:IQuiz[] = (await axios.get(`${domain}/quiz`)).data
            setStateCallback(response)
        } catch (e) {
            if (e instanceof AxiosError) {
                antdNotification(err.noQuizzes.type, err.noQuizzes.description)
                console.error(e.message)
            }
        }
    }

    static async getQuizById(setStateCallback: (arg0: IQuiz) => void, id?:number | string): Promise<void>{
        try {
            const response:IQuiz = (await axios.get(`${domain}/quiz/${id}`)).data
            setStateCallback(response)
        } catch (e: unknown) {
            if (e instanceof AxiosError) {
                antdNotification(err.noQuiz.type, err.noQuiz.description)
                console.error(e.message)
            }
        }
    }
}