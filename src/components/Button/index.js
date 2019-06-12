import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const getStyle = () => 'bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'

const Button = (props) => {
  return (
      <button
          onClick={props.onClick}
          className={getStyle()}>
        {props.children}
      </button>
  )
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default Button
