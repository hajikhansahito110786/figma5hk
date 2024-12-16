import {NextResponse,NextRequest} from 'next/server'
const DATA_SOURCE_URL="http://jsonplaceholder.typicode.com/todos"

export async function GET(requet:Request){
    const id=requet.url.slice(requet.url.lastIndexOf('/')+1)

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
    const todo:Todo=await res.json();
    if(!todo.id) return NextResponse.json({"message":"nodata"})
    return NextResponse.json(todo)
}

