import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";

import imagePng from "@/assets/image_png.png"
import imageJpg from "@/assets/image_jpg.jpg"
import ImageJSvg from "@/assets/image_svg.svg"

const testFN = (arg: string) => 'test'

export const App = () => {
    const [count, setCount] = useState(0)

    // testFN(44)

    const increment = () => setCount(prev => prev + 1)

    // if (__PLATFORM__ === 'desktop'){
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if (__PLATFORM__ === 'mobile'){
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    //
    // if (__ENV__ === 'development'){
    //     console.log('add devtools')
    // }

    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img src={imagePng} alt="" style={{width: "200px"}}/>
                <img src={imageJpg} alt="" style={{width: "200px"}}/>
                <br/>
                {imagePng}
            </div>

            <div>
                <ImageJSvg stroke={'red'} width={50} height={50} fill={'green'}/>
            </div>

            <Link to={'/about'}>About</Link><br/>
            <Link to={'/shop'}>Shop</Link><br/>

            <h1>{ count }</h1>
            <button className={classes.button} onClick={increment}><span>inc</span></button>
            <Outlet/>
            <br/>
            <br/>
            <br/>
            <About/>
        </div>
    );
};
