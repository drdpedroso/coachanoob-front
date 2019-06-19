// @flow
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Menu} from 'semantic-ui-react'
import styled from "styled-components";


const MenuItem = styled(Menu.Item)`
    border: 0.5px solid black !important;
    font-size: 1.21em;
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
            >{item.name}</MenuItem>
        )
    };

    return (
        <Menu secondary>
            {
                props.items.map(mountMenuItem)
            }
        </Menu>
    )
};

RadioButtonGroup.propTypes = {
    onItemClick: PropTypes.func,
    children: PropTypes.node,
    item: PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string
    })
};

export default RadioButtonGroup
