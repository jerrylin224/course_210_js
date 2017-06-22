function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function(n) {
    return n.id === inventoryItem;
    })
}