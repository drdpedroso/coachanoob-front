import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import LoginForm from './';

storiesOf('LoginForm', module)
    .add('with default', () => (
        <LoginForm onSubmit={(val) => action(val)} />
    ))
    .add('with error', () => (
        <LoginForm onSubmit={(val) => action(val)} error={{content: 'Error content message', header: 'Something went worng'}}/>
    ))

