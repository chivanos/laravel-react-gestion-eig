import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";





export default function Register()
{

    const [pseudo,setPseudo] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [status,setStatus] = useState(false);
    const [error,setError] = useState(null);

    // const loading = {<Button variant='primary' disabled><Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true'/>};


    const history = new useNavigate()
    
    async function handleSignUp(e)
    {
        e.preventDefault();

        if(pseudo != '' && email != '' &&
        password != '')
        {


            let items = {pseudo, email,password}
            console.warn(items);
            let result = await fetch("http://localhost:8000/api/registerdgpedagogique",{
                method: 'POST',
                body: JSON.stringify(items),
                headers: {
                    "content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            result = await result.json();
            console.warn("result",result);
            localStorage.setItem("user", JSON.stringify(result));
            history.push('/eighome');
    
            setTimeout(() => {
                setPseudo(() => [""]);
                setEmail(() => [""]);
                setPassword(() => [""]);
                setStatus(true);
                setError(null)
            },2000);


        }
        else
        {
            setTimeout(() => {
                setTimeout(() => {
                    setPseudo(() => [""]);
                    setEmail(() => [""]);
                    setPassword(() => [""]);
                    setError("Vous avez un champ manquant, Veuillez le remplir!")
                },2000);
            },2000);
        }



    }
        return(
            <section className="sect--c">
                <br/><br/>
                <div className="col-sm-6 offset-sm-3 start--back">
                    <br/>
                    <div className="col-sm-6 offset-sm-3">
                        <h1 className="offset-sm-2">Sign Up</h1>
                        <h6 className="offset-sm-2">{error}</h6>
                        <br/><br/>
                        <form onSubmit={handleSignUp}>
                        <input type="text" value={pseudo} onChange={(e)=>setPseudo(e.target.value)} className="form-control" placeholder="pseudo"/>
                        <br/>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
                        <br/>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
                        <br/>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                        <br/>
                        {
                        status === true? 
                        <h6 className="offset-sm-2">
                            Enregistrement réussie!  <br/>
                        </h6>
                        : ''
                        }
                        <Link to="/loginme" className="st--ii offset-sm-6"><u>Connect there</u></Link>
                        <br/><br/>
                        <span  className="">Start Session to Register...</span>
                    </div>
                    <br/>
                </div>
            </section>
        );
    // }
}
{/* <Link to="/registeredme" className="col-sm-9" type="submit">Login</Link> */}