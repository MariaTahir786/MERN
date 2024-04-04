const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const {isEmail}=require('validator')

const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'First Name is required'],
        minlength:[2,'First name must be at least 2 characters']
    },
    lastName:{
        type:String,
        required:[true,'last Name is required'],
        minlength:[2,'Last name must be at least 2 characters']
    },

   email:{
        type:String,
        required:[true,'email is required'],
        unique:[true,'Email already exists'],
        validate:[isEmail,'Please enter a valid email']
    },
password:{
    type:String,
    required:[true,'password is required'],
    minlength:[8,'password must be at least 8 characters long']
}

},{timestamps:true})

//middleware

//?middle ware to create virtual field confirmation of password if it matches conform password
//it will compare the password and store password in this virtual variable]
UserSchema.virtual('confirmPassword')//this is built in function in mongoose
.get(()=>this._confirmPassword)
.set((value)=>this._confirmPassword=value)



////middleware 2
//for validation of password and confirm password match
UserSchema.pre('validate',function(next){
    if (this.password!==this.confirmPassword) {
        this.invalidate('confirmPassword','password must match confirmPassword')
    }
    next();
})

//middle3 ware to hash the password before saving to database all this happens before adding to the database
UserSchema.pre('save',function (next) {
    bcrypt.hash(this.password,10)//10 is length of characters of salt from bycrypt hashing
    .then(hash=>{
        this.password=hash;
        next();
    })
})




const User=mongoose.model('User',UserSchema)
module.exports=User