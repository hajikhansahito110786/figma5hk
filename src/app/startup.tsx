import React from 'react'
import Sidebar from './sidebar'
import Detail from './detail'
import Mcard1 from './mcard'
import { MEducation } from './meducation'
import { MSkill } from './mskill'

const Startup = () => {
  return (
    <div>

      <div className="overflow-x-hidden bg-slate-400 h-screen md:hidden">
 {/*    mobileview below */}

hello small screen
{/*card1*/}
<Mcard1/>
  {/*education*/}
<MEducation/>
  {/*skill*/}
<MSkill/>
  {/*project*/}


      </div>
      {/*    destopview below */}
    <div className="hidden md:flex md:overflow-hidden md:h-screen" >

<div className="w-1/15">

<Sidebar/>
</div>

<div className=" w-1/15">@@  </div>
<div className="bg-red-400  w-full">
<Detail/>
</div>


    </div>
    </div>
  )
}

export default Startup