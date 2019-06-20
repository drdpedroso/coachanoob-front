import React from 'react'
import PropTypes from 'prop-types';
import {Header, Image, Modal} from 'semantic-ui-react'
import FirstLoginForm from '../FirstLoginForm'
import logo from '../../images/logo.png'
import styled from "styled-components";

const ImageStyled = styled(Image)`
    margin: auto;
`

const HeaderContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`

const FirstLoginModal = (props) => {
    return (
        <Modal trigger={props.openModal}>
            <Modal.Content>
                <ImageStyled src={logo} size='small'/>
                <HeaderContainer>{props.header && <Header as="h1">{props.header}</Header>}</HeaderContainer>
                <FirstLoginForm/>
            </Modal.Content>
        </Modal>
    )
};

FirstLoginModal.propTypes = {
    openModal: PropTypes.node,
    header: PropTypes.string,
    children: PropTypes.node
};

export default FirstLoginModal
