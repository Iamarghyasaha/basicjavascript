// const pname="";
// pname="dkdk";--->error
// console.log(pname);

// const age = 18;
// if(age>=18){

//     const age=19;
// }
// else{
//     const age=17
// }
// console.log(age);---> will not throw any error give output 18 because const's blocked scoped

// let userName = "Rakesh";
// console.log(typeof userName);---> give string
// console.log(typeof "Arghya");--->give string

// premitive datatype: here any variable assigned a singel value (Number,string,boolean,undefined,null,bigint)
// Non Premitive datatypes: here any variable can assigned multiple value (object,array(actually array belongs to object in JS))

// let userDetails = {name:"arghya", age:20, Stream:"CSE"};
// console.log(typeof userDetails);---> return object
// console.log(userDetails.name);-->Arghya
// let array = [2,4,6,8,7];
// console.log(typeof array);-->return as object
// for(let i = 0;i<array.length;i++){
//     console.log(array[i]);---->print array
// }


//-----------------------------concatination of string-------------------------------
// let userName = "prakash";
// let age = 55;
// console.log(userName+" is "+age+" years old.");


//-------------------------Template Literals:(practically Used) -------------------------
//   (this is used practically (for readablity and to create multiline literals))
// let userName = "prakash";
// let age = 55;
// console.log(`${userName} is ${age} years old.`)
// console.log(`${userName} is ${age} years old.
// he is a good boy.
// he knows javascript`);---> output will be like 
// O/p: prakash is 55 years old.
//      he is a good boy.
//      he knows javascript


//---------------------------------areathmatic Operators-------------------------
// const x = 13;
// const y = 3;
// console.log(x/y);

// const x = "12";
// const y = "3"; 
// console.log(x+y);--> it will concatinate as string and op will be 123
// console.log(x-y);---> ***all this below will give the actual numaric output as by default 
//                        every arithmatic operator typecast operends to number***
//                  ---> if const x= "12",const y = 3 then also the same only x+y concatinate others 
//                       typecasted to Number
// console.log(x%y);
// console.log(x**y);
// console.log(y**3);
// ----------But If-------

// const x = "apple";
// const y = "banana";
// console.log(x+y);--> only this will give output as "applebanana" others all output will be "NaN" as it can't be 
//                      typecastes
// console.log(x-y);
// console.log(x%y);


//------------------- Js object-----------------
//**********In js object we can use unction inside object and we can access it:**************
// const user = {
//     userName : "Arghya",
//     age: 23,
//     greet(){
//         console.log("hello "+ this.userName);
//     }
// }
// user.greet();

//-----------------Js Arrow Function---------------
// Arrow function {()=>} is concise way of writing JavaScript functions in shorter way.
// They make our code more structured and readable.
// works similar to the function expression as we will do in annonomus function
// let hello = "";
// hello = (/*parameter*/val) => "Hello, this is " + val;
// console.log(hello("universe!"));----->o/p: Hello, this is universe!

// If your arrow function contains no other logic but a return statement, 
// you may omit the curly braces and the return keyword.

// Instead of
// number => { 
//   return number * 3;
// }

// you could write
// number => number * 3; // it automatically return to the function expression

// The following code would be invalid:
// number => return number * 3; // invalid because return keyword must also be omitted!
// number => if (number === 2) { return 5 }; // invalid because if statements can't be returned

// let sumorsub = (x,y)=>x>y?x-y:x+y;
// console.log(sumorsub(15,85))
// console.log(sumorsub(185,85))

//---------------------JS class and obj----------------
// class User{
//     constructor(username,age){
//         this.username = username;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hi ${this.username}, with ${this.age} Good Morning.`)
//     }
// }
// const user1 = new User("Arghya",35);
// console.log(user1);---------> display the object of the class-->o/p: User { username: 'Arghya', age: 35 }
// user1.greet();---------> o/p: Hi Arghya, with 35 Good Morning.


//------------------------typecasting---------------------------
//In the chapter Number Methods, you will find more methods that can be used to convert strings to numbers:
// Method	Description(anydatatype-->Number)
// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

