import React from "react";
import HeaderPdfDw from "./HeaderPdfDw";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function HeaderPdfStandard(props){

    return(
    <>
        <main className="nvl--header">
            <HeaderPdfDw pdftitle={props.title} linkpdfdwc={props.linkpdfdwc}
            linkpdfdwb={props.linkpdfdwb}
            linkpdfdwem={props.linkpdfdwem}calendrier={"Calendrier"}
            emploie={"Liste de Presence"} bulletin={"Bulletin"}/>
        </main>
    </>
    )

}