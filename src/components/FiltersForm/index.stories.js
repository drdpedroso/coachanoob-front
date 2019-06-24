import React from 'react';
import {storiesOf} from '@storybook/react';

import FiltersForm from './';
import {ContextProvider} from "../../state/state";

storiesOf('FiltersForm', module)
    .add('with text primary', () => (
        <ContextProvider><FiltersForm/></ContextProvider>
    ))

