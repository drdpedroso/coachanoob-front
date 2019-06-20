import React from 'react';
import FirstLoginModal from './index'
import renderer from 'react-test-renderer';
import {Button} from "semantic-ui-react";

it('renders correctly', () => {
    const tree = renderer
        .create(<FirstLoginModal openModal={<Button>Open Modal</Button>}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly with header', () => {
    const tree = renderer
        .create(<FirstLoginModal header="I'm the header" openModal={<Button>Open Modal</Button>}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
