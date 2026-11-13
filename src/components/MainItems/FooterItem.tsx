import {  type LucideIcon } from "lucide-react"

export type FooterItemType ={
    id: number,
    Icon: LucideIcon,
    title: string,
    isClicked: boolean,
    handleOnClick?: () => void
}
export type FooterItemProps = {
    footerItem:FooterItemType,
    handleIsClicked: (id:number) => void
}
export default function FooterItem( {footerItem, handleIsClicked} : FooterItemProps){
    const { id,Icon, title, isClicked, handleOnClick } = footerItem
    function handleAll(){
        handleIsClicked(id)
        if(handleOnClick){
            handleOnClick()
        }
    }
    return(
        <div className={` ${ isClicked ? 'bg-blue-500/25 ' : 'hover:bg-gray-600/40'} flex gap-1 items-center  p-1 rounded-md px-3   font-semibold  transition-all cursor-pointer ` } onClick={handleAll} >
            <Icon size={18}  className={ isClicked ? 'text-blue-500' :'' } />
            <p className={` ${ isClicked ? 'text-blue-500': '' } text-sm  `}   >{title}</p>
        </div>
    )
}