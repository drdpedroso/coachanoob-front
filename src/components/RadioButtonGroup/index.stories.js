import React from 'react';
import {storiesOf} from '@storybook/react';
import RadioButtonGroup from './';

const items = [
    {name: '1+', value: 1},
    {name: '2+', value: 2},
    {name: '3+', value: 3},
    {name: '4+', value: 4},
    {name: '5+', value: 5},
]

const itemsText = [
    {name: 'Texto 1', value: 1},
    {name: 'Texto 2', value: 2},
    {name: 'Texto 3', value: 3},
    {name: 'Texto 4', value: 4},
]

storiesOf('RadioButtonGroup', module)
    .add('with text primary', () => (
        <RadioButtonGroup items={itemsText}/>
    ))

    .add('with number', () => (
        <RadioButtonGroup items={items}/>
    ))

