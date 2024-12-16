
import Image from "next/image"
import img from "./butterfly1.jpg"



export default function Mcard1() {
  return (
    <div className="h-[90vh] bg-green-400 flex flex-col items-center justify-center ">

<div className="card bg-base-100 w-80 shadow-xl p-5 flex flex-col justify-center items-center" >
 
    <Image
      src={img}
      alt="Shoes" 
      width={200}
      height={200}
      className="rounded-md mx-auto"
      />

  <div className="card-body">
    <h2 className="card-title text-2xl font-bold tracking-tight uppercase">
    Sir  me Haji khan
      <div className="badge badge-secondary">.</div>
    </h2>
    <p>keep cool</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
    
    </div>
  );
}
