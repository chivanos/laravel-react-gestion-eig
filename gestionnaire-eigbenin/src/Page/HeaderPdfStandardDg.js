import React from "react";
import HeaderPdfDg from "./HeaderPdfDg";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function HeaderPdfStandard(props){

    return(
    <>
        <main className="nvl--header">
            <HeaderPdfDg pdftitle={props.title}
            linkpdfdgc={props.linkpdfdgc}
            linkpdfdgb={props.linkpdfdgb}
            linkpdfdgem={props.linkpdfdgem} calendrier={"Calendrier"}
            emploie={"Liste de Presence"} bulletin={"Bulletin"}/>
        </main>
    </>
    )

}