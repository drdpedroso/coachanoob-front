// @flow
import React from 'react'
import PropTypes from 'prop-types';
import {Card, Image} from 'semantic-ui-react'
import Button from '../Button'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Slider from "react-slick";
import {ArrowContainer, AddressRow, PriceText, InformationRow} from "./style";
import {formatToCurrency} from "../../utils";

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

    const mountCarousel = (): Array<Image> => {
        return (
            props.item.photos.map(photo => {
                return (<Image key={photo} src={photo} fluid/>)
            })
        )
    };

    const getImages = () => {
        return props.isCarousel ? mountCarousel() : <Image src={props.item.photos[0]} fluid/>
    };

    return (
        <React.Fragment>
            <Card style={{width: 330}}>
                <Slider {...settings}>
                    {getImages()}
                </Slider>
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
                            <Icon size='small' name="th"/>
                            {props.item.property.area} m2
                        </div>
                        <div>
                            <Icon size='small' name="bed"/>
                            {props.item.property.bedrooms} dormitórios
                        </div>
                    </InformationRow>
                    <PriceText>
                        {formatToCurrency(props.item.salePrice || 0)}
                    </PriceText>
                </Card.Content>
                <Card.Content extra>
                    <Button fluid positive>Solicitar Parceria</Button>
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
