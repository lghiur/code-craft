const searchProducts = require('./search');

const getProductCollection = (inputData) => ({
  getAllProducts: () => inputData
});

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

    expect(searchProducts(getProductCollection(inputProducts), filters)).toStrictEqual(resultProducts);
  });

  it("lists the available products from all local producers at the edge of exactly 50km", () => {
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
        location: 299
      },
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 400
      },
      {
        category: 'vegetables',
        type: 'tomatos',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 401
      }
    ];

    let resultProducts = [
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 400
      }
    ];

    expect(searchProducts(getProductCollection(inputProducts), filters)).toStrictEqual(resultProducts);
  });

  it("lists the available products that matches the location of the consumer", () => {
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
        location: 299
      },
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 350
      },
      {
        category: 'vegetables',
        type: 'tomatos',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 401
      }
    ];

    let resultProducts = [
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 350
      }
    ];

    expect(searchProducts(getProductCollection(inputProducts), filters)).toStrictEqual(resultProducts);
  });
  
  it("shows empty lists if no products are within 50km", () => {
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
        location: 200
      },
      {
        category: 'vegetables',
        type: 'potato',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 250
      },
      {
        category: 'vegetables',
        type: 'tomatos',
        posted_date: '10.03.2022',
        expiration: 2,
        quantity: 50,
        location: 299
      }
    ];

    let resultProducts = [];

    expect(searchProducts(getProductCollection(inputProducts), filters)).toStrictEqual(resultProducts);
  });
});