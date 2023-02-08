import React from "react";
import Rowwdpro from './Rowwdpro'



export default class Listwdpro extends React.Component{

    constructor(){
        super();

        this.state = {
            promotion: []
        }
    }

    render(){
        return(
            <>
                <div className="card-body">

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <td> # </td>
                                <td> Promotion </td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.promotions.map(promotion => <Rowwdpro key={promotion.id} promotion={promotion} id={promotion.id}/>)
                        }
                        </tbody>
                    </table>

                </div>  
            </>
        )
    }
}


// fetch(`/api/wdpromotions`)
// .then(response => response.json())
// .then({

// })