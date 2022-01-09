import { StyledLayout } from "./styled";
import { Video, Image, Audio } from "../media-objects";

export const ResultArea = ({ media }) => {
  const eleType = (src) => {
    switch (true) {
      case src.includes("mp4"):
        return <Video src={src} />;
      case src.includes("mp3"):
        return <Audio src={src} />;
      case src.includes("jpg"):
      case src.includes("png"):
        return <Image src={src} />;
      default:
        <div>There is no supported media element</div>;
    }
  };
  return (
    <StyledLayout>
      {media ? (
        media.map((item) => {
          return eleType(item);
        })
      ) : (
        <div>Loading...</div>
      )}
    </StyledLayout>
  );
};
