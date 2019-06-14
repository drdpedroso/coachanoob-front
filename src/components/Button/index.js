import React from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'

const BaseButton = (props) => {
    return (
        <Button
            {...props}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
};

BaseButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default BaseButton
