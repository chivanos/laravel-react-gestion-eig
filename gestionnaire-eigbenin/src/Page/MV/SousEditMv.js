import React from "react";
import { useParams, Link } from "react-router-dom";


export default function SousEditMv(){
    let params = useParams();
    let student = getStudent(params.ii);

        return(
            <main className="">
                    
                    
                    <div className="edit--one">
                            {/* <h2>Edit details student  { student.product_edit_id }</h2> */}

                            {
                                student.success == true ?
                                    <div>
                                        Vous avez bien modifier les informations de l'apprenant!
                                    </div>
                                    :
                                    ''
                            }
                            <div className="edit--o1">
                                <img src={student.imageMv} className="img--ch" />
                            </div>
                            <form method="post" action="" onSubmit={(e) => {}}>
                                <div className="mt-3">
                                    <input onChange={(e) =>  {}} type={'text'} className="form-control" Defaultvalue={student.imageMv} placeholder="Image" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={(e) =>  {}} type={'text'} className="form-control"  Defaultvalue={student.nameMv} placeholder="Name" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={(e) =>  {}} type={'text'}  className="form-control"  Defaultvalue={student.firstNameMv} placeholder="FirstName" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={(e) =>  {}} type={'number'} min="1" className="form-control"  Defaultvalue={student.oldMv} placeholder="Age" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={(e) =>  {}} type={'text'} min="1" max={1500} className="form-control"  Defaultvalue={student.filiereMv} placeholder="Filière" />
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
    const allStudent = JSON.parse(localStorage.getItem('studentmv'))
    return allStudent.find(student => student.id == id);
}
let new_array = [1, 3, 4].filter(item => {

    // if(item.id == id ){
    //     item.designation = n_designation;
    //     item.prix = n_prix;
    //     return item;
    // }
    return item;
})