import { getEncodedParams } from './getEncodedParams';

describe('getEncodedParams function', () => {
  test('it should return the encoded params with available params if one of the params is missing', () => {
    expect(getEncodedParams({
        q:'mars',
        media:'image',
        startYear:''
    })).toEqual('q=mars&media=image');
  });
});