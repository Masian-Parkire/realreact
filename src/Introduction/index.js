import React from "react";
import './style.css'
import { FaAccessibleIcon } from "react-icons/fa";

const Introduction =()=>{
    return(
        <div>
            <h1 className="heading">What I learnt in React</h1>
             <p className="para" >React is a JavaScript framework</p>
             <FaAccessibleIcon/>

             <img src="https://res.cloudinary.com/dyuflsxoc/image/upload/v1688099162/samples/balloons.jpg" className="img"></img>

             {/* <img src "https://res.cloudinary.com/dyuflsxoc/image/upload/v1688099162/samples/balloons.jpg"/> */}
        </div>

    )
}


export default Introduction