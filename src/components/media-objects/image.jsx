import { StyledImage } from "./styled";

export const Image = ({ src }) => {
  return <StyledImage data-testid="image-element" src={src} />;
};
