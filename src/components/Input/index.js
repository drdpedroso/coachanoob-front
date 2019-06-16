import React from 'react'
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'

const BaseInput = (props) => {
    return (
        <Input {...props} onChange={props.onChange} />
    )
};

BaseInput.propTypes = {
    onChange: PropTypes.func
};

export default BaseInput
