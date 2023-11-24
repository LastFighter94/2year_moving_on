import React from 'react';
import { render, screen } from '@testing-library/react';
import Tests from './Tests';

test('renders learn react link f', (): void => {
    render(<Tests/>);

    const btn = screen.getByRole('testing-test')
    expect(btn).toBeInTheDocument();

});
