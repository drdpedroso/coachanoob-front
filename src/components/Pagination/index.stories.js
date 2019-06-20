import React from 'react';
import {storiesOf} from '@storybook/react';

import Pagination from './';

storiesOf('Pagination', module)
    .add('with default', () => (
        <Pagination totalPages={10}/>
    ))

    .add('with default and second page active', () => (
        <Pagination totalPages={10} defaultActivePage={2}/>
    ))