//The global method String() can convert numbers to strings.(anydatatype-->String)
// It can be used on any type of numbers, literals, variables, or expressions:
// Example
// String(x)         // returns a string from a number variable x
// String(123)       // returns a string from a number literal 123
// String(100 + 23)  // returns a string from a number from an expression
//The Number method toString() does the same.

//(anydatatype--->Boolean)
// Boolean("4")--> true
// Boolean("")--> false because empty string
// Boolean("arghya")--> true -->any string will return true unless it's a empty string
// Boolean("")-->false


//-----------------------readline-sync-------------------
// to read input from user we need to install node and in terminal we have to instal readline-sync
// to install---> npm i readline-sync
// readline-sync is a package to intalled to read input from user in terminal
// in terminal (node filename) to run it
//***code****/
// const anyvariabelname = require("readline-sync") ;
// const username = anyvariabelname.question("What is your name?");
// const userbirthyear = anyvariabelname.question("What's you're birthyear?") // datatype is string
// const useremail = anyvariabelname.questionEMail("please tell your email: ")
//                                                      input will invalid until it's a valid email
// console.log(`Hello, ${username} Welcome to my pc`);
// console.log(`your currnt age is ${2023- userbirthyear}`);
// console.log(`Thanks! for your email id.`);
// console.log(`Your email id is ${useremail}`);

//---------------------comaprison operator----------------------
// console.log("apple">"banana"); --> return false. because it checks one by one letters ascii value
// console.log("5">3);--> return true, as areathmatic operator it typecast string to number by convention
// console.log("01"==1);--> it will return true as in previous convection for this reason === strict equality operator comes
// console.log("01"===1); it will be faulse

//----------------------conditional statements------------------
// const rl = require("readline-sync");
// const year = Number(rl.question(" enter the year ?"));
// if(year % 100 === 0){
//     if(year%4 === 0){
//         console.log("Year is leapyear.");
//     }
//     else{
//         console.log("Not leap-year.")
//     }
// }
// else if(year%4===0){
//     console.log("Year is leapyear.");
// }
// else{
//     console.log("Not leap-year.")
// }
// else always works with the immediate upper else 
// if(){}
// if(){}
// if(){}--->for this if 
// else(){}---> this else will be executed
//-------------turnery operators----------------

// const rl = require("readline-sync");
// const marks = rl.question("what marks you get?");
// const message = (marks>40) ? "you pass" : "you fail";
// console.log(message);
// const grade = (marks<40) ? "F": marks<60 ? "B" : marks<80 ? "A" : marks<90 ? "A+" : (marks<95) ? "A+" : "Ecxcellent"
// console.log(grade);

//---------------------------read 3 string and return smallest string-----------------

// const rl = require("readline-sync");
// const str1 = rl.question("Enter string 1:");
// const str2 = rl.question("Enter string 2:");
// const str3 = rl.question("Enter string 3:");
// if(str1.length<str2.length && str1.length<str3.length){
//     console.log(`${str1} is shortest string`);
// }
// else if(str2.length<str1.length && str2.length<str3.length){
//     console.log(`${str2} is shortest string`);
// }
// else if(str3.length<str2.length && str3.length<str1.length){
//     console.log(`${str3} is shortest string`);
// }
// else{
//     console.log("there are 2 or more string with same length");
// }
//----------------------logical operators and truthy, falsy value---------------------
// and &&
// or ||
// not !
// nullish coalescing ??
// Truthy and faulsy value is the outcome of short circuiting
// truthy and falsy value--> if we convert any variable to boolean if they return true then truthy otherwise falsy
// Boolean(Null,undefined,"",0)-->falsy
// const fname = "";
// const nickname = "any";
// console.log(fname || nickname); -- we can use or operator like this also "or" operator return first truthy value
//                                     and if there is no truthy value then return last truthy value

// const a = 12;
// let b;
// console.log(a+b);--->it will return NaN as b is undefined
// console.log(a+(b || 0));---> it will return 12 as b and 0 is falsy it will take last falsy value
//
// unlike || , && is looking for first falsy value and last truthy value,
//                                       that's why we don't use && to give alternative value or short curcuiting


