import React from "react";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import Body from "./Page/Body";
import { Link } from "react-router-dom";
import BodyTwo from "./Page/BodyTwo";



export default function Eig(){


    return(
        <section className="nvl--style">
            <div className="nvl--one">
                <Header />
            </div>
            <div className="nvl--two" >
                <Body corp={<BodyTwo />}/>
            </div>
        </section>
    )

}