import { comments } from "$lib/comments";
import { json } from "@sveltejs/kit";

export function GET(request){
    const {params} = request
    const {commentid} = params

    const comment = comments.find(item =>{
        return item.id === parseInt(commentid)
    })

    return json(comment,{status:201})

}

export async function PATCH(requestEvent){
    const {params,request} = requestEvent
    const {commentid} = params

    const {text} = await request.json()

    let comment = comments.find(item =>{
        return item.id === parseInt(commentid)
    })
    comment.text = text

    return json(comment,{status:201})
}

export async function DELETE(requestEvent){
    const {params} = requestEvent
    const {commentid} = params

    const index = comments.findIndex((item)=>item.id === parseInt(commentid))
    const deletedItem = comments[index]
    
    comments.splice(index,1)

    return json(deletedItem,{status:201})
    
}