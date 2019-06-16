import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import FirstLoginForm from './';

storiesOf('FirstLoginForm', module)
    .add('with default', () => (
        <FirstLoginForm onSubmit={(val) => action(val)} />
    ))
    .add('with error', () => (
        <FirstLoginForm onSubmit={(val) => action(val)} error={{content: 'Error content message', header: 'Something went worng'}}/>
    ))

