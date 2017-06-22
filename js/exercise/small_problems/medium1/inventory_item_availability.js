function isItemAvailable(value, transactions) {
  var total = transactionsFor(value, transactions).reduce(function(sum, element){
    if (element.movement === 'in') {
      return sum += element.quantity;
        } else {
      return sum -= element.quantity;
        }
  }, 0);

  return total > 0;
}