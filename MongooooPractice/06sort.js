//building db
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])




//limit the number of documents output to 1
db.inventory.find().limit(1)//find first doc
b.inventory.find().limit(2)// finds first 2 docs
// achieving pagination using mongo db find and limit
//e.g if we have a blog of documents which consists of pagination and we only want ton fetch pages 1-10 we can chain the query like this 
no=8
pageNo=1
pageNo=2
 db.blogs.find().skip(0).limit(10)
 db.blogs.find().skip((pageNo-1)*no).limit(no)


//skip first
//.skip is mostly used in pagination 
db.inventory.find().skip(1)
db.inventory.find().skip(2)//skips first 2 docs

//qty: 1 means it will sort in increasing order and -1 is decreasing order
db.inventory.find().sort({qty:1})

//descending order of qty
db.inventory.find().sort(
    {qty:-1}//qty: 1 means it will sort in increasing order and -1 is decreasing order
)