import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

import Button from './';

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with emoji', () => (
        <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));
