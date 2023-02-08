import React from "react";
import Tab from "./Tab"






export default class Affich extends React.Component{

        constructor(){
            super();

            this.state = {
                table: []
            }
        }

        componentDidMount(){
            fetch('http://localhost:8000/api/filieres')
            .then(res => res.json())
            .then(listtable => this.setState({table: listtable})
            )
        }






        render(){
                    
            return(
                <div>

                    {this.state.table.map(ind => {<Tab key={ind.id} table={ind} id={ind.id}/>})}

                </div>
            )
            
        }
}