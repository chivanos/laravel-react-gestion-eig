import React from "react";
import { useState } from "react";



export default function SousAjoutDw(){

    const[name,setName] = useState("");
    const[firstName,setFirstName] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");
    const[old,setOld] = useState("");
    const[filiere,setFiliere] = useState("");
    const[file,setFile] = useState("");
    const[success,setSuccess] = useState(false);
    const[message,setMessage] = useState("");


    async function handleSubmitPro(e){
        e.preventDefault();
        
        if(name != '' && firstName != ''
        && old != '' && filiere != ''
        && email != '' && mobile != ''
        && file != ''){

            
            const form = new FormData();

            
            console.warn(name,firstName,email,mobile,old,filiere,file);
            form.append('name',name);
            form.append('firstName',firstName);
            form.append('email',email);
            form.append('mobile',mobile);
            form.append('old',old);
            form.append('filiere',filiere);
            form.append('File',file);

            let response = await fetch('http://localhost:8000/api/adddevweb', {
                method: 'POST',
                body: form
            });



            setName(() => [""]);
            setFirstName(() => [""]);
            setEmail(() => [""]);
            setMobile(() => [""]);
            setOld(() => [""]);
            setFiliere(() => [""]);
            setFile(() => [""]);
            setSuccess(() => [true]);
            setMessage(() => [""]);

            
        }
        else{
            setName(() => [""]);
            setFirstName(() => [""]);
            setEmail(() => [""]);
            setMobile(() => [""]);
            setOld(() => [""]);
            setFiliere(() => [""]);
            setFile(() => [""]);
            setSuccess(() => [false]);
            setMessage(() => ["Vous avez oublié un champ, veuillez repprendre l'ajout."]);
        }
        
    }


    

    return(
        <main className="">
            <form onSubmit={handleSubmitPro}>
                <div className="olon">
                {success == true ? 'Action Réussie!' : message}
                </div>
                <div className="oltw">
                    <div className="mt-3">
                        <input 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" placeholder="Nom" 
                            name="name"
                            value={name} 
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            onChange={(e) => setFirstName(e.target.value)} 
                            type="text" placeholder="Prénoms" 
                            name="firstName"
                            value={firstName}
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            onChange={(e) => setOld(e.target.value)} 
                            type="number" placeholder="L'âge" 
                            name="old"
                            value={old}
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" placeholder="Email" 
                            name="email"
                            value={email}
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            onChange={(e) => setMobile(e.target.value)} 
                            type="tel" placeholder="N° mobile" 
                            name="mobile"
                            value={mobile}
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            onChange={(e) => setFiliere(e.target.value)} 
                            type="text" placeholder="Filière" 
                            name="filiere"
                            value={filiere}
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            onChange={(e) => setFile(e.target.value)} 
                            type="file" placeholder="Image" 
                            name="file"
                            value={file}
                            className="form-control"
                        />
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </div>
                </div>
            </form>
        </main>
    )

}







































// import React from "react";
// import axios from "axios";



// export default class SousAjoutDw extends React.Component{

//     constructor() {
//         super();

//         this.state = {
//             name: '',
//             firstName: '',
//             email: '',
//             old: '',
//             mobile: '',
//             filiere: '',
//             image: '',
//             success: false,
//             message: ''
//         }

//     }

//     handleChangePro(e) {
//         const target = e.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         })
//     }


//     handleSubmitPro = async (e) => {
//         e.preventDefault();
        
//         if(this.state.name != '' && this.state.firstName != ''
//         && this.state.old != '' && this.state.filiere != ''
//         && this.state.email != '' && this.state.mobile != ''
//         && this.state.image != ''){


//             const data = {
//                 name: this.state.name,
//                 firstName: this.state.firstName,
//                 email: this.state.email,
//                 mobile: this.state.mobile,
//                 old: this.state.old,
//                 filiere: this.state.filiere,
//                 image: this.state.image
//             }
            
//             const form = new FormData();

            
//             form.append('name',data.name);
//             form.append('firstName',data.firstName);
//             form.append('email',data.email);
//             form.append('mobile',data.mobile);
//             form.append('old',data.old);
//             form.append('filiere',data.filiere);
//             form.append('image',data.image);

//             let response = await fetch('http://localhost:8000/api/adddevweb', {
//                 method: 'POST',
//                 body: form
//             })
//             if(response.data)
//             {
//                 console.log(response.data)
//                 this.setState({
//                     name: '',
//                     firstName: '',
//                     old: '',
//                     email: '',
//                     mobile: '',
//                     filiere: '',
//                     image: '',
//                     success: true,
//                     message: ''
//                 });
                

//             }
        


            
//         }
//         else{
//             this.setState({
//                 name: '',
//                 firstName: '',
//                 old: '',
//                 email: '',
//                 mobile: '',
//                 filiere: '',
//                 image: '',
//                 success: false,
//                 message: "Vous avez oublié un champ, veuillez repprendre l'ajout."
//             });
//         }
        
//     }


    
//    render(){
//     return(
//         <main className="">
//             <form onSubmit={(e) => this.handleSubmitPro(e)}>
//                 <div className="olon">
//                 {this.state.success == true ? 'Action Réussie!' : this.state.message}
//                 </div>
//                 <div className="oltw">
//                     <div className="mt-3">
//                         <input 
//                             onChange={(e) => this.handleChangePro(e)} 
//                             type="text" placeholder="Nom" 
//                             name="name"
//                             value={this.state.name} 
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="mt-3">
//                         <input 
//                             onChange={(e) => this.handleChangePro(e)} 
//                             type="text" placeholder="Prénoms" 
//                             name="firstName"
//                             value={this.state.firstName}
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="mt-3">
//                         <input 
//                             onChange={(e) => this.handleChangePro(e)} 
//                             type="number" min={"12"} placeholder="L'âge" 
//                             name="old"
//                             value={this.state.old}
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="mt-3">
//                         <input 
//                             onChange={(e) => this.handleChangePro(e)} 
//                             type="email" placeholder="Email" 
//                             name="email"
//                             value={this.state.email}
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="mt-3">
//                         <input 
//                             onChange={(e) => this.handleChangePro(e)} 
//                             type="number" placeholder="N° mobile" 
//                             name="mobile"
//                             value={this.state.mobile}
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="mt-3">
//                         <input 
//                             onChange={(e) => this.handleChangePro(e)} 
//                             type="text" placeholder="Filière" 
//                             name="filiere"
//                             value={this.state.filiere}
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="mt-3">
//                         <input 
//                             onChange={(e) => this.handleChangePro(e)} 
//                             type="text" placeholder="Image" 
//                             name="image"
//                             value={this.state.image}
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="mt-3">
//                         <button type="submit" className="btn btn-primary">Ajouter</button>
//                     </div>
//                 </div>
//             </form>
//         </main>
//     )
//    }

// }

