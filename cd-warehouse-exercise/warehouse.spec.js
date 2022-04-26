const Warehouse = require('./warehouse');

describe('CD Warehouse', () => {
  it('adds first cd', () => {
    const warehouse = new Warehouse([]);
    warehouse.add({title: 'Album One', artist: 'Maroon 5'});
    expect(warehouse.getCdCollection()).toStrictEqual([
      {title: 'Album One', artist: 'Maroon 5', quantity: 1}
    ])
  });
  it('adds one more existing cd', () => {
    const warehouse = new Warehouse([{title: 'Album One', artist: 'Maroon 5', quantity: 1}]);
    warehouse.add({title: 'Album One', artist: 'Maroon 5'});
    expect(warehouse.getCdCollection()).toStrictEqual([
      {title: 'Album One', artist: 'Maroon 5', quantity: 2}
    ]);
  });
  it('adds non existing cd', () => {
    const warehouse = new Warehouse([{title: 'Album One', artist: 'Maroon 5', quantity: 2}]);
    warehouse.add({title: 'Album Two', artist: 'Maroon 5'});
    expect(warehouse.getCdCollection()).toStrictEqual([
      {title: 'Album One', artist: 'Maroon 5', quantity: 2},
      {title: 'Album Two', artist: 'Maroon 5', quantity: 1}
    ]);
  });
  it('removes a specific cd from the stock quantity', () => {
    const warehouse = new Warehouse([{title: 'Album One', artist: 'Maroon 5', quantity: 2}]);
    warehouse.remove({title: 'Album One', artist: 'Maroon 5'});
    expect(warehouse.getCdCollection()).toStrictEqual([
      {title: 'Album One', artist: 'Maroon 5', quantity: 1}
    ]);
  });
  it('removes a specific cd entirely from the stock if is none left', () => {
    const warehouse = new Warehouse([{title: 'Album One', artist: 'Maroon 5', quantity: 1}]);
    warehouse.remove({title: 'Album One', artist: 'Maroon 5'});
    expect(warehouse.getCdCollection()).toStrictEqual([]);
  });
});