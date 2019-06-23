// @flow
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Menu} from 'semantic-ui-react'
import styled from "styled-components";


const MenuItem = styled(Menu.Item)`
    border: 0.5px solid ${props => props.white ? 'white' : 'black'} !important;
    font-size: 1.23em;
    color: ${props => props.white ? 'white !important' : ''}
`

const MenuContainer = styled(Menu)`
    justify-content: center;
    width: 100%;
`

const RadioButtonGroup = (props) => {
    const [activeItem, setActiveItem] = useState(null)

    const handleItemClick = (e, {name}) => {
        setActiveItem(name)
        return props.onItemClick(name)
    }

    const mountMenuItem = (item): Menu.Item => {
        return (
            <MenuItem
                name={item.value}
                active={activeItem === item.value}
                data-testid={item.name}
                key={item.value}
                onClick={handleItemClick}
                white={props.white}
            >{item.name}</MenuItem>
        )
    };

    return (
        <MenuContainer secondary>
            {
                props.items.map(mountMenuItem)
            }
        </MenuContainer>
    )
};

RadioButtonGroup.propTypes = {
    onItemClick: PropTypes.func,
    white: PropTypes.bool,
    children: PropTypes.node,
    item: PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string
    })
};

RadioButtonGroup.defaultProps = {
    onItemClick: () => {
    }
}

export default RadioButtonGroup
