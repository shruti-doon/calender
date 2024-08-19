import React,{useState,useContext,useEffect} from 'react'
import {getMonth} from './components/util'
import CalenderHeader from './components/CalenderHeader'
import SideBar from './components/SideBar'
import Month from './components/Month'
import EventModal from './components/EventModal'
import GlobalContext from './context/GlobalContext'
console.table(getMonth())
const App = () => {
  const [currentMonth,setCurrentMonth]=useState(getMonth());
const {monthIndex,showEventModal} = useContext(GlobalContext)
useEffect(() => {
  setCurrentMonth(getMonth(monthIndex))},[monthIndex])

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      
      <div className='h-screen flex flex-col'>
        <CalenderHeader/>
        <div className="flex flex-1 ">
          <SideBar/>
          <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
