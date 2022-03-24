// function names(firstName , LastName){
// this.firstName=firstName;
// this.LastName=LastName;}
// const user1= new names('Samar' , 'Alkhamis');
// user1.age=24;

"use strict";
function users(fname,lname,age) {
    this.firstname=fname;
    this.lastname=lname;
    this.age=age;  
}
const user1= new users('samar','alkhamis',24);
console.log(user1);

user1.school='high';
console.log(user1);

