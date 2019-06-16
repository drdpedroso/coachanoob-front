import React from 'react'
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react'
import Button from '../Button'

const PropertyCard = (props) => {
    return (
        <Card>
            <Image src={props.item.photos[0]} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.item.title}</Card.Header>
                <div>
                    R$ 500.000,20
                </div>
                <Card.Description>
                    {props.item.description}
                </Card.Description>
                <Card.Description>
                    {props.item.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button fluid> Enviar Proposta</Button>
            </Card.Content>
        </Card>
    )
};

PropertyCard.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default PropertyCard
