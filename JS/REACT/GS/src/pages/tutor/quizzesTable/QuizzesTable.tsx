import {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import { Link } from "react-router-dom"
import ApiSample from "../../../API/ApiSample";
import {IQuiz} from "../../../types/types";
import { Table } from 'antd';
import {columns, QuizzesTableRow} from "../../../types/tableTypes";
import {fillQuizTableRows} from "../../../helpers/helpers";
import {quizZero} from "../../../API/quizZero";
// import classes from './QuizzesTable.module.scss'

const QuizzesTable:FC = observer(() => {
    const [quizzes, setQuizzes] = useState<IQuiz[]>()

    // получаем все тесты для того чтобы отрендерить таблицу для их редактирования
    useEffect(() => {
        ApiSample.getAllQuizzes(setQuizzes)
    }, [])

    // const rowData: QuizzesTableRow[] = fillQuizTableRows(quizzes) todo costyl
    const rowData: QuizzesTableRow[] = fillQuizTableRows([quizZero])

    console.log(quizzes)

    return (
        <div>
            <p>Table of quizzes with options</p>
            <Table columns={columns} pagination={{ pageSize: 3, hideOnSinglePage: true}} dataSource={rowData} />
            <p className="mt-1"><Link to="create-quiz">Create quiz</Link></p>
        </div>
    )
})

export default QuizzesTable;