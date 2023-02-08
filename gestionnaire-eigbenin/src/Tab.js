import React from "react";

export default class Tab extends React.Component{

    constructor(){
        super();

        this.state = {
            table: {}
        }
    }

    componentDidMount(){
        this.setState({
            table: this.props.table
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.table.id}</h1>
                <p>{this.state.table.description}</p>
            </div>
        );
    }
}

