import { Ellipsis, Inbox, ListFilter } from "lucide-react";
import TodoItem from "./TodoItem";
import AddTodoItem from "./AddTodoItem";
import { useState } from "react";
import type { Task } from "../types/Task";
import { nextId } from "./utils/IdGenerator";
type SidebarProps = {
    isInboxCollapse: boolean
}
export default function Sidebar({ isInboxCollapse }:SidebarProps ){
     const [Inboxtasks, setInboxTasks] = useState<Task[]>([{ title: 'help', id:2, finished:false, column:20 }])
     function handleAddTodo(title:string){
             setInboxTasks(prev => [...prev, { id:nextId(), title: title, finished: false , column: nextId()}])
         }
         function toggleCompleted(id: number){
            setInboxTasks(prev => prev.map(todo => todo.id === id ? {...todo, finished: !todo.finished}: todo))
         }
    return(
        <div className={` ${isInboxCollapse ? 'w-0' : 'w-1/5 border '} rounded-2xl overflow-hidden bg-blue-700/15 h-[85svh] border-gray-700 transition-all `} >
            <div className="flex items-center justify-between px-4 py-5 bg-slate-900" >
                <div className=" flex items-center gap-2  " >
                    <Inbox size={20} strokeWidth={2} />
                    <span className=" text-xl font-semibold " >Inbox</span>
                </div>
                <div className=" flex items-center gap-2 " >
                    <ListFilter size={20} />
                    <Ellipsis size={20} />
                </div>
            </div>
            <div className=" px-2 py-5 flex flex-col gap-2  " >
                <AddTodoItem addTodo={handleAddTodo} />
                {
                    Inboxtasks.map(task => <TodoItem key={task.id} task={task} onChangeChecked={()=> toggleCompleted(task.id)} />)
                }
            </div>
        </div>
    )
}