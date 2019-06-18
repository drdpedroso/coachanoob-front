import React from 'react';
import {storiesOf} from '@storybook/react';

import PropertyCard from './';
import {Listing} from "../../../models/Listing"

storiesOf('PropertyCard', module)
    .add('with text primary', () => (
        <div style={{padding: 10}}>
            <PropertyCard item={Listing}/>
        </div>
    ))

    .add('with text Carousel', () => (
        <div style={{padding: 10}}>
            <PropertyCard item={Listing} isCarousel arrows/>
        </div>
    ))

