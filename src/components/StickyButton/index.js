import React from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonWithSticky = styled(Button)`
    position: fixed;
    top: 10px;
    z-index: 3;
    left: 39%; 
`

const StickyButton = (props) => {
    return (
        <ButtonWithSticky
            {...props}
            onClick={props.onClick}
        >
            {props.children}
        </ButtonWithSticky>
    )
};

StickyButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default StickyButton
