import { ChartNoAxesColumn, ChevronDown, Ellipsis, ListFilter, Star, UserRoundPlus, Users } from "lucide-react";
import profile from '/src/assets/images/passport.jpeg'


export default function MainHeader(){
    return(
        <div className=" p-4 bg-blue-700/15 backdrop-blur-md  flex items-center justify-between" >
            <div className=" flex  items-center   gap-3 " >
                <h1 className=" font-bold text-lg   " >My trello</h1>
                <div className=" flex items-start " >
                    <ChartNoAxesColumn className=" rotate-180 " size={20} strokeWidth={4} />
                    <ChevronDown size={20}/>
                </div>
            </div>
            <div className=" flex items-center gap-5 text-white  " >
                <img src={profile} className=" w-7 h-7 rounded-full " alt="" />
                <ListFilter size={18} />
                <Star size={18} />
                <Users size={18} />
                <button className=" flex items-center gap-1 text-sm bg-white text-slate-900 p-2 rounded-lg " >
                    <UserRoundPlus size={18} />
                    Share
                </button>
                <Ellipsis size={18}/>
            </div>
        </div>
    )
}