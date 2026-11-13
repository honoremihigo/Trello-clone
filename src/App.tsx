import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Footer from './components/MainItems/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [isInboxCollapsed, setInboxCollapsed] = useState(false)
  function handleInboxCollapsed(){
    setInboxCollapsed(prev => !prev)
  }
  console.log(isInboxCollapsed)
  return (
    <div className=' bg-[#1f1f21] h-svh text-gray-300  relative' >
      <Navbar/>
      <div className={` flex ${ isInboxCollapsed ? 'gap-0' : ' gap-5'} p-3 `} >
        <Sidebar isInboxCollapse={isInboxCollapsed} />
        <Main isInboxCollapse={isInboxCollapsed}/>
      </div>
      <Footer handleInboxCollapse={handleInboxCollapsed}/>
    </div>
  )
}

export default App
