import {FC} from "react";

import {observer} from "mobx-react-lite";

// import classes from './QuizzesOptions.module.scss'

import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Card, Space } from 'antd';

import { Link } from "react-router-dom"
import * as React from "react";

const QuizzesOptions:FC = observer(() => {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    interface subjectValues {
        label: string,
        key: string,
        icon?: React.ReactNode
    }

    const items: subjectValues[] = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <UserOutlined />,
        },
    ];

    const subjects = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div>
            <Dropdown menu={subjects}>
                <Button>
                        Choose subject (language or something else)
                        <DownOutlined />
                </Button>
            </Dropdown>

            <p>After choosing subject or something else - tests options will render (tests will be classified by "level" and other params)</p>

            <Space direction="vertical" size={16}>
                <Card size="small" title="Subject or something else">

                    <h3>High level</h3>
                    <p><Link to="quiz-page/0">quiz 0</Link></p>
                    <p><Link to="quiz-page/1">quiz 1</Link></p>
                    <p><Link to="quiz-page/2">quiz 2</Link></p>
                    <p><Link to="quiz-page/3">quiz 3</Link></p>
                    <h3>Low level</h3>
                    <p><Link to="quiz-page/11">quiz 11</Link></p>
                    <p><Link to="quiz-page/22">quiz 22</Link></p>
                    <p><Link to="quiz-page/33">quiz 33</Link></p>

                    <p className="mt-1">In future - better to render table, not card (with marks - solved, result of solution, not finished e.t.c)</p>
                </Card>
            </Space>
        </div>
    )
})

export default QuizzesOptions;