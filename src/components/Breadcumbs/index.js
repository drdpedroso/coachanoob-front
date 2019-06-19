import React from 'react'
import PropTypes from 'prop-types';
import {Breadcrumb, Button} from 'semantic-ui-react'
import {Link} from "react-router-dom"

const BaseBreadcrumb = (props) => {
    const itemsLength = props.items.length - 1

    const mountLinks = (item, index) => {
        return (
            <React.Fragment>
                <Breadcrumb.Section key={item.path} as={Link} to={item.path} data-testid={item.text} active={index === itemsLength}>{item.text}</Breadcrumb.Section>
                {index !== itemsLength && <Breadcrumb.Divider />}
            </React.Fragment>
        )
    }

    return (
        <Breadcrumb>
            {props.items.map(mountLinks)}
        </Breadcrumb>
    )
};

BaseBreadcrumb.propTypes = {
    onClick: PropTypes.func,
};

export default BaseBreadcrumb
