// import React from 'react'
import PropTypes from 'prop-types'

// This is a REUSABLE component

// we run the param ,! set in button call in Header !, here into the object to give those props to the button
const Button = ({ color, text, onClick }) => {
      // we set a func directly on this button
      

      return (<button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'> {text} </button>)
}


Button.defaultProps = {
      color: 'steelbue',

}

Button.propTypes = {
      text: PropTypes.string,
      color: PropTypes.string,
      onClick: PropTypes.func,
}



export default Button
