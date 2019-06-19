import React from 'react';
import Breadcrumb from './index'
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

const items = [
    {path: '/', text: 'Home'},
    {path: '/user', text: 'User'},
]
it('renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter initialEntries={['/']}><Breadcrumb items={items}></Breadcrumb></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should change breadcumb and set active', () => {
    const component = render(<MemoryRouter initialEntries={['/']}><Breadcrumb items={items}></Breadcrumb></MemoryRouter>)
    const lastBreadcrumb = component.getByTestId(items[1].text)
    expect(lastBreadcrumb.className.includes('active')).toBe(true)
});
