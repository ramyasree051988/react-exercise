import { get } from '../api';


export async function retrieveMedia({path,params}) {
    console.log('path',path,'params',params);
  const media = await get({ path,params });
  return media;
}