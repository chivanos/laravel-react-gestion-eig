import React from "react";
import { Link } from "react-router-dom";
import Header from "../Page/Header";
import BodyOne from "../Page/BodyOne";
import Bod from "../Page/Bod";
import DownloadListc from './DownloadListc';
import axios from "axios";
import HeaderPdfStandardDw from "../Page/HeaderPdfStandardDw";









export default class DocumentPdf extends React.Component{
    





        
    render(){

        return(
            <>
                <section className="nvl--style">
                    <div className="nvl--one">
                        <HeaderPdfStandardDw  title={"Pdf Developpeur Web"} linkpdfdwc={"/pdf-download-c"}
                        linkpdfdwb={"/pdf-download-b"} 
                        linkpdfdwem={"/pdf-download-em"}/>
                    </div>
                    <div className="nvl--two">
                        <section className="bd">
                            <div className="bodyone">
                                <BodyOne linkone={<Link to={""} className="lie--tw">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="lie--tela bi bi-plus-circle-fill lie--tel" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                </Link>} pagetitre={"Pdf Developpeur Web"}/>
                                <hr />
                            </div>
                            
                            <div className="nvl--body">
                                <div className="pos">
                                    <div className="pos--one">
                                        <Link to={"/developpementweb"} className="st--ii">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="pos--two">
                                        <Bod corp={<DownloadListc  />} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </>
        ) 
    }

}

