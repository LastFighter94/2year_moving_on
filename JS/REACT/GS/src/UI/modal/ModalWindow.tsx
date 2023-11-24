import React, {FC, useState} from "react";
import {observer} from "mobx-react-lite";
import { Modal } from 'antd';
// import classes from './ModalWindow.module.scss'
interface IProps {
    title: string,
    isOpen: boolean,
    setIsModalOpen: (arg: boolean) => void,
    children: any // пока оставляю так
}

const ModalWindow:FC<IProps> = observer(({title, isOpen, setIsModalOpen, children}) => {
    const closeModalWindow = () => {
        // some custom actions, scripts, e.t.c
        setIsModalOpen(false)
    }

    return (
        <div>
            {/*<Modal title={title} open={isOpen} onCancel={() => setIsModalOpen(false)} onOk={() => setIsModalOpen(false)}>*/}
            <Modal title={title} open={isOpen} onCancel={closeModalWindow} onOk={closeModalWindow}>
                {children}
            </Modal>
        </div>
    )
})

export default ModalWindow;