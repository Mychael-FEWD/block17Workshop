// Connect the coffee_data.js file to the index.js file.
const coffeeMenu = require("./coffee_data.js");
console.table(coffeeMenu);

// 2. Print an array of all the drinks on the menu.
const menuDrinks = coffeeMenu.map((drink) => drink.name);
console.log(menuDrinks);
// 3. Print an array of drinks that cost 5 and under.
const drinksFiveAndUnder = coffeeMenu.filter((drink) => drink.price <= 5);
console.table(drinksFiveAndUnder);
// 4. Print an array of drinks that are priced at an even number.
const drinksCostEven = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.table(drinksCostEven);
// 5. Print the total if you were to order one of every drink.
const buyEveryDrink = coffeeMenu.reduce(
  (sum, drink) => (sum += drink.price),
  0
);
console.log(buyEveryDrink);
// 6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal === true);
console.log(seasonalDrinks.map((drink) => drink.name));
// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const drinksImported = seasonalDrinks.forEach((drink) =>
  console.log(`${drink.name} with imported beans`)
);
drinksImported;
