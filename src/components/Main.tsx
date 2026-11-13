import { Plus } from 'lucide-react'
import MainHeader from './MainItems/Header'
import bg_image from '/src/assets/images/bg-image.jpg'
import AddList from './AddList'
import { useState } from 'react'
import TodoList from './TodoList'
import type { Task } from '../types/Task'
import type { ColumnType } from '../types/TaskList'
import { nextId } from './utils/IdGenerator'
import { DragDropProvider, type DragEndEvent } from '@dnd-kit/react'
type mainProps = {
    isInboxCollapse: boolean
}
export default function Main( { isInboxCollapse }: mainProps ) {
    const [isAddListOpen, setIsAddListOpen] = useState(false)
    const [lists, setLists] = useState<ColumnType[]>([])
    const [tasks, setTasks] = useState<Task[]>([])
    function handleAddListOpen(){
        setIsAddListOpen(prev => !prev)
    }
    function handleAddList(title:string){
        setLists(prev => [...prev, { title: title, id:nextId() }])
        setIsAddListOpen(false)
    }
    console.log(lists)

    function handleDragOverEnd(e: DragEndEvent){
        const { source, target} = e.operation
        if(!target) return;
        
        if(source){
            const taskId = source.id  as Task['id']
            const newColumn = target.id as Task['column']
            setTasks(prev => prev.map(task => task.id === taskId ? { ...task, column: newColumn } : task ))
        }
    }
    return (
        <div className={` relative ${isInboxCollapse ? 'w-full' : 'w-4/5'} rounded-2xl  overflow-hidden z-40 h-[85svh] border border-gray-700 transtion-all duration-500 `} >
            <img src={bg_image} className=' absolute w-full h-full object-cover -z-10 ' alt="" />
            <MainHeader />
            <div className=' p-5 flex gap-4 scrollbar  scrollbar-track-transparent scrollbar-thumb-blue-500/75 overflow-x-auto w-full h-[73svh] items-start ' >
            <DragDropProvider onDragEnd={handleDragOverEnd}>
                {
                    lists.map(list => <TodoList key={list.id} column={list} tasks={tasks.filter(task => task.column == list.id)} setTasks={setTasks} />)
                }
            </DragDropProvider>
                {
                    isAddListOpen ?
                        <AddList setIsAddListOpen={setIsAddListOpen} addTodoList={handleAddList}  /> :
                        <button className=' bg-blue-400/40 flex min-w-60 items-center rounded-lg p-2 px-5  cursor-pointer font-semibold transition-all' onClick={handleAddListOpen} >
                            <Plus/>
                            Add another list
                        </button>
                }
            </div>
        </div>
    )
}
