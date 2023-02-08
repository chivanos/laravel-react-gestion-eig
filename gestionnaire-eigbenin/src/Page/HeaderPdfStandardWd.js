import React from "react";
import HeaderPdfWd from "./HeaderPdfWd";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function HeaderPdfStandard(props){

    return(
    <>
        <main className="nvl--header">
            <HeaderPdfWd pdftitle={props.title}
            linkpdfwdc={props.linkpdfwdc}
            linkpdfwdb={props.linkpdfwdb}
            linkpdfwdem={props.linkpdfwdem} calendrier={"Calendrier"}
            emploie={"Liste de Presence"} bulletin={"Bulletin"}/>
        </main>
    </>
    )

}