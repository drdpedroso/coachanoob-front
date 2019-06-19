import React from 'react';
import {storiesOf} from '@storybook/react';

import BaseBreadcrumb from './';
import {MemoryRouter} from "react-router-dom"

const items = [
    {path: '/', text: 'Home'},
    {path: '/user', text: 'User'},
]

storiesOf('BaseBreadcrumb', module)
    .addDecorator(story => ( // Necessary to mock Router (mock Link on menu items)
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('with text primary', () => (
        <BaseBreadcrumb items={items}>Hello Button</BaseBreadcrumb>
    ))
