import React from 'react'
import PropTypes from 'prop-types';
import {Card, Image} from 'semantic-ui-react'
import styled from 'styled-components'
import Button from '../Button'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Slider from "react-slick";

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

const ArrowContainer = styled.div`
    width: 44px;
    display: flex !important;
    text-align: center;
    margin: auto;
    height: 100%;
    border-top-left-radius: 1px;
    border-top-right-radius: 2px;
    
    z-index: 2;
    ${(props) => props.right ? 'right: 0;' : 'left: 0;'} 
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,0.24);
        visibility: visible;
    }
    &::before {
        margin: auto;
    }
    
`


const PropertyCard = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <ArrowContainer right> X</ArrowContainer>,
        prevArrow: <ArrowContainer>V</ArrowContainer>,
        arrows: props.arrows,
        slidesToScroll: 1,
        height: 219
    };

    const mountCarousel = () => {
        return (
            <Slider {...settings}>
                {
                    props.item.photos.map(photo => {
                        return (<Image key={photo} src={photo} fluid/>)
                    })
                }
            </Slider>)
    };

    const getImages = () => {
        if (props.isCarousel) {
            return mountCarousel()
        }
        return (
            <Slider {...settings}>
                <Image src={props.item.photos[0]} fluid/>
            </Slider>
        )
    };


    return (
        <React.Fragment>
            <Card style={{width: 330}}>
                {getImages()}
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
        </React.Fragment>
    )
};

PropertyCard.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    arrows: PropTypes.bool,
    isCarousel: PropTypes.bool
};

export default PropertyCard
