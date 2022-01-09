import { StyledLayout } from "./styled";
import { Video, Image } from "../media-objects";

export const ResultArea = ({ media }) => {
  return (
    <StyledLayout>
      {media ? media.map((item) => {
        const isVideo = item.includes("mp4");
        return isVideo ? <Video src={item} /> : <Image src={item} />;
      }): <div>Loading...</div>}
    </StyledLayout>
  );
};
