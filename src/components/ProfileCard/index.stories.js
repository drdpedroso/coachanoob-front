import React from 'react';
import {storiesOf} from '@storybook/react';

import ProfileCard from './';
import {Listing} from "../../../models/Listing"

storiesOf('ProfileCard', module)
    .add('with text primary', () => (
        <div style={{padding: 10}}>
            <ProfileCard item={Listing}/>
        </div>
    ))

    .add('with text Carousel', () => (
        <div style={{padding: 10}}>
            <ProfileCard item={Listing} isCarousel arrows/>
        </div>
    ))

    .add('with text primary loading', () => (
        <div style={{padding: 10}}>
            <ProfileCard item={Listing} isCarousel arrows loading/>
        </div>
    ))

