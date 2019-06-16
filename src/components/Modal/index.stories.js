import React from 'react';
import {storiesOf} from '@storybook/react';

import Modal from './';
import {Button, Icon, Image} from "semantic-ui-react"


storiesOf('Modal', module)
    .add('with default', () => (
        <Modal openModal={<Button>Open Modal</Button>}>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
        </Modal>
    ))
    .add('with header', () => (
        <Modal openModal={<Button>Open Modal</Button>} header="I'm the header">
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
        </Modal>
    ))
    .add('with default with scroll', () => (
        <Modal openModal={<Button>Open Modal</Button>} scrolling>
            <div>{[1,2,3,4,5,6,7,8].map(i => (
                <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
            ))}</div>
        </Modal>
    ))

    .add('with header with scroll', () => (
        <Modal openModal={<Button>Open Modal</Button>} scrolling header="I'm the header">
            <div>{[1,2,3,4,5,6,7,8].map(i => (
                <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
            ))}</div>
        </Modal>
    ))

    .add('with header and button', () => (
        <Modal openModal={<Button>Open Modal</Button>} header="I'm the header" action={<Button primary>Proceed <Icon name='chevron right' /></Button>}>
            <div>{[1,2].map(i => (
                <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
            ))}</div>
        </Modal>
    ))

