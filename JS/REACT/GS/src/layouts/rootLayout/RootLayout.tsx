import React, {FC} from 'react';

import Header from "./header/Header"
import Footer from "./footer/Footer"
import PageContainer from "./pageContainer/PageContainer"

const RootLayout:FC = () => {
    return (
        <div>
            <Header/>
            <PageContainer/>
            <Footer/>
        </div>
    );
};

export default RootLayout;