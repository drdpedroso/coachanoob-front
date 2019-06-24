import React from 'react';
import {storiesOf} from '@storybook/react';
import {MemoryRouter} from 'react-router';
import NavBar from './index'
import {ContextProvider} from "../../state/state";

storiesOf('NavBar', module)
    .addDecorator(story => ( // Necessary to mock Router (mock Link on menu items)
        <ContextProvider><MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter></ContextProvider>
    ))
    .add('with default', () => (
        <NavBar/>
    ))

