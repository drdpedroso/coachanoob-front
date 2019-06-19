import React from 'react';
import {storiesOf} from '@storybook/react';
import {MemoryRouter} from 'react-router';
import NavBar from './index'

storiesOf('NavBar', module)
    .addDecorator(story => ( // Necessary to mock Router (mock Link on menu items)
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('with default', () => (
        <NavBar></NavBar>
    ))

