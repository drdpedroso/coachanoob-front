import React from 'react'
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react'
import Slider from "react-slick";
import PropertyCard from "../PropertyCard";
import {ArrowContainer} from "../PropertyCard/style";

const isMobile = () => window.innerWidth <= 755

const CardCarousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: isMobile() ? 1 : 3,
        nextArrow: <ArrowContainer right> X</ArrowContainer>,
        prevArrow: <ArrowContainer>V</ArrowContainer>,
        arrows: props.arrows,
        slidesToScroll: 1,
        height: 219
    };
    return (
        <Slider {...settings}>
            <div>
                <PropertyCard loading/>
            </div>
            <div>
                <PropertyCard loading/>
            </div>
            <div>
                <PropertyCard loading/>
            </div>
            <div>
                <PropertyCard loading/>
            </div>
        </Slider>
    )
};

CardCarousel.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default CardCarousel
