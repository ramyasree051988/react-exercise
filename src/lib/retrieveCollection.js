import { get } from '../api';


export async function retrieveCollection() {
const params = {
    amount:10,
    difficulty:'hard',
    type:'boolean',
    };
  const {response_code,results} = await get({ path: '/api.php',params });
  return {response_code,results};
}