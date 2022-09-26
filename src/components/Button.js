import PropTypes from 'prop-types'
const Button = ({color,text,onclick}) => {
  
  return (
    <button onClick={onclick} className='btn' style={{background:color}}>
      {text}
    </button>
  )
}
Button.defaultProps = {
  color:'steelblue',
  text: 'add'
}
Button.poropTypes = {
  text:PropTypes.string,
  color:PropTypes.string
}

export default Button