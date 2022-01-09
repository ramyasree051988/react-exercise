import { render, screen } from '@testing-library/react';
import {Video} from './';

describe('Video',()=>{
    test('renders', () => {
        render(<Video />);
        const videoElement = screen.getByTestId("video-element");
        expect(videoElement).toBeInTheDocument();
      });
});