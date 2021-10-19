// 8 Must Know JavaScript Array Methods
//  https://www.youtube.com/watch?v=R8rmfD9Y5-c&list=PLvFBAcs5-Ef5YWJRTYfZQAeQnDaMNVIrS&index=1


const items = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Albuum',    price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}
]

//====================================
console.log(`========================`);
// [.filter()]
// get/extract all items <=100
const filteredItems = items.filter( i => i.price <= 100);
console.log(`z_filteredItems: ` + filteredItems);

//===================================
console.log(`========================`);
// [.map()]
// map: builds a new structured array
// create a new array with names only
const itemNames = items.map( i => i.name);
console.log('z_itemNames: ' + itemNames);


//===================================
console.log(`========================`);
// [.find()]
// returns the first 'true' found item
const foundItem = items.find(i => i.name === 'Book');
console.log(`z_foundItem: ` + foundItem.name);



//===================================
console.log(`========================`);
// [.foreach()]
items.forEach( i => console.log(`price: ` + i.price));



//===================================
console.log(`========================`);
// [.some()] ~as~ has-any
// return true/false if found any true item
const hasInexpensiveItem = items.some( i => i.price < 100);
console.log(`z_hasInexpensiveItem: ` + hasInexpensiveItem);


//===================================
console.log(`========================`);
// [.every()]
// return true/false if ~all~ items are true
const allItemsLessThan1001 = items.every( i => i.price < 1001);
console.log(`z_allItemsLessThan1001: ` + allItemsLessThan1001);


//===================================
console.log(`========================`);
// [.reduce((currentTotal, item),0)] ...
//  currentTotal: accumulation for each iteration
//  item: starting item
//  0: starting value
const total = items.reduce( (currentTotal, i) => {
        return i.price + currentTotal;
    }, 0 );

console.log(`z_total: ` + total);


//===================================
console.log(`========================`);
// [.includes()]
const numbers = [1,2,4,6,9,0];
const includesSeven = numbers.includes(7);
console.log('z_includesSeven: ' + includesSeven);

