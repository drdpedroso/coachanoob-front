import React from 'react';
import renderer from 'react-test-renderer';
import {Listing} from "../../../models/Listing";
import PropertyCard from "./index";

it('renders correctly', () => {
    const tree = renderer
        .create(<PropertyCard item={Listing}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly with carousel', () => {
    const tree = renderer
        .create(<PropertyCard item={Listing} isCarousel arrows/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