//--------------------------------Nullish coalescing(??)-----------------------------------
// nullish coalescing will only give the alternative value when other one is Null or Undefined(here truthy and
//                                                                              falsy value concept it not used)
// const fname = "Arghya";
// const lname = "";// it's not null, it's a empty string
// let middlename;// undefined
// console.log(fname ?? "No name");--->Arghya
// console.log(lname ?? "No name");--->""
// console.log(middlename ?? "No name");---->no name

//------------------------------- for loop and repeat ---------------------------------
// sum of first 100 natural number
// let sum = 0;
// const n = 100;
// for(let i = 0;i<=n;i++){
//     sum+=i;
// }
// console.log('sum:',sum);
// const rl = require("readline-sync");
// const n = Number(rl.question("Tell me the number :"));
// console.log(sym.repeat(5));-->*****
// console.log(sym.repeat(4));
// console.log(sym.repeat(3));
// console.log(sym.repeat(2));
// console.log(sym.repeat(1));

// for (let i = 0; i<n;i++){
//     console.log("* ".repeat(i+1));
// }
// *
// * *
// * * *
// * * * *
// * * * * *
// for(let i =0;i<n;i++){
//     console.log("* ".repeat(n-i));
// }
// * * * * *
// * * * *
// * * *
// * *
// *
// let sym = "*";
// for(i=0;i<n;i++){
//     console.log(sym.repeat(i+1));
// }
// for(i=0;i<n;i++){
//     console.log(sym.repeat(n-i-1));
// }
//--------------search the vowel---------------
// let inputString = "Arghya is a good boy";
// let vowels = "aeiouAEIOU";
// for(let i = 0;i<inputString.length;i++){
//     if(vowels.includes(inputString[i])){
//         console.log(`vowels is ${inputString[i]} on index ${i}`);
//     }
// }
//--------------- if user enter a number more than 50 then re enter otherwise print-----------

// const rl = require("readline-sync");
// const num = rl.questionInt("enter the number: ");
// while(num>50){
//     const num = rl.questionInt("enter the number: ");
//     if(num<50){
//         console.log(num);
//         break;
//     }
// }
//
//------------------------try catch----------------
// const num = "arghya";
// const arr = [2,75,45];
// try{
//     console.log(num);
//     console.log(username);
// }catch(error){
//     console.log("error occured 404");
//     console.log(error.message);
//     console.log(error.stack);
//     console.log(error.name);
// }finally{
//     console.log("Code is completed")
// }
//
//------------anonymous function----------------
// before declaration we can't call it as we can do in regular function
// let anonymousfunc = function ()=>{
//     console.log("It's a anonymous function");
// }
// anonymousfunc();

// sum of number min and max given by annonymus function

// let sumofnum= function(min,max){
//     let sum = 0;
//     for(let i = min;i<=max;i++){
//         sum = sum +i;
//     }
//     return sum;
// }
// console.log(sumofnum(5,21));

//----------------------How Js works-----------------(see onenote)
// Every browser has its own Js runtime engine
// Inside it there is an environment where the memory allocation and code execution is being done
// It's also called "Execution Context"
// 2 types of execution context:
// 	1. GEC-> global execution context/EC--> only one global execution context
// 	        Browser will always encounter one single JavaScript file.
// 	        For frameworks like react and angular only one bundle.js created
// 	2. FEC-> Functional Executional context--> can be multiple FEC

// Every Execution context has 3 part:
// 	    1. Variable object/argument object: -->memory
// 	    2. Environment for scope and scope chain.
// 	    3. Setting the value of this keyword

// Execution context is created in 2 phases:
// 	1. Creation phase--> go through the code and extract the variable (only with var keyword)and function deceleration And assign them in key and value pair. And store this to Variable object.
// 	2. Execution phase-->create thread of execution(code component)--> single threaded synchronise language (async is also available)

// Execution context:
// 1.Creation phase--> memory to variables and function

// 2.code component / execution phase:
// Here in funcion getsum(num) FEC is created



