import React from 'react';
import Modal from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Modal />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
