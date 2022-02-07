import React from 'react';
import img1 from "../images/Notes.png"
export default function Header(){
  return(
    <div className="figure">
       <img
         src={img1} alt=''
       />
       <h3>TO DO LIST</h3>
    </div>
  )
}