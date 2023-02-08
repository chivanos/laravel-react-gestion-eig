import React from "react"



export default function Test(){

    const [data,setData] = React.useState([])
    
    React.useEffect(() => {
        allGet();
    },[])
    
    async function allGet(){
        await fetch('http://localhost:8000/api/all/get/product')
        .then(p => p = p.json())
        .then(result => {return setData(result)})
    }

    return(
        <>
            <div className="col-sm-12 offset-4 py-6 text-center">
                {
                    data.map((data) => {
                        <div className="row">                         
                            <img src={`${data.file}`} title="your picture"/>
                            <h3> {data.title} </h3>
                        </div>
                    })
                }
            </div>
        </>
    );
}