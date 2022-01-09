import { render, screen } from '@testing-library/react';
import {Image} from './';

describe('Image',()=>{
    test('renders', () => {
        render(<Image />);
        const imgElement = screen.getByTestId("image-element");
        expect(imgElement).toBeInTheDocument();
      });
});