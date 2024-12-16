import React from 'react'
import Image from 'next/image'


import img0 from "../../../public/assets/Products0.png"
import Products1 from "../../../public/assets/Products1.png"
import img2 from "../../../public/assets/whitesmall.jpg"
import orangechair from "../../../public/assets/orangechair.png"
import redchair from "../../../public/assets/redchair.png"
import whitechair1 from "../../../public/assets/whitechair1.jpg"


const Feutureproduct = () => {
  return (
   
    <div className='width: 1920px;height: 461px;top: 1270px;gap: 0px;opacity: 90px;'>
 {/*start div0*/}




  



<div className='flex'>{/*start div2*/}

       <div className="flex overflow-y-hidden overflow-x-scroll border-4 gap-x-5 relative">

        <div>
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
</div>
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
</div>


<div className="flex overflow-y-hidden overflow-x-scroll border-4 gap-x-5 relative">

<div>
<Image src={Products1} alt="product0whitesmalljpg"

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
</div>
<div className='bg-slate-400 -z-10 absolute top-1' >


<Image src={redchair} alt="whitesmalljpg"

className="rounded-t-[0.625rem] h-[100px] rounded-b-none w-full 
width: Fixed (1,321px)px;
height: Hug (139px)px;
top: 1107px;
left: 300px;
gap: 0px;
justify: space-between;
opacity: 0px; "/>
</div>

<div>

<Image src={whitechair1} alt="profileabove" 
                 
         
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


<div>
<Image src={orangechair} alt="profileabove" 
                 
         
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












































  {/*end div2*/}</div>





      
 {/*end div0*/}</div>
);
}
export default Feutureproduct