// Execution Context created in call Stack:
// 	1. GEC created at the buttom
// 	2. FEC will be on top of the GEC
// 	3. If there is Inner GEC will be on the top of FEC
	
// 	Deletion will also be as stack done in LIFO manner
	
	

// Hosting- var & function:
// Hosting is a process whereby you can access the value of a variable or function even before it initialized. 
// It comes from the execution context.
// Hosting-  let const and TDZ(Temporal deadzone):

// Let and const are also hoisted but it's somwwhere at the temporal deadzone
// Temporal deadzone is a time period from where the variable is hoisted and from where the variable is declared.(Let, const are hoisted in other memory space)

// If we try to access any let before initialization, It is shown "Cann't access variable before initialization"
//----------------------------------------------------------------------------------------------------------


//--------------------------------String----------------------------------------------------------------
//
// const str1 = "I am a boy with good manners."
// count G in a string
// const rl = require("readline-sync");
// const str1 = rl.question("enter any string: ")
// let count = 0;
// for(let char of str1){
//     if(char === "g"){
//         count+=1;      
//     }
// }
// show every second item in an string
// console.log(count);
// for(let i = 0;i<str1.length;i+=2){
//     console.log(str1[i])
// }
// -------------------------charAt() and charCodeAt() and String.fromCharCode(ascii code)-----------------------
// charAt()--> gives/return the charecter in the passed index parameter
// charCodeAt()-->gives/return the ascii value of the character at a index 
// String.fromCharCode(ascii code)--> convert ascii code to character
// read any string and add one in every character "geek"-->"hffl"

// const rl = require("readline-sync");
// const str1 = rl.question("enter any string: ")
// let newstr ="";
// for(i=0;i<str1.length;i++){
//     let stnum = 0;
//     stnum = str1.charCodeAt(i)+1;
//     stnum = String.fromCharCode(str1.charCodeAt(i)+1);
//     newstr = newstr + stnum;// to print in a single line
// }
// console.log(newstr);
//-------------------------------------------------indexOf()----------------------------------------
// indexOf()--> return the index of a character
// by default it gives the first index
// but we can control it by giving another parameter
// like from which index it should start
// indexOf("character", index to start);
// if any charecter which is not present in given string it will return -1

// const str1 = "I am learning javascript"
// const index = str1.indexOf("j");
// console.log(index);// o/p:14 the index of "j"
// const index2= str1.indexOf("a",8);// o/p:15, starts searching from 8th index
// console.log(index2);
// console.log(str1.indexOf("z"))--> o/p: -1 as character not found
//
// make a arrow function and if character not found print it and if found print the index of the character
//
// let findchar = (str,char)=>str.indexOf(char)=== -1 ?"charecter not found":`character found at index ${str.indexOf(char)}`;
// console.log(findchar("hello this is arghya saha","a")); // o/p:  character found at index 14
//
//---------------------------------------------includes()-------------------------------------------
// return boolean value it can check character as well as a string also
//
//  let str1 = "ram is g good boy"
//  if(str1.includes("good")){
//     console.log("good is starts at index "+ str1.indexOf("good"));
//  }
//find vowel in an array
//  const str2 = "zzzz";
//  const vowels = "aeiouAEIOU";
//  let flag = false;
// for(let i = 0; i<str2.length;i++){
//     if(vowels.includes(str2[i])){
//         console.log(`vowel ${str2[i]} found at index ${i}`);
//         flag = true;
//     }
// }
// if (flag === false){
//     console.log("No vowel found")
// }
//var str = "Welcome to GeeksforGeeks.";
// var check = str.includes("o",-2);
// console.log(check);---> o/p: true --> because  if the parameter is nagative then search through 
// the whole string
//
//-------------------------------------toLowerCase() toUpperCase()--------------------------
// this function will not change the main string so we have to store it

// let str1 = "ldvjslj klaslkz jmdalv"
// let str2 = "JKSCND KJSCN LKDVNSL"
// let uppstr = str1.toUpperCase();
// console.log(uppstr);
// let lowerstr = str2.toLowerCase()
// console.log(lowerstr);

