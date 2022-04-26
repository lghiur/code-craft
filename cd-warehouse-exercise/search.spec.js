const searchCD = require('./cd-seach');
const cdStock = require('./cd-stock');

describe('CD search', () => {
  it('returns the entire list of CDs if no filter is provided', () => {
    expect(searchCD({artist: '', title: ''})).toStrictEqual(cdStock);
  });
  it('can return empty list', () => {
    expect(searchCD({artist: 'Strange band', title: 'Not existing'})).toStrictEqual([]);
  });
  it('can return CDs with the provided title', () => {
    expect(searchCD({title: 'Album one'})).toStrictEqual([
      {artist: 'Maroon 5', title: 'Album one'},
      {artist: 'Iron Maden', title: 'Album one'},
    ]);
  });
  it('can return CDs with the provided artist', () => {
    expect(searchCD({artist: 'Maroon 5'})).toStrictEqual([
      {artist: 'Maroon 5', title: 'Album one'},
      {artist: 'Maroon 5', title: 'Album four'},
    ]);
  });
  it('can return CDs with the provided artist and title', () => {
    expect(searchCD({artist: 'Maroon 5', title: 'Album one'})).toStrictEqual([
      {artist: 'Maroon 5', title: 'Album one'}
    ]);
  });
});