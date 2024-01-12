import React from "react";
import { useState } from "react";
import map from "../img/globe.png"
const Mission=()=>{
    const [fet,setFet]=useState([{
        title:"Networking",
        desc:'Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.'
    },
    {
        title:"Partage",
        desc:'Promouvoir le partage de connaissances et d’expertises. '
    },
    {
        title:"Recrutement",
        desc:'Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés. '
    },
    {
        title:"Collaborations",
        desc:' Créer des opportunités de collaborations en Afrique.'
    },
    {
        title:"Evénements",
        desc:'Augmenter la visibilité des évenements autour du “Business in Africa”.'
    }
])
    const [fet1,setfet1]=useState([
        {
            title:"Sélection de profils",
            desc:"Sélectionnez les meilleurs profils d'experts ou organisations qui vous intéressent et entrez en contact avec eux!"
        },
        {
            title:" Publication",
            desc:"Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée !"
        },
        {
            title:"tRAVEL MAP",
            desc:"Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. Il ne reste plus qu'à planifier la rencontre! "
        },
        {
            title:"Filtres & recherche avancée",
            desc:"Ciblez vos recherches par secteur d'activité, pays et plus encore.  "
        },
        {
            title:"NOTIFICATIONS",
            desc:"Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications."
        }
])
    return(
        <>
         <div className="m-0 mt-28">
            <h1 className="m-0 font-medium text-5xl text-left">Missions de PANDA</h1>
            <div className="flex flex-wrap justify-between mt-14">
                {fet.map((data,id)=>{
                    return(
                        <div className="w-[18%] border border-[#A95454] rounded-t-full p-5">
                            <p className="mt-6">0{id+1}</p>
                            <p className="m-1 text-2xl font-semibold mt-6">{data.title}</p>
                            <p className="mt-8 font-normal text-sm">{data.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="m-0 mt-28">
        <h1 className="m-0 font-medium text-5xl text-left">Fonctionnalités</h1>
        <div className="flex justify-between">
        <div className="flex flex-wrap gap-5 w-[55%] mt-24">
    {fet1.map((data, id) => {
        if (id < 3) {
            return (
                <div key={id} className="w-[30%] border border-black rounded-t-full border-t-[#A95454]">
                    <p className="mt-10">✴</p>
                    <p className="m-1 text-xl font-semibold mt-6">{data.title}</p>
                    <p className="mt-8 font-normal text-sm mb-4 p-2">{data.desc}</p>
                </div>
            );
        } else {
            return (
                <div key={id} className="w-[30%] border border-black rounded-b-full border-b-[#A95454]">
                    <p className="mt-10">✴</p>
                    <p className="m-1 text-xl font-semibold mt-6">{data.title}</p>
                    <p className="mt-8 font-normal text-sm mb-9 p-2">{data.desc}</p>
                </div>
            );
        }
    })}
</div>

            <div className="w-[40%]  flex flex-col items-center justify-center">
            <img className="" src={map} alt=""/>
            <button className="px-10 p-2 rounded-full font-medium text-sm mt-8 border border-gray-500">Explorer la Travel Map</button>
            </div>
        </div>
        </div>

        <div className=" flex item-center justify-between mt-16">
            <div className="flex flex-col w-[30%]">
                <div className="flex  gap-2">
                <spna className='w-[20%] border border-black'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                </div>
                <p className="text-5xl font-semibold text text-left mt-4">Découvrez les experts</p>
            </div>
            <div className="w-[60%] text-3xl font-medium text-left ml-6">
                <p>“ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</p>
                <p className="text-right text-base font-normal text-[#A95454] mt-5">Omar Ndiaye</p>
            </div>

          

        </div>
        <div className="flex items-center justify-between">
                <div className="flex  flex-col items-center justify-end w-[30%] h-[300px]">
                    <p className="text-base text-left font-normal ">Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   </p>
                    <button className="w-[50%] p-2 rounded-full font-medium text-sm mt-8 border border-gray-500">Voir tout</button>
                </div>
                <div className="w-[60%] ml-6 flex items-baseline gap-4">
                    <div className="profile"></div>
                    <div className="profile2"></div>
                    <div className="profile3"></div>
                     
                </div>
            </div>
        
        <section className="mt-24">
        <div className=" flex item-center justify-between mt-16">
        <div className="w-[60%] text-3xl font-medium text-left ml-6">
                <p>“PANDA nous donne accès aux meilleurs talents dans leur domaine d'activité et à de réelles perspectives de collaboration!  ”</p>
                <p className="text-left text-base font-normal text-[#A95454] mt-5">LGB Company</p>
            </div>
            <div className="flex flex-col w-[30%]">
                <div className="flex  gap-2">
                <spna className='w-[20%] border border-black'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                </div>
                <p className="text-5xl font-semibold text text-left mt-4">Découvrez les organisations en Afrique</p>
            </div>
        </div>
        <div className="flex items-center justify-between">
                
                <div className="w-[60%] ml-6 flex items-baseline gap-4">
                    <div className="profile6"></div>
                    <div className="profile5"></div>
                    <div className="profile4"></div>
                     
                </div>
                <div className="flex  flex-col items-center justify-end w-[30%] h-[300px]">
                    <p className="text-base text-left font-normal ">Trouvez les experts que vous recherchez, publiez vos offres d'emploi et d'autres contenus exclusifs sur votre organisation!</p>
                    <button className="w-[50%] p-2 rounded-full font-medium text-sm mt-8 border border-gray-500">Voir tout</button>
                </div>
            </div>
        </section>
        </>
       
    )
}
export default Mission;