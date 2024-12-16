import { NextRequest, NextResponse } from 'next/server'


export function GET(request:NextRequest) {
  console.log(request)
  const url=request.nextUrl
  //return new NextResponse("hk")
  //const searchParams=url.searchParams.get("name")
  const name=url.searchParams.get("name")
  const age=url.searchParams.get("age")

  const querycheck=url.searchParams.has("name")

  if(name=='hk'){
    return new NextResponse(`hello ${name}`)
  }

  if(querycheck){
    return new NextResponse(`hello 2 ${name}`)
  }
   // return  NextResponse.json({url:url,name:name,age:age})
       return  NextResponse.json({url,name,age,querycheck})
}

