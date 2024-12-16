import Image from "next/image"
import img from "./butterfly1.jpg"

import Api1 from "./api/api1";
import Api2 from "./api/api2";
import Create from "./api/desks/page";


export default async function Sidebar() {
 
 
      return (
        <div className="bg-blue-400  h-screen flex flex-col items-center p-3">
          
         {/*image*/}
         <Image src={img} alt="profile" width={100} height={100} className="roundded-md" />
         <div className="mt-4">

        
          {/*name*/}
          <h1 className="text-xl font-semibold tracking-tight uppercase">
          haji khan
            </h1>
            <h1 className="text-xl font-semibold tracking-tight ">
          web developer
          <p>My API Books below </p>
          <div>



</div>

            </h1>
            </div>
           {/*social mediaimage*/}
            {/*cv button */}
        { <Api1/>}
        { <Api2/>}
        {<Create/>}
        </div>
      );
    }