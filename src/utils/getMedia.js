import { getFileName } from '../utils';

export const getMedia = (allMedia)=>{
    return allMedia.filter((media)=>{
    const fileName = getFileName(media);
    const mediaLinkType = media.slice(media.length-3);
    const videoType = media.includes('video');
    const extendedName = (mediaLinkType === 'mp4' || mediaLinkType === 'mp3')?'~orig.':'~large.'
    const isRequired = (videoType && mediaLinkType === 'mp4') || (!videoType && mediaLinkType === 'jpg') || (!videoType && mediaLinkType === 'mp3');
    return media  === `${fileName}${extendedName}${mediaLinkType}` && isRequired;
  });
}