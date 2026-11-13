import { FilePlusCorner, Lightbulb, Plus, X } from "lucide-react";
import { useState } from "react";
type AddTodoItemProps = {
    addTodo: (title: string) => void
}

export default function AddTodoItem({ addTodo }: AddTodoItemProps) {
    const [isAddItemOpen, setIsAddItemOpen] = useState(false)
    function handleOpenAddItem() {
        setIsAddItemOpen(prev => !prev)
    }
    function handleFormSubmit(formdata: FormData) {
        const title = (formdata.get('todoitem') as string ?? "").trim()
        if (title !== "") {
            addTodo(title)
        }
    }
    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit();
        }
    }
    return (
        <div>
            {
                isAddItemOpen ?
                    <form action={handleFormSubmit} className=" flex flex-col gap-3  " >
                        <textarea name="todoitem" onKeyDown={handleKeyDown} placeholder=" Enter a title or paste a link " className="w-full bg-[#1f1f21]  outline-none p-2 rounded-lg"  ></textarea>
                        <div className=" flex items-center gap-3 " >
                            <button className="bg-blue-500 p-2 rounded-lg text-black font-semibold cursor-pointer " >Add card</button>
                            <button className=" text-white flex items-center gap-1 bg-purple-700/50 border border-gray-500 p-2 rounded-lg " >
                                <Lightbulb size={18} />
                                Tip
                            </button>
                            <button className="cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition-all " onClick={handleOpenAddItem}  ><X size={18} /></button>
                        </div>
                    </form>
                    :
                    <div className="flex items-center gap-4" >
                        <button className=" flex items-center gap-2 hover:bg-gray-600/30 cursor-pointer transition-all p-2 rounded w-full " onClick={handleOpenAddItem} >
                            <Plus size={18} />
                            Add a card
                        </button>
                        <button><FilePlusCorner size={18} /></button>
                    </div>
            }
        </div>
    )
}