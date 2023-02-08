import React from "react";
import { Link } from "react-router-dom";
import HeaderPdfStandardDg from "./HeaderPdfStandardDg";
import BodyOne from "./BodyOne";
import ListDg from "./DG/ListDg"
import Bod from "./Bod";
import axios from "axios";









export default class MainDg extends React.Component{
    
    constructor(){
        super();



        this.state = {
            students: [],
            isLoading: true,
            error: null
        }
 
    }



    componentDidMount(){

        this.getStudent();
    }

    getStudent(){
        let self = this;
        axios.get('http://localhost:8000/api/listdesg')
        .then(response => {
            self.setState({
                students: response.data
            })
        })
    }

    render(){

        return(
            <>
                <section className="nvl--style">
                    <div className="nvl--one">
                        <HeaderPdfStandardDg title={"Pdf Designer Graphique"} linkpdfdgc={"/pdf-download-dgc"} 
                        linkpdfdgb={"/pdf-download-dgb"}
                        linkpdfdgem={"/pdf-download-dgem"}/>
                    </div>
                    <div className="nvl--two">
                        <section className="bd">
                            <div className="bodyone">
                                <BodyOne linkone={
                                    <Link to={"/ajoutdesignergraphique"} className="lie--tw">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="lie--tela bi bi-plus-circle-fill lie--tel" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    </Link>} pagetitre={"Design Graphique"}/>
                                <hr />
                            </div>
                            
                            <div className="nvl--body">
                                <div className="pos">
                                    <div className="pos--one">
                                        <Link to={"/eighome"} className="st--ii">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-caret-left-fill" viewBox="0 0 16 16">
                                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="pos--two">
                                        <Bod corp={<ListDg handleStudentDelete={(id) => this.handleStudentDelete(id)} students={this.state.students} />} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
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
