import { retrieveMedia } from './retrieveMedia';
import { getOnlyMediaLinks,getMedia } from '../utils';
import { config } from '../config';

export async function retrieveAll(params) {
  const response = await retrieveMedia({path:config.API_ENDPOINT,params});
  const items = response.data.collection.items;
  const data = await Promise.all(items.map(async (item)=>await retrieveMedia({path:item.href})));
  const allMedia = getOnlyMediaLinks(data);
  const requiredFiles = getMedia(allMedia);

  return requiredFiles.slice(0,config.MEDIA_LIMIT);
}
