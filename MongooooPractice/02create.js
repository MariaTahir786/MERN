await db.inventory.insertOne({
    item: 'canvas',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }
  });

//   db.inventory.insertMany([{
//     item: 'canvas1',
//     qty: 900,
//     tags: ['cotton1'],
//     size: { h: 28, w: 34, uom: 'cm' }
//   },
//   {
//     item: 'copper',
//     qty: 200,
//     tags: ['cotton2'],
//     size: { h: 28, w: 35.5, uom: 'cm' }
//   },
//   {
//     item: 'canvas3',
//     qty: 10,
//     tags: ['gold'],
//     size: { h: 28, w: 35.8, uom: 'cm' }
//   },
//   {
//     item: 'canvas4',
//     qty: 105,
//     tags: ['zinc'],
//     size: { h: 28, w: 35, uom: 'cm' }
//   },
//   {
//     item: 'canvas5',
//     qty: 103,
//     tags: ['silver'],
//     size: { h: 28, w: 31.5, uom: 'cm' }
//   },
// ])
//run this in mongodb shell to get startted for find command
db.inventory.insertMany([
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);
//find
db.inventory.find({tags:{$in:["red","D"]}})

//And operator
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
//or
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )


//update