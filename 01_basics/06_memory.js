// ++++++++++++++++++++++ stack and heap +++++++++++++++++++++++++

// Stack( Premitive data types. it give a copy to do operation.) 

//Heap (non-Premitive data types. it give a referance to the memory)

// Stack ---------------->
let myYoutubeName="sandeep Kumar jena";

let anotherName=myYoutubeName;//we give a copy of the myYoutubeName variable to the another variable.
anotherName="chai or code"; 
//so that when we change the variable anotherName ,My youtube name is not change.
 
console.log(myYoutubeName);
console.log(anotherName);


//heap ----------------->
let userOne={
     email:"sandeepkumarjena@gmail.com",
     upi:"5555544444",
}


let userTwo= userOne;//  userTwo can access the reference memory of the userOne 

userTwo.email="jenasandeep@gmail.com"
//so that when we change the userTwo value ,then it will change the userOne value also.
// here we work on same memory location with original velue.


console.log(userOne.email);
console.log(userTwo.email);