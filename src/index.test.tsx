import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponentTest from './index';


test('render test-1 of the component', () => {
    render(<ComponentTest text="the button" />);
    screen.getByText('the button');
});

test('render test-2 of the component', () => {
    render(<ComponentTest>hello text</ComponentTest>);
    screen.getByText('hello text');
});
