import { StyledVideo } from "./styled";

export const Video = ({ src }) => {
  return (
    <StyledVideo data-testid="video-element" controls>
      <source src={src} />
    </StyledVideo>
  );
};
