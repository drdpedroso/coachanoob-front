import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import FiltersForm from './';
import {Icon, Segment} from "semantic-ui-react";

storiesOf('FiltersForm', module)
    .add('with text primary', () => (
        <FiltersForm/>
    ))

