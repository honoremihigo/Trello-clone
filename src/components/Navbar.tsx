import { Bell, CircleQuestionMark, LayoutGrid, Megaphone, Search } from "lucide-react";
import logo from '/src/assets/images/trello_logo.png'
import LinkItem from "./NavbarItems/LinkItem";
import profile from '/src/assets/images/passport.jpeg'

export default function Navbar(){
    return(
        <div className=" flex item-center justify-between p-3" >
            <div className=" flex items-center gap-5 " >
                <a href="">
                    <LayoutGrid size={20} color="white" />
                </a>
                <a href="" className=" w-7 " >
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className=" flex items-center gap-5 " >
                <div className=" flex items-center gap-2 relative " >
                    <Search size={15} className=" absolute left-1 " />
                    <input type="text" placeholder={`Search`} className=" placeholder:text-md border w-200 p-2 rounded-lg px-6 text-sm " />
                    <button className=" p-2 px-4 bg-blue-400 text-black font-semibold rounded-lg flex items-center justify-center " >Create</button>
                </div>
                <div className=" flex items-center gap-4 " >
                    <LinkItem Icon={Megaphone} />
                    <LinkItem Icon={Bell} />
                    <LinkItem Icon={CircleQuestionMark} />
                    <img src={profile} alt="" className=" w-7 rounded-full " />
                </div>
            </div>
        </div>
    )
}