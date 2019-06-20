import React from 'react';
import CardCarousel from './index'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<CardCarousel/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
