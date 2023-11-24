import {FC, useEffect, useState} from "react";

import {observer} from "mobx-react-lite";
import {tests} from "./store/Tests"

const Tests:FC = observer(() => {
    const [testQuestions, setTestQuestions] = useState([])

    // обычно этот функционал используется для того, чтобы получить данные с сервера
    useEffect((): void => {
        // убираем React Strict Mode и console.log срабатывает 1 раз
        setTestQuestions([])
        console.log('use effect', testQuestions)
    }, []);

    return (
        <div>
            <h2 role="testing-test">Tests</h2>
            <p className="my-1">{tests.total}</p>
            <button className='p-1 mr-1 bg-white' onClick={() => tests.increment()}>+</button>
            <button className='p-1 bg-white' onClick={() => tests.decrement()}>-</button>
            <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at
                eveniet, fugit ipsam itaque iusto, laudantium necessitatibus numquam
                odit provident recusandae? Cupiditate debitis deserunt dolor, est natus
                quisquam sequi!
            </p>
        </div>
    )
})

export default Tests;