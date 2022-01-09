import { get } from '../api';


export async function retrieveMedia({path,params}) {
  const media = await get({ path,params });
  return media;
}