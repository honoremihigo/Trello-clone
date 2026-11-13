import { Ellipsis } from "lucide-react"
import { type Dispatch, type SetStateAction } from "react"
import TodoItem from "./TodoItem"
import AddTodoItem from "./AddTodoItem"
import type { Task } from "../types/Task"
import type { ColumnType } from "../types/TaskList"
import { nextId } from "./utils/IdGenerator"
import { useDroppable } from "@dnd-kit/react"
type todoListProp ={
    column: ColumnType
    tasks: Task[],
    setTasks: Dispatch<SetStateAction<Task[]>>
}

export default function TodoList({column, tasks, setTasks}: todoListProp){
    function handleAddTodo(title:string){
        setTasks(prev => [...prev, { id:nextId(), title: title, finished: false , column: column.id}])
    }
    function toggleCompleted(id: number){
       setTasks(prev => prev.map(todo => todo.id === id ? {...todo, finished: !todo.finished}: todo))
    }
    console.log(tasks)
     const { ref } = useDroppable({
        id: column.id
     });
    return(
        <div className=" bg-black min-w-69 p-3  rounded-lg " >
            <div className=" flex items-center justify-between" >
                <h1 className=" text-md font-semibold capitalize " >{column.title}</h1>
                <div className=" flex items-center gap-2 " >
                    <p className=" text-sm " >{tasks.length}</p>
                    <Ellipsis size={15}/>
                </div>
            </div>
            <div ref={ref} className=" py-2 flex flex-col gap-2 " >
                 {
                tasks.map(task => <TodoItem key={task.id} task={task} onChangeChecked={()=> toggleCompleted(task.id)} />)
                }
            </div>
            <AddTodoItem addTodo={handleAddTodo} />
        </div>
    )
}