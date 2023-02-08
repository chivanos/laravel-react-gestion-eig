import React from "react";
import axios from "axios";


export default class SousAjoutDg extends React.Component{
    constructor() {
        super();

        this.state = {
            name: '',
            firstName: '',
            old: '',
            email: '',
            mobile: '',
            filiere: '',
            image: '',
            success: false,
            mesage: ''
        }

    }

    handleChangePro(e) {
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

    handleSubmitPro(e){
        e.preventDefault();
        
        if(this.state.name != '' && this.state.firstName != ''
        && this.state.old != '' && this.state.filiere != ''
        && this.state.email != '' && this.state.mobile != ''
        && this.state.image != '')
        {
            
            // const two = {
            //     id: this.getId(),
            //     name: this.state.name,
            //     firstName: this.state.firstName,
            //     old: this.state.old,
            //     email: this.state.email,
            //     mobile: this.state.mobile,
            //     filiere: this.state.filiere,
            //     image: this.state.image
            // }= 


            axios.post('http://localhost:8000/api/designgraphique/registre', this.state)
            .then(response =>{
                if(response.data.status === 200)
                {
                    console.log(response.data.message)
                    this.setState({
                        name: '',
                        firstName: '',
                        old: '',
                        email: '',
                        mobile: '',
                        filiere: '',
                        image: '',
                        success: true,
                        message: ''
                    })
                }

            }) 

            // const all_two = localStorage.getItem('student');
            // let new_two = [];

            // if(all_two != null){
            //     new_two = [...JSON.parse(all_two), two]
            // }
            // else{
            //     new_two = [two]
            // }
            // localStorage.setItem('student', JSON.stringify(new_two))

            // this.setState({
            //     name: '',
            //     firstName: '',
            //     old: '',
            //     email: '',
            //     mobile: '',
            //     filiere: '',
            //     image: '',
            //     success: true
            // })

            
        }
        
    }
    render(){
        return(
            <main className="">
                    <form onSubmit={(e) => this.handleSubmitPro(e)}>
                        <div className="olon">
                            {this.state.success == true ? 'Apprenant ajouter' : ''}
                        </div>
                        <div className="oltw">
                            <div className="mt-3">
                                <input 
                                    onChange={(e) => this.handleChangePro(e)} 
                                    type="text" placeholder="Nom" 
                                    name="name"
                                    value={this.state.name} 
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <input 
                                    onChange={(e) => this.handleChangePro(e)} 
                                    type="text" placeholder="Prénoms" 
                                    name="firstName"
                                    value={this.state.firstName}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <input 
                                    onChange={(e) => this.handleChangePro(e)} 
                                    type="number" min={"12"}placeholder="L'âge" 
                                    name="old"
                                    value={this.state.old}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <input 
                                    onChange={(e) => this.handleChangePro(e)} 
                                    type="email" placeholder="Email" 
                                    name="email"
                                    value={this.state.email}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <input 
                                    onChange={(e) => this.handleChangePro(e)} 
                                    type="mobile" placeholder="N° mobile" 
                                    name="mobile"
                                    value={this.state.mobile}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <input 
                                    onChange={(e) => this.handleChangePro(e)} 
                                    type="text" placeholder="Filière" 
                                    name="filiere"
                                    value={this.state.filiere}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <input 
                                    onChange={(e) => this.handleChangePro(e)} 
                                    type="text" placeholder="Image" 
                                    name="image"
                                    value={this.state.image}
                                    className="form-control"
                                />
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                            </div>
                        </div>
                    </form>
            </main>
        );
    
    }
}


// constructor(){
//     super();

//     this.state = {
//         nom: null,
//         prenom: null
//     }
// }
//     get = (id) => {
//         axios('http://localhost:8000/api/details/',{
//             det: id
//         })
//         .then(response => {
//             this.state({
//                 nom: response.data.name,
//                 prenom: response.data.prenom
//             })
//         })
//     }


//     Route::get('/sssssss/ssss', [aaaaaaaaaaa::class, 'ggggggg'])->name('aaaa');

//     public function ggggggg(Request $req)
//     {
//         $det = Enp::findOrFail($req =>get(id));
//         return response()->json($det);
//     }
