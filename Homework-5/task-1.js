"use strict"

const Account = function(login, email, getInfo){
  this.login = login;
  this.email = email;
  this.getInfo = function(){
    console.log(`Login: ${email}, Email: ${login}`)
  }
}
console.log(Account.prototype.getInfo); // function
const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account('Poly','poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com

      