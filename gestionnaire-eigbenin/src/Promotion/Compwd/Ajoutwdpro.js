import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from "axios"



export default class Ajoutwdpro extends React.Component {

    constructor() {
        super();

        this.state = {
            id: null,
            promotionwd: '',
            successwd: false
        }

    }

    handleChangepro(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    getId(){
        return Math.ceil(Math.random(1, 1000000) * 100000000);
    }

    handleSubmitpro(e){
        e.preventDefault();
        
        if(this.state.promotionwd != ''){
            
            const wdpromotion = {
                id: this.getId(),
                promotionwd: this.state.promotionwd
            }

            axios.post(`/api/wdpromotions`, { wdpromotion })
            .then(res => {
            })

            // const all_apre = localStorage.getItem('dwstudentone');
            // let new_apre = [];

            // if(all_apre != null){
            //     new_apre = [...JSON.parse(all_apre), apre]
            // }
            // else{
            //     new_apre = [apre]
            // }
            // localStorage.setItem('dwstudentone', JSON.stringify(new_apre))

            // this.setState({
            //     promotionwd: '',
            //     successwd: true
            // })

            
        }
        
    }


    render(){
        return(
            <div className="contain">
                <Header lienone={<Link to="/wdpro" className="lien--oo" >Retour</Link>}/>
                <div className="body co bod">
                <form onSubmit={(e) => this.handleSubmitpro(e)}>
                    <div className="olone">
                        {this.state.successwd == true ? <h1>Apprenant ajouter avec success</h1> : ''}
                    </div>
                    <div className="oltwo">
                    <div className="mt-3">
                        <input 
                            onChange={(e) => this.handleChangepro(e)} 
                            type="text" placeholder="Promotion" 
                            name="promotionwd"
                            value={this.state.promotionwd} 
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary">Ajouter</button>
                    </div>
                    </div>
                </form>
            </div>
            <Footer slogan={"Nous créons l'Afrique créative"}/>
        </div>
        )
    }
}