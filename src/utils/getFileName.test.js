import { getFileName } from './getFileName';

describe('getFileName function', () => {
  test('it should return the file name', () => {
    expect(getFileName('http://123456~orig.jpg')).toEqual('http://123456');
  });
});