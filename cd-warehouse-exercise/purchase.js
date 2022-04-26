const purchase = (cd, paymentDetails, checkPaymentDetails) => {
  if(!checkPaymentDetails(paymentDetails)) {
    return 'Payment has failed';
  }

  return 'Payment successful';
};

module.exports = purchase;