import { useState } from "react"
import type { FooterItemType } from "./FooterItem"
import { Calendar, Columns3, Inbox } from "lucide-react"
import FooterItem from "./FooterItem"
type FooterProps = {
    handleInboxCollapse: () => void
}

export default function Footer( { handleInboxCollapse }:FooterProps ){
    const [footerItems, setFooterItems] = useState<FooterItemType[]>([
        { id:1,Icon:Inbox, title:'inbox', isClicked: true , handleOnClick:handleInboxCollapse  },
        { id:2,Icon:Calendar, title:'Planner', isClicked: false  },
        { id:3,Icon:Columns3, title:'boards', isClicked: false  },
        { id:4,Icon:Columns3, title:'switch boards', isClicked: false  },   
    ])
    function handleIsClicked(id:number){
        setFooterItems(prev => prev.map(item => item.id === id ? { ...item, isClicked:!item.isClicked }: item))
    }
    return(
        <div className=" bg-[#1f1f21] border-gray-500 border absolute bottom-[2%] z-50 left-1/3  p-2 px-3  rounded-lg flex items-center gap-2 capitalize " >
            {
                footerItems.map(item => <FooterItem key={item.id} footerItem={item} handleIsClicked={handleIsClicked} />)
            }
        </div>
    )
}