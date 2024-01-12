import React from "react";
import { useState } from "react";
const Offers=()=>{
    const [offer,setOffer]=useState([
        {
            position:'Lead Software Engineer',
            place:'Madagascar ',
            img1:'https://s3-alpha-sig.figma.com/img/dd40/e9b3/cb9d17089ece9f56efa0ec96751e1094?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZxieiZ3X74pKnE-EdghwhKu0icZs7rAiNgkE2LVAsroLf002-A0XbhFL9NRW4fORMoL5KEwmP5GJNEANak81P7aqH9rM1z6hZ8bhUjGiod2Ia2yJT-yfoia5~0NnLKKr6fyJ31AkOWcz7FSZATxsgJrKvLVEr15G8zQkjFwf0VVFPyoaYyvwzE2K5vxoz4flYw4DtOKwsSybMCpHn9cOVZu4FCoGQc-IuB~aUG9KDJIHLx-F7IJVclBOZMikyVxm1GawkZFlFuveYIRlIdfa2wwPnufOFFAGB~rVqxVyaXpK8V0zfSEgHS-P888KHnSvDoXXYgoFj2a9~FsgVBDxhA__',
            comp:'Tubik Studio',
        },
        {
            position:'Risk Analyst',
            place:'Madagascar ',
            img1:'https://s3-alpha-sig.figma.com/img/8a05/82a3/5b7b61c406d966bdbda025131ced91e5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fr8S00qFjn0Z2peoVW1IsI0Ra1KUoLWkkpvM8iUT~QUw-DQPWiyWrvxpM7MaN2OmzhIwBT7QDo~YWGQvSeCIc~8NJ0nrk~gyByHPxZcuLAj2ab-ydRBn0DJ-yyKmmUJC9jQk5vBJMb8K07uzilBzZkrZxZQqGPWSLywrtqVPvjMAtKVfpchIDnQH6mJoo2Q0ZTBVehftKe-WYRm9ybpnQi0Y8JikAdgcYK9UaFsX27D6Kkt0pse4cv7DLw8DpG6~nLvm8wZG1YCgs~mmtkXGnonNpJbhG6Ycx-CiTxtLooS0of~q8tWNynyzRUwXSdz4LCcf5AYcPNnUlcFg3pbuxw__',
            comp:'Bubba Gump',
        },
        {
            position:'Financial Analyst',
            place:'Madagascar ',
            img1:'https://s3-alpha-sig.figma.com/img/7f59/b21c/a0ddddbab1673e16b6708e046a12c53f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UK0iQ3OdJMRkZHJCeJf38FsSuM-0ChHFKFuDrpKFwZzbo~tnWjLXx36HMOxRv8pM4YMoBhWSZHmFq5qPOlh-pWUeJ-y1oYA0ltrALfwxg6hoZvysk77fW5gWZB34SBykzVerneCSg22Qu1vpwqNNizjCMjJ86~DeymExQbWogV6q6lOLweOkjHg1OwuwYe0cQ5ngHK~SzQO0ePjJhvV3sRy4i2~5sE4Vy9xy8jjHTcf-kRQVRiN2g2HopvAx2j-pR5uNy1gNrXuGAM1w4fMf-4HRIV48A7p7SBJLdZBVU0pYsp~PsQ~iYU6kuV3BRIkApWHEDOu3UNnf7umhqJ1O8g__',
            comp:'SP-holding',
        },
        {
            position:'Data Engineer',
            place:'Madagascar ',
            img1:'https://s3-alpha-sig.figma.com/img/4974/b251/143c75bfb1e19fb2dd95c1a887820bd2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hn9EYunUlNUJXQqB5~dkmUz6nggzNxktM0OSZHKd1o51Ku2VBBmLFxWufl7tAuZaZpLxPBt3kLEL9Y~H~bVzDWGBojXchaWxFV4ZlbPpC2ZD67h8lQKgYVCzwnGNrM9c6fkllv-67q5cbEpFLOh-mikZljq~3JyKiP2F~6KPzMWppcSFLqN1EB91OplOK0d85J89Taep3h2EIdl-0ZY-~PoY1mty6O1SvDTHWdD0C1q6i6uIkf3rTSUN5L-~B9MJYxShTZwZM28coxcEc2SjenSjDn9F1SJ1T3ThxddmIg~n7d3zsqzFpfuMnbeIYuW8e~5zqQW~oWn11yYI8KWqHQ__',
            comp:'Vehement Capital Partners',
        }
    ])
    const image="https://s3-alpha-sig.figma.com/img/a0dc/a6f4/f23bab4df0a530a01daeec62f1c701b7?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gbBI3Ga3xbItg6zxxBrYJLYsXWKKstk~ZT~J0MCmMvh8iqNn5PJ32KF7jQTunt8WBdrxNKslr9QlC6X7HzAm-QqhZPxMwrPSZgbOlmPqC8Ch2xnk9mn71LkYcD14X8JS-EBNL9gO5bqM2U3Y~IB12JmTAj6C4fnwA61XESIgg6MVbhfoxrXpdFOBIjisQFB91tN7uE2wMoBr~FQAbtDmxKdwtpIJ3gN~C-suyG02NjG31xrlPXCVMlukj7BBrn68YRA6NeGtxIuSi8T5Co0I1ZIYtHhkZFRZO8zV-QK68yFS~3Iysj-p27GdAhw5CjQogJ4erhI9EzFeL1yk~moMDA__"
    const image2="https://s3-alpha-sig.figma.com/img/2bc2/8f8b/bbbace657356fb60c86bbcde12a7b593?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-BPRfPCVH6wB5Mwe-qAl4F~Z~WtTnsM3kvGyRCYgRj9gMNSrp3QHJLSd5UYU5vGL1H8U0Q83rRA5sJjagtibnQYNx9WzBRrkbZZ3YaTFm9MeRfk2YxSTaKXBtIYC6o4QPSpVtpkyo86YXz4hvt-VbN0n8GZE0bbPVb0VOv46JXsid-nWjBuMnEHSUun2K~ZNkpR8AMWdnwnl77ZEyMSpc-SKYOm-dTFeugWtkpXNqudkJVtSWY6RjBkIcQ1zoRTmbJ44AXH8Mil~eS3Aj46wPDtqAJW2XjfTBkCVDKMlOax7IvkE3lD5iA3MLq--zs1kAneUdSrbMjuCG4CSiTUug__"
    return(
        <>
        <div className="flex mt-16">
    <div className="w-[30%] flex-col flex items-center justify-between">
        <p className="text-5xl font-semibold text text-left mt-4">Offres d'emploi</p>
        <div className="pb-16">
            <p className="text-base text-left font-normal">Publiez les offres d'emploi au sein de votre organisation auprès de notre communauté d'experts! Expert à la recherche d'un emploi en Afrique? Trouvez le job de vos rêves! </p>
            <button className="w-[100%] p-2 rounded-full font-medium text-sm mt-8 border border-gray-500">Publier ou postuler à une offre d'emploi</button>
        </div>

    </div>
    <div className="w-[60%] ml-10 flex items-center justify-between flex-wrap">
        {offer.map((data,id)=>{
            return(
<div key={id} className="flex m-3 flex-col py-10 items-center justify-between h-72 w-80 rounded-[25%] border border-gray-400">
            <p className="text-2xl font-semibold">{data.position}</p>
            <p className="text-base font-normal text-[#A95454]">{data.place}</p>
            <div className="flex gap-6 items-center">
                <div>
                    <p className="font-medium text-base text-[#A95454]">Full Time</p>
                    <p className="font-medium text-base ">+ Favroites</p>
                </div>
                <div className="flex flex-col items-center justify-between ">
                    <div className="mt-2 h-16 w-16 border border-black rounded-full mb-4 bg-no-repeat bg-cover bg-center scale-[1] " style={{ backgroundImage: `url(${data.img1})` }}></div>
                    <p className="m-0 text-lg font-bold">{data.comp}</p>
                </div>
                <p className="font-medium text-base ">1 Day ago</p>
            </div>
            <button className="px-10 font-normal text-base border border-gray-400 rounded-full p-1">Voir</button>
        </div>
            )
        })}
        
    </div>
</div>
<div className="flex items-center justify-between">
    
    <div className="w-[30%] flex flex-col item-center justify-between mt-28">
            <div className="flex flex-col ">
                <div className="flex  gap-2">
                <spna className='w-[20%] border border-black'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                <spna className='w-[20%] border border-gray-500'></spna>
                </div>
                <p className="text-5xl font-semibold text text-left mt-4">Evénements à venir</p>
            </div>
            
                <p className="w-[60%] text-sm font-bold text-left mt-6">Publié par: Pablo Diahuno</p>
                
            <div  className="mt-2 h-16 w-16 border border-black rounded-full mb-4 bg-no-repeat bg-cover bg-center scale-[1] " style={{ backgroundImage: `url(${image})` }}>

            </div>

            <p className="mt-10 text-left text-base font-normal">
            Sortez votre carnet d'adresses! Restez informés de tous les événements à venir autour du business en Afrique organisés en Afrique ou à l'étranger.
            </p>
            <button className="mt-16 w-full p-1 border border-gray-400 rounded-full">Publier ou voir les événements </button>
        </div>
    
    <div className="mt-2 h-72 w-72 border border-black rounded-full mb-4 bg-no-repeat bg-cover bg-center scale-[1] " style={{ backgroundImage: `url(${image2})` }}></div>
    <div className="h-[340px]">
        <p className="m-0 text-sm font-bold text-left">L'événement:<span className="text-[#A95454]">The Nancy party’s</span></p>
        <p className="m-0 text-sm font-bold text-left">ate:<span className="text-[#A95454]">10/07/22</span></p>
        <p className="m-0 text-sm font-bold text-left">Lieu:<span className="text-[#A95454]">Senegal</span></p>
        
    </div>
</div>
        </>

    )
}
export default Offers;