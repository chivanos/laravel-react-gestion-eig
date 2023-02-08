import React from "react";
import RowWd from './RowWd'



export default class ListWd extends React.Component{

    constructor(){
        super();

        this.state = {
            stu: []
        }
    }

    render(){
        return(
            <>
                <div className="card-body table--position">

                    <table className="table table-bordered table-striped tcolor">
                        <thead>
                            <tr>
                                <td> Image </td>
                                <td> N° Matricule </td>
                                <td> Nom </td>
                                <td> Prénoms </td>
                                <td> âge </td>
                                <td> Téléphone </td>
                                <td> Email </td>
                                <td> Filière</td>
                                <td> Action</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.students.map(student => <RowWd key={student.id} student={student} id={student.id}/>)
                        }
                        </tbody>
                    </table>

                </div>  
            </>
        )
    }
}


// fetch(`https://fakestoreapi.com/studentwd`)
// .then(response => response.json())
// .then({

// })