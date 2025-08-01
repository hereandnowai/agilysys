// exercise.js
// Day 3: The following code has a bug. Use Copilot to identify and fix it.
function findItem(items, id) {
  for (let i = 0; i > items.length; i++) { // Hint: check the loop condition
    if (items[i].id === id) {
      return items[i];
    }
  }
}
module.exports = findItem;
