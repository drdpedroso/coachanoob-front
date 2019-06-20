import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import StickyButton from './';
import {Icon, Segment} from "semantic-ui-react";

storiesOf('StickyButton', module)
    .add('with text primary', () => (
        <StickyButton primary onClick={action('clicked')}>Hello StickyButton</StickyButton>
    ))
    .add('with text secondary', () => (
        <StickyButton secondary onClick={action('clicked')}>Hello StickyButton</StickyButton>
    ))
    .add('with icon primary', () => (
        <StickyButton primary onClick={action('clicked')}><Icon name='world'/></StickyButton>
    ))
    .add('with icon secondary', () => (
        <StickyButton secondary onClick={action('clicked')}><Icon name='world'/></StickyButton>
    ))
    .add('with text primary attached bottom', () => (
        <div>
            <Segment attached>
                <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
            </Segment>
            <StickyButton attached='bottom'>Bottom</StickyButton>
        </div>
    ))
    .add('with text primary fluid', () => (
        <StickyButton fluid onClick={action('clicked')}>Hello StickyButton</StickyButton>
    ));
