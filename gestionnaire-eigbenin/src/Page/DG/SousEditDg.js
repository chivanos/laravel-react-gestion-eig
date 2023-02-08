import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export default function SousAjoutDg(){

    let params = useParams();
    let student = getStudent(params.ig);
    const [stud, setStud] = React.useState({
        nameDg: "",
        firstNameDg: "",
        oldDg: "",
        filiereDg: "",
        emailDg: "",
        telDg: "",
        imageDg: "",
        success: false
    })
    
    const lect = JSON.parse(localStorage.getItem("studentsdg"));
    const [sa, setSa] = React.useState(lect)





    function handleChange(e){
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setStud(p => {
            return{
                ...p,
                [name]: value,
            }
        })
    }

    useEffect(() => {
        let table = [];
        setInterval(() => {
            if(sa != null){
                setSa(p => {
                    return{
                        ...p,
                        p: stud
                    }
                })
                table = [...lect, sa.flter(s => sa != student), sa]
            }
            localStorage.setItem("studentdg", JSON.stringify(table));
        }, 1000)

        clearInterval(sa);
    })
    //     function toggle(id){
    //   setSquares( precedentSquare => {
    //     return precedentSquare.map(squar => 
    //       { return squar.id === id ? {...squar, on: !squar.on} : squar}
    //     )
    //     const newBoxes = []
    //     for(let i = 0; i < precedentSquare.length; i++) {
    //       const reccentBoxe = precedentSquare[i]
    //       if(reccentBoxe.id === id) {
    //         const updatedBoxes = {
    //           ...reccentBoxe,
    //           on: !reccentBoxe.on
    //         }
    //         newBoxes.push(updatedBoxes)
    //       } else {
    //         newBoxes.push(reccentBoxe)
    //       }
    //     }
    //     return newBoxes
    //   })
    // }
    function handleSubmit(e){
        e.preventDefault();
        const par = student;
        const nvl = stud;
        const fn = (par) => {
        setSa( precedentSa => {
            return precedentSa.map(s => 
              { return s.id === par ? {...sa, 
                [s.nameDg]: nvl.nameDg,
                [s.firstNameDg]: nvl.firstNameDg,
                [s.oldDg]: nvl.oldDg,
                [s.filiereDg]: nvl.filiereDg,
                [s.emailDg]: nvl.emailDg,
                [s.telDg]: nvl.telDg,
                [s.imageDg]: nvl.imageDg} : s}
            )
            const newBoxes = []
            for(let i = 0; i < precedentSa.length; i++) {
              const reccentBoxe = precedentSa[i]
              if(reccentBoxe.par === par) {
                const updatedBoxes = {
                  ...reccentBoxe,
                  on: !reccentBoxe.on
                }
                newBoxes.push(updatedBoxes)
              } else {
                newBoxes.push(reccentBoxe)
              }
            }
            return newBoxes
          })
        }
        // if(stud.nameDg != '' && stud.firstNameDg != '' &&
        // stud.oldDg != '' && stud.filiereDg != '' &&
        // stud.emailDg != '' && stud.telDg != '' &&
        // stud.imageDg != ''){
                
        //     setStud(l => {
        //         return {
        //             ...l,
        //             [l.name]: stud
        //         }
        //     })

        // }
        // setStud(op => {
        //     return {
        //         ...op,
        //         nameDg:'',
        //         firstNameDg: "",
        //         oldDg: "",
        //         filiereDg: "",
        //         emailDg: "",
        //         telDg: "",
        //         imageDg: "",
        //         success: true
        //     }
        // })
    }

    // setStud(p => {
    //     return {
    //         ...p,
    //         p: tab
    //     }
    // })
        return(
            <main className="">
                    
                    <div className="edit--one">
                            {/* <h2>Edit details student  { student.product_edit_id }</h2> */}


                            {
                                stud.success == true ?
                                    <div>
                                        Vous avez bien modifier les informations de l'apprenant!
                                    </div>
                                    :
                                    ''
                            }
                            <div className="edit--o1">
                                <img src={student.imageDg} className="img--ch" />
                            </div>
                        <form method="post" action="" onSubmit={handleSubmit}>
                                <div className="mt-3">
                                    <input onChange={handleChange} type={'text'} className="form-control" name="imageDg" value={stud.imageDg} placeholder="Image" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type={'text'} className="form-control" name="nameDg" value={stud.nameDg} placeholder="Name" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type={'text'}  className="form-control" name="firstNameDg" value={stud.firstNameDg} placeholder="FirstName" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type={'number'} min="1" className="form-control" name="oldDg" value={stud.oldDg} placeholder="Age" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type={'text'} className="form-control" name="filiereDg" value={stud.filiereDg} placeholder="Filière" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type={'email'} className="form-control" name="emailDg" value={stud.emailDg} placeholder="Email" />
                                </div>
                                <div className="mt-3">
                                    <input onChange={handleChange} type={'tel'}  className="form-control" name="telDg" value={stud.telDg} placeholder="Téléphone" />
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-primary">Mettre à jour</button>
                                </div>

                            </form>
                        </div>
            </main>
        );
}

function getStudent(id) {
    const allStudent = JSON.parse(localStorage.getItem('studentdg'))
    return allStudent.find(student => student.id === id);
}
// let new_array = [1, 3, 4].filter(item => {

//     // if(item.id == id ){
//     //     item.designation = n_designation;
//     //     item.prix = n_prix;
//     //     return item;
//     // }
//     return item;
// })