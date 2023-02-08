import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function Header(props){

    return(
    <>
        <header className="nvl--header">
            <div className="nvl--h1">
                    <div className="nvl--logo">
                        <div className="lg--one">
                            <img src="../images/Eiglg.jpg" className="logo"/>
                        </div>
                        <div className="lg--two">
                            <h3 id="eb">EIG BENIN</h3>
                        </div>
                    </div>
            <hr className="hr" />
            </div >
            <div className="nvl--h2">
                <Link to="/" className="lie--one">
                    <h4 className="ligne--one">
                        <div className="ligne--one1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house-fill log" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.53a.5.5 0 0 1 .5.5z"/>
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg>
                        </div>
                        <div className="ligne--one2">
                            <span>Home</span>
                        </div>
                    </h4>
                </Link>
            <hr className="hr" />
            </div>
            <div className="nvl--h3">
                <h1>Filières</h1>
                <nav>
                    <ul>
                        <li className="li">
                            <Link to={"/developpementweb"} className="lie--two">Developpement Web</Link>
                        </li>
                        <li className="li">
                            <Link to={"/designgraphique"} className="lie--two">Design Graphique</Link>
                        </li >
                        <li className="li">
                            <Link to={"/webdesign"} className="lie--two">Web Design</Link>
                        </li>
                        <li className="li">
                            <Link to={"/montagevideo"} className="lie--two">Montage Cadrage Video</Link>
                        </li>
                    </ul>
                </nav>
            <hr className="hr" />
            </div>
            <div className="nvl--h4">
                <Link to={"/paramètre"} className="lie--two">Paramètre</Link>
            <hr className="hr" />
            </div>
            <div className="nvl--h5">
                <Footer slogan={"Nous créons l'Afrique créative"}/>
            </div>
        </header>
    </>
    )

}