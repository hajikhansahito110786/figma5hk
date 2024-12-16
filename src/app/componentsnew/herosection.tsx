import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const Herosection = () => {
  return (
    

<div
className='width: 1740px;
height: 850px;
gap: 0px;
opacity: 0px;
flex items-center justify-evenly
bg-[#F0F2F3]
'
>
{/* start pic chair div*/}
<div className='width: 557px;
height: 337px;
top: 229px;
left: 70px;
gap: 0px;
border-radius: 8px 0px 0px 0px;
opacity: 0px;
'>
<p className='
text-[14px]
width: 177px;
height: 14px;
top: 229px;
left: 70px;
gap: 0px;
opacity: 0px;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0.12em;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;


'>
Welcome to chairy
</p>
<p className='
text-[60px]
width: 557px;
height: 198px;
top: 267px;
left: 70px;
gap: 0px;
opacity: 0px;

font-family: Inter;
font-size: 60px;
font-weight: 700;
line-height: 66px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;



'>
Best Furniture
Collection for your
interior.
</p>


<button
className='
bg-[#029FAE]
width: Hug (171px)px;
height: Hug (52px)px;
top: 514px;
left: 70px;
padding: 14px 24px 14px 24px;
gap: 20px;
border-radius: 8px 0px 0px 0px;
opacity: 0px;



'
>
Shop Now

</button>
 

  </div>

  <div >

    <Image src={"/assets/BG.png"} alt ='hero-image' width={434} height={584} />


  </div>
{/* end pic chair div*/}
</div>



  







 
  )
}

export default Herosection