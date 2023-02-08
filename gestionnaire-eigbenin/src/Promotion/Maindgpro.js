import React from "react";
import { Link } from "react-router-dom";
import Header from "../Page/Header";
import Footer from "../Page/Footer";
import Listdgpro from "./Compdg/Listdgpro"
import Ajoutdgpro from "./Compdg/Ajoutdgpro"
import getId from "./getId"











export default class Maindgpro extends React.Component{
    
    constructor(){
        super();



        this.state = {
           promotions: [],
           isLoading: true,
           error: null
        }
 
    }



    


    // addPromotion = (promotion) => {
    //     const new_promotions = [...this.state.promotions, promotion];
    //     this.setState({
    //       promotions: new_promotions
    //     });
    //     localStorage.setItem('promotions', JSON.stringify(new_promotions));
    //   }

    componentDidMount(){
        // const apre = localStorage.getItem('dwstudentfour');

        // if(apre != null){
        //     this.setState({
        //         studentfour: JSON.parse(apre)
        //     })
        // }
        // fetch(`/api/dgpromotions`)
        // .then(res => res.json())
        // .then(listPromotion => this.setState({promotions: listPromotion})
        // )

            // const apre = localStorage.getItem('studentwd');
    
            // if(apre != null){
            //     this.setState({
            //         students: JSON.parse(apre)
            //     })
            // }
            fetch(`localhost:8000/api/details_filiere`)
            .then(res => res.json())
            .then(listProduits => this.setState({product: listProduits})
            )
    }

    render(){

        return(
            <>
                <div className="contain">
                    <Header lienone={<Link to="/" className="lien--oo" >Retour</Link>}
                            lientwo={
                            <Link to="/ajoutdgpro" className="lien--oo" >Ajouter une nouvelle promotion</Link>
                            }
                    />
                    <div className="body">
                        <div className="fre">
                            <div className="b"><Listdgpro promotions={this.state.promotions} /></div>
                        </div>
                    </div>
                    <Footer slogan={"Nous créons l'Afrique créative"}/>
                </div>

                {/* <Ajoutdwpro/> */}
            </>
        )
    }

}

// export default function Maindwpro(){

//     const [formData, setFormData] = React.useState({
//         id: null,
//         nomPromotion: '',
//         promotion: []
//     })

//     function handleChangepro(e){
//         const {name,type,value,checked} = e.target;
//         setFormData(prevData => {
//             return {
//                 ...prevData,
//                 [name]: type === "checkbox" ? checked : value,
//                 id: getId()
//             }
//         })
//     }

//     function handleSubmitpro(e){
//         e.preventDefault();
//         const l1 = localStorage.getItem('Promotions');
//         if(l1 != null){
//             setFormData(prev =>{
//                 return {
//                     promotion: [...JSON.parse(l1),prev]
//                 }
//             })
//         }else{
//             setFormData(prev =>{
//                 return {
//                     promotion: [prev]
//                 }
//             })
//         }
//         localStorage.setItem('promotions', JSON.stringify(formData.promotion))
//     }

//     return(
//         <>
//             <Header />
//             <div className="flex">
//                 <Link to="/" >Home</Link>
//                 <Link to="/cdw" >Calendrier</Link>
//                 {/* <Link to="/ajoutdwpro" >Ajouter une nouvelle promotion</Link> */}
//             </div>
//             <div className="s1">
//                 <form onSubmit={handleSubmitpro}>
//                     <input 
//                         onChange={handleChangepro} 
//                         type="text" 
//                         placeholder="Promotion" name="promotion" 
//                         value={formData.nomPromotion} />
//                     <button type="submit" class="bt--one">Ajouter</button>
//                 </form>
//             </div>
//             <Listdgpro pro={formData.promotion} />
//             <Footer />
//         </>
//     )

// }
