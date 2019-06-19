import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Menu} from 'semantic-ui-react'
import styled from "styled-components";


const MenuItem = styled(Menu.Item)`
    border-color:black;
    
`

const RadioButtonGroup = (props) => {
    const [activeItem, setActiveItem] = useState(null)

    const handleItemClick = (e, {name}) => setActiveItem(name)

    const mountMenuItem = (item) => {
        return (
            <MenuItem
                name={item.value}
                active={activeItem === item.value}
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
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default RadioButtonGroup
