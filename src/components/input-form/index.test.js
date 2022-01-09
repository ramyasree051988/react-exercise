import { render, screen } from '@testing-library/react';
import {InputForm} from './';

describe('InputArea',()=>{
    test('renders', () => {
        render(<InputForm />);
        const submitButton = screen.getByText(/submit/i);
        expect(submitButton).toBeInTheDocument();
      });
})