import React from 'react'
import PropTypes from 'prop-types';
import {Modal} from 'semantic-ui-react'

const BaseInput = (props) => {
    return (
        <Modal trigger={props.openModal}>
            {props.header && <Modal.Header>{props.header}</Modal.Header>}
            <Modal.Content>
                <Modal.Description>
                    {props.children}
                </Modal.Description>
            </Modal.Content>
            {props.action && <Modal.Actions>
                {props.action}
            </Modal.Actions>}
        </Modal>
    )
};

BaseInput.propTypes = {
    openModal: PropTypes.node,
    header: PropTypes.string,
    children: PropTypes.node
};

export default BaseInput
