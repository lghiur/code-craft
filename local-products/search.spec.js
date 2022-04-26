const searchProducts = require('./search');

describe("when products list is checked", () => {
  it("lists the available products from all local producers within 50km", () => {
    let filters = {
      productType: '',
      consumerLocation: 350
    };

    let inputProducts = [
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 500
      },
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 325
      },
      {
        category: 'vegetables',
        type: 'tomatos',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 375
      }
    ];

    let productCollection = {
      getAllProducts: () => inputProducts
    };

    let resultProducts = [
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 325
      },
      {
        category: 'vegetables',
        type: 'tomatos',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 375
      }
    ];

    expect(searchProducts(productCollection, filters)).toStrictEqual(resultProducts);
  });
});