//--------------------------------------substring()---------------------------
// substring(starting index,ending index)---> including strating index, excluding ending index
// let str1 = "ldvjslj klaslkz jmdalv"
// console.log(str1.substring(2,3));
// console.log(str1.substring(-1));// it will return the whole string

//-----------------------------------trim() and replace()------------------------

// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string.
// let text = "       Hello World!        ";
// let result = text.trim();
// console.log(result);
// const rl = require("readline-sync");
// const str1 = rl.question("enter any string: ");
// console.log(str1.trim().substring(0,6));
// let text = "jkjsnv kvj ;odkv           "
// let result = text.replace(/\s/g,''); // result will replace all space with no space
// console.log(result);
//
//
//---------------------------------------------------------------------------------------------------------------------------------
//
//----------------------------------------------Array------------------------------------------------------------------------------

//An array can contain different types of data even an array can contain another array and even can contain object also e.g;
// let arrayobj = ["Arghya","akshcsk","cbakbf","kfdvak","lfaklfc",["array","under","arrayy"],{userdettails:{username:"arghya",company:"ltim"}}];
// console.log(arrayobj[6]);//{ userdettails: { username: 'arghya', company: 'ltim' } }
// console.log(arrayobj[6].userdettails.username);// arghya


// let array = ["Arghya","akshcsk","cbakbf","kfdvak","lfaklfc"];

// for(let i = 0;i<array.length;i++){
//     console.log(array[i]);
// }

//---------- ***** for let of ******---------------
// for(let name of array){
//     console.log(name); // this let name will itrate over the array and give 
// }

// ----------**** for let in *****-----------
//  for (let index in array){
//     console.log(index); // (for let in) return index 
//     console.log(array[index]);
//  }
//
// console.log(array[5]); // here out of index don't give error it will give undefined
 
//----------------array referance: and spread operator----------------
// if we copy a array be "=" operatoe it becomes 
// shallow copy: if any of the array updated it will make change to both
// let arr1 =[1,2,3,4,]; // arr1 is referencing to a same memory loacation abc123
// let arr2 = arr1;// arr2 is pointing to the same memory location
// arr2.push(5);// it will add 5 to both array
// console.log(arr1);------->//o/p: [ 1, 2, 3, 4, 5 ]
// console.log(arr2);------->//o/p: [ 1, 2, 3, 4, 5 ]
//
// to avoid this spread [...] operator comes to picture internally it copy by for loop 
// let arr1 =[1,2,3,4,];
// let arr2 =[...arr1] ;
// arr1.push(5);
// console.log(arr1)// [ 1, 2, 3, 4, 5 ]
// console.log(arr2)//[ 1, 2, 3, 4 ]---> by using spread operator a seperate array is created for the copied array
// 
//---------------------------array push() and concat()-----------------
// Mutable object(can be chaged) and Immutable object (can't be changed)
// mutable: array Object; // original array can be manipulated
// immutable: string object; // original string can't be changed

// let str = "arghya kdk  kjdjv";
// str.concat("hello");
// console.log(str); // o/p:arghya kdk  kjdjv --->orginal string not changed
// console.log(str.push("hjj")); // error ---> we can't use push in string

// let arr1 = [4,8,6,8,6];
// arr1.push(8);
// console.log(arr1); // mutable obj the original array chenged //[ 4, 8, 6, 8, 6, 8 ]
// arr1.concat(4); // concacat() does not change the original array  
// console.log(arr1); // [ 4, 8, 6, 8, 6, 8 ]
// arr1.push(8,7,55);// we can add multiple item by push method 
// console.log(arr1); 
// O/P: 
// [
//     4, 8, 6,  8, 6,
//     8, 8, 7, 55
//   ]
// let arr2 = [7,8,9,8];
// arr2.concat(5,6); // concat doesn't change the original object and concat also can concatinate multiple object
// console.log(arr2);
// let arr3 = arr2.concat(5,6); 
// console.log(arr3);//[ 7, 8, 9, 8, 5, 6 ]