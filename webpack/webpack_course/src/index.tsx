// import {calc} from "./test";
//
// console.log('HELLO WORLD !!!!')
// console.log(calc(1,25))

// react

import {createRoot} from "react-dom/client";
import {App} from "./components/App/App";
// import React from 'react';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "./pages/about/About.lazy";
import {Shop} from "./pages/shop";
import {Suspense} from "react";


const root = document.getElementById('root')

if (!root){
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
                // element: <About/>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><Shop/></Suspense>
                // element: <Shop/>
            }
        ]
    }
])

container.render(<RouterProvider router={router}/>)

// vue

// import AppVue from "./components/AppVue.vue";
//
// import { createApp } from 'vue'
//
// createApp(AppVue).mount('#app')
