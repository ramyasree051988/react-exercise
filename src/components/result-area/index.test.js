import { render, screen } from '@testing-library/react';
import {ResultArea} from './';

describe('ResultArea',()=>{
    test('renders', () => {
        render(<ResultArea />);
        const linkElement = screen.getByText(/loading.../i);
        expect(linkElement).toBeInTheDocument();
      });
});