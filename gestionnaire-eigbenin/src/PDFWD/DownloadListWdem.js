import React from "react";
import { Link } from "react-router-dom";



export default class DownloadList extends React.Component{



    render(){
        return(
            <>
                <div className="card-body">
                    <div className="col-md-12">
                        <div className="card back--blue">
                            {/* <div className="card--child">
                                <fieldset className="">
                                    <legend className="">Calendrier PDF</legend>
                                    <figure className="">
                                        <img src="" className=""/>
                                        <figcaption className="">
                                            <button className="btn btn-lg btn-succuss">
                                                <a href="http://localhost:8000/api/create-pdf-emploie" 
                                                className="btn btn-lg btn-success style--a">
                                                    <h3 className="">Download</h3>  
                                                </a >  
                                            </button>      
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
                                                className="style--a">
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




// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;