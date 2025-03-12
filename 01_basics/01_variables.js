
const accountId=144; // we can not change the value
let accountEmail="demo@gmail.com";// we can change the value 
var accountPassword="1234567"; // we can chage the value but prefer not use in  ver 
accountCity="Bhubanaswar";

// accountId=2; // is not allowed because we cannot change the const. variable.
accountEmail="sandeep@gmail.com";
accountPassword="1221";
accountCity="Cuttack"; // javascript is save language so we can storage value with out write const,var. but prefer not to use 

let accountState;

console.log(accountId);

/*
 prefar not to use var 
 because of issue in block scope and funtional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);