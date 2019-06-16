import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import PropertyCard from './';
import {Icon, Segment} from "semantic-ui-react";
import {Listing} from "../../../models/Listing"

storiesOf('PropertyCard', module)
    .add('with text primary', () => (
        <PropertyCard item={Listing} />
    ))

