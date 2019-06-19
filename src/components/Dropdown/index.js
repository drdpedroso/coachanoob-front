import React from 'react'
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react'

const BaseDropdown = (props) => {
    return (
        <Dropdown
            {...props}
            onClick={props.onClick}
        />
    )
};

BaseDropdown.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default BaseDropdown
