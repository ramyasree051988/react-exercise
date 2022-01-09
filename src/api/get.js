import { handleAPIErrors } from "../lib";
import { getEncodedParams } from "../utils";
import axios from "axios";

export async function get({ path, params }) {
  const encodedParams = getEncodedParams(params);
  const uri = (encodedParams) ?  `${path}?${encodedParams}` :  path;
  return await axios.get(uri);
}
