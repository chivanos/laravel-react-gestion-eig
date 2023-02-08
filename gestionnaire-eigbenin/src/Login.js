import { useState } from "react";
import useHistory from 'react-router-dom';


export default function Login()
{
    const[pseudo,setPseudo] = useState("");
    // const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    // const history = useHistory();

    
    async function handleSignIn()
    {
        let items = {pseudo,password};
        console.warn(items);
        let result = await fetch("http://localhost:8000/api/register",{
            method: 'POST',
            body: JSON.stringify(items),
            headers: {
                "content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        result = await result.json();
        // localStorage.setItem("user", JSON.stringify(result));
        // history.push('/loginme')
        // console.warn("result",result);
    }
    return(
        <section className="sect--c">
            <br/><br/><br/><br/>
            <div className="col-sm-6 offset-sm-3 start--back">
                <br/><br/><br/>
                <div className="col-sm-6 offset-sm-3">
                    <h1 className="offset-sm-2">Sign In</h1>
                    <br/><br/>
                    <form onSubmit={handleSignIn}>
                        <input type="text" value={pseudo} onChange={(e)=>setPseudo(e.target.value)} className="form-control" placeholder="pseudo"/>
                        <br/>
                        {/* <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
                        <br/> */}
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
                        <br/>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                    <br/><br/>
                    <span  className="">Start Session to Sign In....</span>
                </div>
                <br/>
            </div>
        </section>
    );
}
