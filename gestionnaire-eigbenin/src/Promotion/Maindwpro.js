import React from "react";
import { Link } from "react-router-dom";
import Header from "../Page/Header";
import Footer from "../Page/Footer";
import Listdwpro from "./Compdw/Listdwpro"
import Ajoutdwpro from "./Compdw/Ajoutdwpro"








export default class Maindwpro extends React.Component{
    
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
        // fetch(`/api/dwpromotions`)
        // .then(res => res.json())
        // .then(listPromotion => this.setState({promotions: listPromotion})
        // )


        fetch(`/api/dwpromotions`)
        .then(response => response.json())
        .then((result) => 
        this.setState({
            isLoading: true,
            promotions: result.dwpromotions
        }),
        (error) => 
        this.setState({
            isLoading: true,
            error
        }))
    }

    render(){

        return(
            <>
                <div className="contain">
                    <Header lienone={<Link to="/" className="lien--oo" >Retour</Link>}
                            lientwo={
                            <Link to="/ajoutdwpro" className="lien--oo" >Ajouter une nouvelle promotion</Link>
                            }
                    />
                    <div className="body">
                        <div className="fre">
                            <div className="b"><Listdwpro promotions={this.state.promotions} /></div>
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
//         promotion: [],
//         promotions: {}
//     })

//     function handleChangepro(e){
//         const {name,type,value,checked} = e.target;
//         setFormData(prevData => {
//             return {
//                 ...prevData,
//                 id: getId(),
//                 [name]: type === "checkbox" ? checked : value,
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

//     // function useEffect(){
//     //     const u = localStorage.getItem('promotions');
//     //     if(u != null){
//     //         setFormData(prev => {
//     //             return{
//     //                 prev.promotions: JSON.parse(u)
//     //             }
//     //         })
//     //     }
//     // }
    

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
//                         placeholder="Promotion" 
//                         name="nomPromotion" 
//                         value={formData.nomPromotion} />
//                     <button type="submit" class="bt--one">Ajouter</button>
//                 </form>
//             </div>
//             <Listdwpro pro={formData.promotion} />
//             <Footer />
//         </>
//     )

// }
