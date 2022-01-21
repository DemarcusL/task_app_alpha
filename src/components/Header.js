import PropTypes from 'prop-types'
import Button from './Button'

// we can run in props to certain parts by putting them in the params
const Header = ({ title, onAdd, showAdd }) => {

      return (
            
            <header className='header'>
                  {/* when styling inline, use double curly brackets */}
                  <h1 style={{ color: 'white', backgroundColor: 'black' }}>{title}</h1>
                  {/* Using curly braces to add dynamicness to the value */}
                  {/* ... ? ..... : is shorthand for if else */}
                  <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            </header>
      )
}

//we set up defaults so when we set this state, the change will be noticed
Header.defaultProps = {
      title: 'Task Tracker',

}


Header.propTypes = {
      title: PropTypes.string,

}






export default Header