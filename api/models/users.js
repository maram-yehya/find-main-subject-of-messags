class Users {

    constructor(){
        this.dataBase=[];
    }
  
  getMessages( user){
      // console.log(user.getMessage())
      // console.log(this.dataBase)
      return this.dataBase.push(user.message);
  }
 
}
module.exports=Users;