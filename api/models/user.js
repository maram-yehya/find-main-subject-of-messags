var fs =require('fs');

 class User {
    constructor(i, m) {
      this.id = i;
      this.message = m;
      fs.appendFileSync('./usersData.txt',m);
      fs.appendFileSync('./usersData.txt',"\n");
      
    }
    getMessage(){
        return this.message;
    }
   
  }
  module.exports=User;
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
//     id:String,
//     message:String
// });

// module.exports =  mongoose.model('User', UserSchema);

