import React from "react";
import { Link } from "react-router-dom";



export default class DownloadList extends React.Component{



    render(){
        return(
            <>
                <div className="card-body">
                    <div className="col-md-12">
                        <div className="card  back--blue">
                            {/* <div className="card--child">
                                <fieldset className="">
                                    <legend className="">Calendrier PDF</legend>
                                    <figure className="">
                                        <img src="" className=""/>
                                        <figcaption className="">
                                            <a href="http://localhost:8000/api/create-pdf-calendrier" 
                                            className="btn btn-lg btn-success style--a">
                                                <h3 className="">Download</h3>  
                                            </a >      
                                        </figcaption>  
                                    </figure>  
                                </fieldset>  
                            </div>   */}
                            <div className="card--child">
                                <fieldset className="">
                                    <legend className="ttt--style">Liste de Presence PDF</legend>
                                    <figure className="">
                                        <img src="../images/pdfone.png" className="image--pdf"/>
                                        <figcaption className="mt-3">
                                                <a href="http://localhost:8000/api/create-pdf-emploie" 
                                                className="btn btn-lg btn-dark back--btn style--a">
                                                    <h3 className="">Download</h3>  
                                                </a >    
                                        </figcaption>  
                                    </figure>  
                                </fieldset>  
                            </div>  
                            {/* <div className="card--child">
                                <fieldset className="">
                                    <legend className="">Bulletin PDF</legend>
                                    <figure className="">
                                        <img src="" className=""/>
                                        <figcaption className="">
                                            <a href="http://localhost:8000/api/create-pdf-bulletin" 
                                            className="btn btn-lg btn-success style--a">
                                                <h3 className="">Download</h3>  
                                            </a >      
                                        </figcaption>  
                                    </figure>  
                                </fieldset>  
                            </div>   */}
                        </div>  
                    </div>                      
                </div>  
            </>
        )
    }
}

// fetch(`https://fakestoreapi.com/studentmv`)
// .then(response => response.json())
// .then({

// })
