import React from 'react';
import renderer from 'react-test-renderer';
import ResponsiveContainer from "./index"

it('renders correctly', () => {
    const tree = renderer
        .create(<ResponsiveContainer> <div> Hey!</div> </ResponsiveContainer>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
