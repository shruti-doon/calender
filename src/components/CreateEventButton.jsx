import React,{useContext} from 'react'
import event from '../assets/event.png'
import GlobalContext from '../context/GlobalContext'

const CreateEventButton = () => {
  const {setShowEventModal}=useContext(GlobalContext)
  return (
    <div>
      <button 
      onClick={()=>setShowEventModal(true)}
      className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl bg-white hover:bg-slate-300 '>
        <img src={event} className='w-9 h-9'></img>
        <p className='text-s font-mono mx-1 '>add event</p>
      </button>
    </div>
  )
}

export default CreateEventButton
