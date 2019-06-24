import React from 'react'
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react'

const BaseDropdown = (props) => {
    return (
        <Dropdown
            {...props}
            options={props.options}
            onChange={props.onChange}
        />
    )
};

BaseDropdown.propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node,
    options: PropTypes.array
};

export default BaseDropdown
