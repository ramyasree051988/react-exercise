import { getMediaQuery } from './getMediaQuery';

describe('getMediaQuery function', () => {
    test('it should return one media added if only one is selected', () => {
        expect(getMediaQuery('',true,'image')).toEqual('image');
      });
  test('it should return media added seperated by commas if multiple media is selected', () => {
    expect(getMediaQuery('image',true,'video')).toEqual('image,video');
  });
  test('it should return media removed when there is one unchecked', () => {
    expect(getMediaQuery('image,video,audio',false,'audio')).toEqual('image,video');
  });
});