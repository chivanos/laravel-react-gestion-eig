import React from "react";
import { Link } from "react-router-dom";
import Authentification from "./Authentification";
import { Button, Spinner } from "react-bootstrap";
import { useState } from "react";

export default function Bienvenue(){

    const [myObject,setMyObject] = useState({
        welc: 'Admin Welcome',
        start: 'Start Session to Connect....',
        info:'Votre Gestionnaire Eig Benin...',
        startSession: 'Start Session',
        loading:'Loading',
        isLoading: true,
    })
    
    function handleSubmit(e)
    {
        e.preventDefault();
        setTimeout(() => {
            setMyObject(prev => {
                return {
                    ...prev,
                    welc: '',
                    start: '',
                    info:'Votre Gestionnaire Eig Benin...',
                    startSession: '',
                    loading:'Loading',
                    isLoading: false,
                }
            })
        },1000)
    }



    return(
        <section className="sect--c">
            <br/><br/><br/><br/>
            <div className="col-sm-6 offset-sm-3 start--back">
                <br/><br/><br/><br/><br/><br/>
                <div className="col-sm-11 offset-sm-3">
                    <h1>Admin Welcome!</h1>
                    <br/><br/>
                    <form onSubmit={handleSubmit}>
                        <Link to="/registeredme" className="col-sm-9"
                            type="submit">
                            <Button className="col-sm-8">
                                Start Session
                            </Button>
                        </Link>
                    </form>
                    <br/><br/>
                    <span  className="offset-sm-3"><h6>{myObject.start}</h6></span>
                </div>
                <br/><br/>
            </div>
        </section>
    )
    

}



// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';

// function ButtonExample() {
//   return (
//     <>
    //   <Button variant="primary" disabled>
    //     <Spinner
    //       as="span"
    //       animation="border"
    //       size="sm"
    //       role="status"
    //       aria-hidden="true"
    //     />
    //     <span className="visually-hidden">Loading...</span>
    //   </Button>{' '}
    //   <Button variant="primary" disabled>
    //     <Spinner
    //       as="span"
    //       animation="grow"
    //       size="sm"
    //       role="status"
    //       aria-hidden="true"
    //     />
    //     Loading...
    //   </Button>
//     </>
//   );
// }

// export default ButtonExample;


// import Spinner from 'react-bootstrap/Spinner';

// function VariantsExample() {
//   return (
//     <>
//       <Spinner animation="border" variant="primary" />
//       <Spinner animation="border" variant="secondary" />
//       <Spinner animation="border" variant="success" />
//       <Spinner animation="border" variant="danger" />
//       <Spinner animation="border" variant="warning" />
//       <Spinner animation="border" variant="info" />
//       <Spinner animation="border" variant="light" />
//       <Spinner animation="border" variant="dark" />
//       <Spinner animation="grow" variant="primary" />
//       <Spinner animation="grow" variant="secondary" />
//       <Spinner animation="grow" variant="success" />
//       <Spinner animation="grow" variant="danger" />
//       <Spinner animation="grow" variant="warning" />
//       <Spinner animation="grow" variant="info" />
//       <Spinner animation="grow" variant="light" />
//       <Spinner animation="grow" variant="dark" />
//     </>
//   );
// }

// export default VariantsExample;


// import Spinner from 'react-bootstrap/Spinner';

// function SizesExample() {
//   return (
//     <>
//       <Spinner animation="border" size="sm" />
//       <Spinner animation="border" />
//       <Spinner animation="grow" size="sm" />
//       <Spinner animation="grow" />
//     </>
//   );
// }

// // export default SizesExample;


// import Spinner from 'react-bootstrap/Spinner';

// function BasicExample() {
//   return (
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//   );
// }

// export default BasicExample;




// import Spinner from 'react-bootstrap/Spinner';

// function GrowExample() {
//   return <Spinner animation="grow" />;
// }

// export default GrowExample;


// import Spinner from 'react-bootstrap/Spinner';

// function BorderExample() {
//   return <Spinner animation="border" />;
// }

// export default BorderExample;

// import Spinner from 'react-bootstrap/Spinner';

// function BasicExample() {
//   return (
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//   );
// }

// export default BasicExample;