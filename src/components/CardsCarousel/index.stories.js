import React from 'react';
import {storiesOf} from '@storybook/react';
import CardCarousel from './';

storiesOf('CardCarousel', module)
    .add('with default', () => (
        <div>
            <CardCarousel/>
        </div>
    ))

