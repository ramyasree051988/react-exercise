import { StyledImage } from "./styled";

export const Audio = ({ src }) => {
  return (
    <audio controls>
    <source src={src} type="audio/ogg" />
    </audio>
  )
};
