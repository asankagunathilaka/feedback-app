 import PropTypes from 'prop-types'
 
function Header({ text = 'Feedback UI' ,backgroundColor='rgba(0,0,0,0.4)',textcolor='#ff6a95 ' }) {
   const headerStyle = { 
  backgroundColor: backgroundColor,
  color: textcolor
 }
  return (
    <header style={headerStyle} >
      <div className='container'>
      <h2>{text}</h2>
      </div>
    </header>
  )
}

// Header.defaultProps = {   default props doesn't work for react 18+
//     text: 'Feedback UI', 
// }  

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}


export default Header
