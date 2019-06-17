import React from 'react'
import PropTypes from 'prop-types';
import {Card, Image} from 'semantic-ui-react'
import styled from 'styled-components'
import Button from '../Button'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

const COLORS = {
    GREEN: '#36b67e'
}

const PriceText = styled.div`
    color: ${COLORS.GREEN};
    margin-top: 10px;
    font-size: 1.18em;
    font-weight: bold;
`

const InformationRow = styled.div`
    display: flex;
    flex-direction: row;
   
    div {
      margin: 5px 10px 5px 2px;
      color: rgba(0,0,0,.54);
      font-weight: 400;
      font-size: 0.96em;
    }
`

const AddressRow = styled.div`
    margin: 5px 0px;
    span {
        font-weight: 550
    }
`


const PropertyCard = (props) => {
    return (
        <Card>
            <Image src={props.item.photos[1]} wrapped ui={false}/>
            <Card.Content>
                <Card.Header style={{fontSize: '1.12em'}}>{props.item.title}</Card.Header>
                <Card.Meta>
                    <span>{props.item.property.type}</span>
                </Card.Meta>
                <AddressRow>
                    <span>{props.item.property.address.street}</span>
                    <div>{props.item.property.address.neighborhood} - {props.item.property.address.city}</div>
                </AddressRow>
                <InformationRow>
                    <div>
                        <Icon size='small' name="bed"/>
                        3 dormitórios
                    </div>
                    <div>
                        <Icon size='small' name="th"/>
                        3000m2
                    </div>
                </InformationRow>
                <PriceText>
                    R$ 500.000,20
                </PriceText>
            </Card.Content>
            <Card.Content extra>
                <Button fluid positive> Enviar Proposta</Button>
            </Card.Content>
        </Card>
    )
};

PropertyCard.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default PropertyCard
