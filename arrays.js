function createGroceries() {
  let groceries = ["Banana", "Apple","Chocolate","Gum","Soap","Vegetables"];
  return groceries;
}

function getSecondGroceryItem(groceries) {
  return groceries[1];
}

function getGroceriesCount(groceries) {
  return groceries.length;
}

function getLastGroceryItem(groceries) {
  return groceries[ groceries.length -1];
}
function removeLastGroceryItem(groceries) {
  return groceries.pop();
}

function addNewGroceries(groceries, itemOne, itemTwo) {
  groceries.push(itemOne, itemTwo);
  return groceries;
}
function getFirstThreeGroceryItems(groceries) {
  let FirstThreeGroceryItems = groceries.slice(0, 3);
  return FirstThreeGroceryItems;
}

// 🌶️🌶️🌶️ **Challenge**
function deleteThirdItem(groceries) {
  groceries.slice(2,1);
  return groceries;
}
function insertItemAtBeginning(groceries, item) {
  groceries.unshift(item);
  return groceries;
}
function replaceFirstTwoItems(groceries) {
  groceries.slice(0,2, "ketchup", "chili");
  return groceries;
}

const groceries = createGroceries();

module.exports = {
  groceries,
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
  deleteThirdItem,
  insertItemAtBeginning,
  replaceFirstTwoItems,
};
