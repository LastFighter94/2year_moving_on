import React from 'react';

import {RouterProvider} from "react-router-dom";
import {router} from "./router"

import './assets/App.scss';

import { ConfigProvider } from 'antd';

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#27c7ba',
                },
            }}
        >
            <RouterProvider router={router}/>
            {/*test text for React Test Library*/}
        </ConfigProvider>
    );
}

export default App;
