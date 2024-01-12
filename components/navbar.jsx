import React from "react";
import { useState } from "react";
const NavBar=()=>{
    const [feature,setfeature]=useState(['missions de pANDA','Fonctionnalités','experts','Organisations en Afrique',"Offres d'emploi","Evénements à venir","Témoignages","Fondateurs"])
    return(
    <nav className="w-full h-28">
        <div className="flex justify-between items-center">
            <p className="text-base hover:cursor-pointer">EN-FR</p>
            <p className="flex items-center justify-center font-[jost] font-normal text-4xl ml-[20%]">Bienvenue sur P<div className=" flex items-center justify-center h-7 border-[3px] pt-4 border-black  rounded-t-lg size text-yellow-200" >*</div>NDA</p>
            <p className="flex gap-8 text-base"><span className="relative after:bg-slate-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Créer un compte</span><span className="relative after:bg-slate-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Se connecter</span></p>
        </div>
<div className=" p-5 gap-6  text-sm flex items-center justify-center">
  {feature.map((data,id)=>{
    return(
        <span key={id} className="relative after:bg-slate-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">{data}</span>
    )
  })} 
</div>
    </nav>
    )
}
export default NavBar;