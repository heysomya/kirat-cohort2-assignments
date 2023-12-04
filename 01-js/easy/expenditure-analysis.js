/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];
  for (let transaction of transactions) {
    let found = false;
    for (let item of result) {
      if (item.category == transaction.category) {
        item.totalSpent += transaction.price;
        found = true;
        break;
      }
    }

    if (found == false) {
      let newCategory = {};
      newCategory['category'] = transaction.category;
      newCategory['totalSpent'] = transaction.price;
      result.push(newCategory);
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
