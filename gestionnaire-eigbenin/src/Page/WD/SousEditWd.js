import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SousAjoutDg(){

    let params = useParams();
    let student = getStudent(params.iw);

    const[stud, setStud] = React.useState({
        idwd: params.iw,
        nameWd: '',
        firstNameWd: '',
        emailWd: '',
        telWd: '',
        oldWd: '',
        filiereWd: '',
        imageWd: '',
        successWd: false
    })
    
    function handleChange(e){
        const {name, value, type, checked} = e.target;

            setStud(precedent => {
                return{
                    ...precedent,
                    [name]: type === 'checkbox' ? checked : value
                }
            })

    }


    function handleSubmit(e){
        e.preventDefault();

        
        if(stud.nameWd != '' && stud.firstNameWd != '' &&
        stud.oldWd != '' && stud.emailWd != '' && stud.telWd != ''
        && stud.filiereWd != '' && stud.imageWd != '')
        {
            axios.post(`http://localhost:8000/designweb/new`,{
                id: params.iw,
                nameWd: stud.nameWd,
                firstNameWd: stud.firstNameWd,
                emailWd: stud.emailWd,
                telWd: stud.telWd,
                oldWd: stud.oldWd,
                filiereWd: stud.filiereWd,
                imageWd: stud.imageWd,
            })
            .then(response => {
                console.log(response)
                setStud(precedent => {
                    return{
                        ...precedent,
                        [precedent.nameWd]: '',
                        [precedent.firstNameWd]: '',
                        [precedent.emailWd]: '',
                        [precedent.telWd]: '',
                        [precedent.oldWd]: '',
                        [precedent.filiereWd]: '',
                        [precedent.imageWd]: '',
                        [precedent.successWd]: true
        
                    }
                });
            })
        
        }
        else{
            setStud(precedent => {
                return{
                    ...precedent,
                    [precedent.nameWd]: '',
                    [precedent.firstNameWd]: '',
                    [precedent.emailWd]: '',
                    [precedent.telWd]: '',
                    [precedent.oldWd]: '',
                    [precedent.filiereWd]: '',
                    [precedent.imageWd]: '',
                    [precedent.successWd]: false
                }
            });
        }
    }


    // useEffect((e) => {

    //     return handleSubmit(e);


    
    // // const local = localStorage.getItem('studentwd');

    // // if(local != null){
    // //     for(let i = 0; i < (len-1); i++){
    // //         deleteStudent = deleteStudent.pop();
    // //     }
    // //     deleteStudent = stud;
    // // }
    // // localStorage.setItem('studentwd', JSON.stringify(deleteStudent));


    // }, [])

        





        return(
            <main className="">
                    

                    <div className="edit--one">
                            {/* <h2>Edit detals student  { student.product_edit_id }</h2> */}


                            {
                                stud.successWd == true ?
                                    <div>
                                        Vous avez bien modifier les informations de l'apprenant!
                                    </div>
                                    :
                                    ''
                            }

                            <div className="edit--o1">
                                <img src={student.imageWd} className="img--ch" />
                            </div>
                            <form method="post" action="" onSubmit={handleSubmit}>
                                <div className="mt-3">
                                    <input onChange={handleChange}  
                                    type="text" name="imageWd" className="form-control" value={stud.imageWd ?? ''}   placeholder="image" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type="text" name="nameWd" className="form-control"  value={stud.nameWd ?? ''}  placeholder="name" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type="text" name="firstNameWd"  className="form-control"  value={stud.firstNameWd ?? ''}  placeholder="firstname" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type="email" name="emailWd" className="form-control"  value={stud.emailWd ?? ''}  placeholder="email" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type="tel" name="telWd" className="form-control"  value={stud.telWd ?? ''}  placeholder="N°mobile" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type="number" name="oldWd" min="1" className="form-control"  value={stud.oldWd ?? ''}  placeholder="old" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type="text" name="filiereWd" min="1" max={1500} className="form-control"  value={stud.filiereWd ?? ''}  placeholder="filiere" />
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-primary">Mettre à jour</button>
                                </div>

                            </form>
                        </div>
            </main>
        );
}


function getStudent(id) {
    // fetch(`http://localhost:8000/designweb/show/${id}`)
    // .then(res => {
    //     return res.json();
    // })
    // .then(result => {
    //     return { stud:result} 
    // })

    const find = axios.get(`http://localhost:8000/designweb/show/${id}`);
    return find;
}












// function getStudent(id) {
//     const allStudent = JSON.parse(localStorage.getItem('studentwd'))
//     return allStudent.find(student => student.id == id);
// }
// let new_array = [1, 3, 4].filter(item => {

//     // if(item.id == id ){
//     //     item.designation = n_designation;
//     //     item.prix = n_prix;
//     //     return item;
//     // }
//     return item;
// })

