// import { useState } from "react"

import { useDraggable } from "@dnd-kit/react"
import type { Task } from "../types/Task"

type TaskProps = {
    task: Task
    onChangeChecked: () => void,
}

export default function TodoItem({ task, onChangeChecked }: TaskProps){
    const { ref } =useDraggable({
        id: task.id
    })
    return(
        <div ref={ref} className=" bg-[#1f1f21] flex items-center gap-2 px-5 py-3 rounded-xl relative  group" >
            <input type="checkbox" className={ ` ${ task.finished? ' opacity-100' : 'group-hover:opacity-100 opacity-0 ' } transition-all  appearance-none  p-2 rounded-full border  checked:bg-green-700 cursor-pointer checked:border-0 `} checked={task.finished} onChange={onChangeChecked}/>
            <span className={` ${task.finished ? 'left-11' : 'group-hover:left-11 left-5'} text-md absolute  transition-all`}>{task.title}</span>
        </div>
    )
}