import type { LucideIcon } from "lucide-react/types"

type LinkItemProp ={
    Icon: LucideIcon
}
export default function LinkItem({Icon}: LinkItemProp){
    return(
        <a href="" className=" hover: " >
            <Icon size={20}/>
        </a>
    )    
}