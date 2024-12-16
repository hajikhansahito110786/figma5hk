import React from 'react'
import Image from 'next/image'


import img0 from "../../../public/assets/Products0.png"
import img1 from "../../../public/assets/Products1.png"
import img2 from "../../../public/assets/whitesmall.jpg"
import img3 from "../../../public/assets/orangechair.png"
import img4 from "../../../public/assets/redchair.png"
import img5 from "../../../public/assets/whitechair1.jpg"


const Feutureproduct = () => {
  return (
    <>
    <div className='width: 1920px;
height: 461px;
top: 1270px;
gap: 0px;
opacity: 90px;
'>

  
       <div className='flex justify-between'> <p className='bg-green-900  width: Fixed (1,920px)px;
height: Hug (44px)px;
padding: 0px 300px 0px 300px;
gap: 0px;
justify: space-between;
opacity: 0px;
'>
    Feutureproduct1
    </p>
<div className='bg-gray-400 width: 106px;
height: 44px;
gap: 0px;
opacity: 0px;
'> <Image src={"/assets/Arrow.png"} alt ='heroimage1' width={106} height={44} />
</div>
    </div>










       <div>
       <div className="flex overflow-y-hidden overflow-x-scroll border-4 gap-x-5 relative">
  <Image src={img0} alt="product0whitesmalljpg"
       
          className="z-50 rounded-t-[0.625rem] h-[100px] rounded-b-none w-full 
          width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 70px;


          "
        />

<div className='bg-slate-400 -z-10 absolute top-1' >


<Image src={img2} alt="whitesmalljpg"
       
       className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full 
       width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px; "/>
</div>
































         <Image src={img1} alt="profileabove" 
                 
         
         className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full
         width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px;

         
         "
         
         />
         <Image src={img2} alt="profile"
         className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full
         width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px;

         "
          /> 
         <Image src={img5} alt="profile" 
   className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full
   width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px;

   "
         />
        
         <Image src={img4} alt="profile" 
    className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full
    width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px;

    "
          /> 

<Image src={img3} alt="profile"
  className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full
  width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px;

  "
 /> 

    </div>


       </div>


       </div>
    </>
 
  )
}

export default Feutureproduct