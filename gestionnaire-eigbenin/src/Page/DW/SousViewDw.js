import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


export default function SousViewDw() {
    let params = useParams();

    let [student, setStudent] = useState({});

    getStudentOnly(params.std).then(p => setStudent(p));

    if(student != null){

    return(
        <div className="cont">
            <div className="cont--two">
                <h1>N° Matricule: {student.id}</h1>
                <img src={student.imageDw} className="vi--one"/>
            </div>
            <div className="cont--two">
                <p>{student.nameDw}</p>
                <p>{student.firstNameDw}</p>
                <p>{student.oldDw} ans</p>
                <p>{student.emailDw}</p>
                <button href={`https://mailto:${student.telDw}`} className="btn btn-secondary">
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
                        Desolé, il n'y a aucun apprenant type!
                    </div>
                </div>
            </div>

        </div>
        )
    }

}

function getStudentOnly(id){

    return axios.get(`http://localhost:8000/api/developpementweb/${id}`)
    .then(response => {
        return response.data
    });

}


// function getStudent(id) {
//     const allStudents = JSON.parse(localStorage.getItem('studentdw'))
//     return allStudents.find( student => student.id == id  );

//     // return axios.get(`https://fakestoreapi.com/studentdw/${id}`)
//     // .then(response => {return response.data})
//     // .catch(error => {console.log('Internal error', error)});

// }

