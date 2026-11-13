import { X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
type AddListProps = {
    setIsAddListOpen: Dispatch<SetStateAction<boolean>>,
    addTodoList: (title:string) => void
}

export default function AddList({ setIsAddListOpen, addTodoList }: AddListProps) {
    function addList(formdata: FormData) {
        const title = (formdata.get('title') as string ?? "").trim()
        if(title !== ""){
            addTodoList(title)
        }
    }
    return (
        <form action={addList} className=" bg-black flex flex-col gap-3 w-70 p-3 rounded-lg " >
            <input type="text" name="title" placeholder="Enter list name..." className="  border-2 border-blue-300/40 bg-[#1f1f21] text-gray-500 font-bold text-md p-1 rounded-lg outline-none " />
            <div className=" flex items-center gap-2 " >
                <button className=" p-1 px-3 bg-blue-700 rounded  " >Add list</button>
                <button onClick={() => setIsAddListOpen(prev => !prev)} className=" cursor-pointer " ><X size={18} /></button>
            </div>
        </form>
    )
}