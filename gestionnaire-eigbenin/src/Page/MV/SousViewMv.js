import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


export default function SousViewMv() {

    let params = useParams();
    let [student, setStudent] = useState({});

    getStudentOnly(params.stid).then(p  => setStudent(p))


    if(student != null){

    return(
        <div className="cont">
            <div className="cont--one">
                <h1>N° Matricule: {student.id}</h1>
                <img src={student.imageMv} className="vi--one"/>
            </div>
            <div className="cont--two">
                <p>{student.nameMv}</p>
                <p>{student.firstNameMv}</p>
                <p>{student.oldMv} ans</p>
                <p>{student.emailMv}</p>
                <button href={`https://mailto:${student.telMv}`} className="btn btn-secondary">
                    Contacter
                </button>
            </div>
        </div>
    )

    }else{
        return(
            <div className="container mt-5 pt-4 mb-5">
            <div className="row">
                <div className="col-md-8 offset-md-2 card">
                    <div className="card-header alert alert-danger">
                        Desolé, aucun apprenant qui correspond a ces informations!
                    </div>
                </div>
            </div>

        </div>
        )
    }

}


function getStudentOnly(id){
    
    return axios.get(`http://localhost:8000/api/montagecadragevideo/${id}`)
    .then(response => {
        return response.data
    })
}




// function getStudent(id) {
//     const allStudents = JSON.parse(localStorage.getItem('studentmv'))
//     return allStudents.find( student => student.id == id  );

//     // return axios.get(`https://fakestoreapi.com/studentmv/${id}`)
//     // .then(response => {return response.data})
//     // .catch(error => {console.log('Internal error', error)});

// }