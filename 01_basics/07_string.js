const name ="sandeep";
const repoCount=50;

console.log(name +repoCount+" value"); // old type to concat String 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new type to concat String  

const gameName=new String('sandeep');

console.log(gameName[0]); // s
console.log(gameName.__proto__); // 

console.log(gameName.length);
console.log(gameName.toUpperCase());// SANDEEP
console.log(gameName.charAt(2)); // n
console.log(gameName.indexOf('a'));// 1

const newString =gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-5,4);
console.log(anotherString);

const str1="      kumar      ";
console.log(str1);
console.log(str1.trim());



const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));//replace method in the string.

console.log(url.includes('sandeep')); // false
console.log(url.includes('hitesh')); // true

const text="san-de-ep-ku-mar-je-na";
console.log(text.split('-'));



