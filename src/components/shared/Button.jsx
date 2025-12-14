
import propTypes from 'prop-types'

function Button({children,version='primary',type='button',isDisabled='true'}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
    children: propTypes.node.isRequired,
    version: propTypes.string,
    type: propTypes.string,
    isDisabled: propTypes.bool
}

export default Button
