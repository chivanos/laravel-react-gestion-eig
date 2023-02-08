import React from "react";
import HeaderPdfMv from "./HeaderPdfMv";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function HeaderPdfStandard(props){

    return(
    <>
        <main className="nvl--header">
            <HeaderPdfMv pdftitle={props.title} linkpdfmvc={props.linkpdfmvc}
            linkpdfmvb={props.linkpdfmvb}
            linkpdfmvem={props.linkpdfmvem}
            calendrier={"Calendrier"}
            emploie={"Liste de Presence"} bulletin={"Bulletin"}/>
        </main>
    </>
    )

}