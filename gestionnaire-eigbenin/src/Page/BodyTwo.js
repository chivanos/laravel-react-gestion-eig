import React from "react";
import { Link } from "react-router-dom";



export default function BodyTwo(){

    return(
        <>
            <div className="nvl--body">
                <div className="nvl--g1" >
                    <Link to="/developpementweb" className="st--i">
                        <img src="../images/1656018025443.jpg" className="image--filiere"/>
                        <p className="st--ip">Developpement Web</p>
                    </Link>
                </div>
                <div className="nvl--g2">
                    <Link to="/designgraphique" className="st--i">
                        <img src="../images/1656019486732.jpg" className="image--filiere"/>
                        <p className="st--ip">Design Graphique</p>
                    </Link>
                </div>
                <div className="nvl--g3">
                    <Link to="/webdesign" className="st--i">
                        <img src="../images/1656019852477.jpg" className="image--filiere"/>
                        <p className="st--ip">Web Design</p>
                    </Link>
                </div>
                <div className="nvl--g4">
                    <Link to="/montagevideo" className="st--i">
                        <img src="../images/1656019404989.jpg" className="image--filiere"/>
                        <p className="st--ip">Montage - Cadrage Video</p>
                    </Link>
                </div>
            </div>
        </>
    )

}

