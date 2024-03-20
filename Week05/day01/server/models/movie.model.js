const mongoose=require('mongoose')
//step5
//set up schema its a blueprint of data in our database its after setting up config setting

const MoviesSchema = new mongoose.Schema(
    {
        title:{type:String},
        year:{type:Number},
        rating:{type:Number},
        oscarNomination:{type:Boolean}
        

    },
    {
        timestamps:true  //its creating creating at updated at in db 
    }
);

//step 6 //model is a method is a method in mongoose
const Movie=mongoose.model('Movie',MoviesSchema)//Movie is the name of collection in db
module.exports=Movie//exporting this collection in this model so other portion of code can use this movie we imported in controller and used it multiple times