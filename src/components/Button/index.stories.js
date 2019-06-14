import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from './';
import {Icon} from "semantic-ui-react";

storiesOf('Button', module)
    .add('with text primary', () => (
        <Button primary onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with text secondary', () => (
        <Button secondary onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with icon primary', () => (
        <Button primary onClick={action('clicked')}><Icon name='world'/></Button>
    ))
    .add('with icon secondary', () => (
        <Button secondary onClick={action('clicked')}><Icon name='world'/></Button>
    ))
    .add('with texxt primary fixed bottom', () => (
        <Button attached='bottom' onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with text primary fluid', () => (
        <Button fluid onClick={action('clicked')}>Hello Button</Button>
    ));
