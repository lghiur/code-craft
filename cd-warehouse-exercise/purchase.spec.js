const purchase = require('./purchase');

const checkPaymentDetails = ({number}) => {
  return number === '5678';
}

describe("Purchase CDs", () => {
  it('can fail because of payment failure', () => {
    expect(purchase({title: 'Album One', artist: 'Maroon 5'}, { number: '1234', type: 'Visa'}, checkPaymentDetails)).toEqual('Payment has failed');
  });
  it('can succeed for valid payment details', () => {
    expect(purchase({title: 'Album One', artist: 'Maroon 5'}, { number: '5678', type: 'Visa'}, checkPaymentDetails)).toEqual('Payment successful')
  });
});