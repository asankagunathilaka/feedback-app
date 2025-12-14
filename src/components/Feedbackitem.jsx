import { FaTimes , FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function Feedbackitem({item}) {
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}> 
    <div className="num-display">{item.rating}</div>
    <button className='edit' onClick={()=>{editFeedback(item)}}>
      <FaEdit color='purple'/>
    </button>
    <button className='close'  onClick={()=>{deleteFeedback(item.id)}}>
      <FaTimes color='purple'/>
    </button>
     <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default Feedbackitem
