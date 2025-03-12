
/*
datatypes is two types:(accoding to storage and access the data from memory)
 1.primitive 
 2.non-primitive
 */

// primitive
// 7 types: String, number, Boolean , null, undefined,Symbol, BigInt 

 const score = 100; // number 
 const scorevalue = 100.3; // number 
 const isLoggedin=false;//boolean
 const outsideTemp=null;//null
 let userEmail;//undefined 
 const bigNumber=3767686836788888904938438n;// bigInt (we add 'n' after a  number then it's datatypes is bigInt ).

const id=Symbol('123'); // symbol
const anotherId=Symbol('123');  // symbol
console.log(id===anotherId);// output is false.
    //note:symbol is stands for the unique.
    // so if we type string,number in the then it data types is symbol not other datatypes. 
    // if we also compair the one symbol type variable to another then it also not same.


// Reference/Non primitive
// Array , object , Funtion

 const heros=["shaktiman","naagraj","doga"]; // arrays

 let myobj={
    name:"sandeep",
     age:22,
   }   // objects (basically what is written in the block court it is Object. we can store the in a variable.)

   
   const myfun= function(){
    console.log("hello world")
  } // funtion (we can also store the funtion in  variables)

//   all data typesof is
  //  console.log(typeof score ); // o.p: number
  //  console.log(typeof scoreValue); //o.p: number
  //  console.log(typeof isLoggedin );//  o.p: boolean
  //  console.log(typeof outsideTemp );//o.p:object
  //  console.log(typeof userEmail);// o.p: undefined
  //  console.log(typeof bigNumber);// o.p: bigInt
  //  console.log(typeof id);//o.p:symbol

  //  console.log(typeof heros) // object
  //  console.log(typeof myobj) // object
  //  console.log(typeof myfun) //object funtion


  // datatypes of datatypes:
          console.log(typeof Number ); //function
          console.log(typeof BigInt ); // funtion 
          console.log(typeof String ); // funtion 
          console.log(typeof null );  //Object
          console.log(typeof undefined ); // undefined
          console.log(typeof Symbol );  // funtion 
          console.log(typeof Boolean ); // funtion 

          console.log(typeof Array ); //function
          console.log(typeof Object ); // function
          console.log(typeof myfun ); // function
       
          // note:  javascript is dynamic or static language ? .( ans.=dynamic language)
        //JavaScript is a dynamic language, meaning that variables can hold different types of values during runtime. In a dynamically-typed language, the interpreter assigns a type to a variable based on the variable's value at the time. 

        