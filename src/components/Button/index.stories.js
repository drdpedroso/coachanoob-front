import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from './';
import {Icon, Segment} from "semantic-ui-react";

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
    .add('with text primary attached bottom', () => (
        <div>
            <Segment attached>
                <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
            </Segment>
            <Button attached='bottom'>Bottom</Button>
        </div>
    ))
    .add('with text primary fluid', () => (
        <Button fluid onClick={action('clicked')}>Hello Button</Button>
    ));
