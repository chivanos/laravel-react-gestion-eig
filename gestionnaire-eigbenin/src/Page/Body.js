import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BodyOne from "./BodyOne";
import BodyTwo from "./BodyTwo"
import Bod from "./Bod";





export default class Body extends React.Component{


    render(){
        return(
            <>
                <section className="bd">
                    <div className="bodyone">
                        <BodyOne pagetitre={"Home"} linkone={<Link to={""} className="lie--tw">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="lie--tela bi bi-plus-circle-fill lie--tel" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                        </Link>}/>
                        <hr />
                    </div>
                    
                    <div className="">
                        <Bod corp={this.props.corp} />
                    </div>
                </section>
            </>
        )
    }

}