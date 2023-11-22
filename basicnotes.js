// ------------------------------Variable Initialization and errors -----------------------
// const pname="";
// pname="dkdk";//--->error
// console.log(pname);

// let a;
// a=15;
// console.log(a);---> 15

// var a;
// a=15;
// console.log(a);// 15

// const age = 18;
// if(age>=18){
//     const age=19;
// }
// else{
//     const age=17
// }
// console.log(age);//---> will not throw any error give output 18 because const's blocked scoped, but it it was var it would give 19, because it is function scoped

// let userName = "Rakesh";
// console.log(typeof userName);---> give string
// console.log(typeof "Arghya");--->give string

// premitive datatype: Here any variable assigned a singel value (Number,string,boolean,undefined,null,bigint)
// Non Premitive datatypes: here any variable can assigned multiple value (object,array(actually array belongs to object in JS))

// const num = 5.84875;
// console.log(typeof num);// number

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
// console.log(x+y);--> only this will give output as "applebanana" others all operator's output will be "NaN" as it can't be 
//                      typecastes
// console.log(x-y);
// console.log(x%y);


//------------------- Js object-----------------
//**********In js object we can use function inside object and we can access it:**************
// const user = {
//     userName : "Arghya",
//     age: 23,
//      greet(){
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
// console.log(hello("universe!"));//----->o/p: Hello, this is universe!

// If your arrow function contains no other logic but a return statement, 
// you may omit the curly braces and the return keyword.

// Instead of
// (number) => { 
//   return number * 3;
// }

// you could write
// number => number * 3; // it automatically return to the function expression

// The following code would be invalid:
// number => return number * 3; // invalid because return keyword must also be omitted!
//number => if (number === 2) { return 5 }; // invalid because if statements can't be returned

// let arrowfunc = (number) =>{
//     if(number>5){
//         return 5;
//     }
// }
// console.log(arrowfunc(6));//5

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
// Number()	Returns a number, converted from its argument--> Number("98")// -->98
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

//The global method String() can convert numbers to strings.(anydatatype-->String)
// It can be used on any type of numbers, literals, variables, or expressions:
// Example
// String(x)         // returns a string from a number variable x
//String(123)       // returns a string from a number literal 123
// String(100 + 23)  // returns a string from a number from an expression
//The Number method toString() does the same.

//(anydatatype--->Boolean)
// Boolean("4")--> true
// Boolean("")--> false because empty string
// Boolean("arghya")--> true -->any string will return true unless it's a empty string
// console.log(Boolean(null))//-->false


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
// console.log("01"===1); it will be false

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
// tunery chaining
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
//                                     and if there is no truthy value then return last falsy value

// const a = 12;
// let b;
// console.log(a+b);--->it will return NaN as b is undefined
// console.log(a+(b || 0));---> it will return 12 as b and 0 is falsy it will take last falsy value
//
// unlike || , && is looking for first falsy value and last truthy value,
//                                       that's why we don't use && to give alternative value or short curcuiting


//--------------------------------Nullish coalescing(??)-----------------------------------
// nullish coalescing will only give the alternative value when other one is Null or Undefined
// *******suppose, all values are Null or undefined it will return the last-one************
//
// const fname = "Arghya";
// const lname = "";// it's not null, it's a empty string
// let middlename;// undefined
// console.log(fname ?? "No name");--->Arghya
// console.log(lname ?? "No name");--->""
// console.log(middlename ?? "No name");---->no name
//--------------------------------each value null or undefined----------------------------------------------
// console.log(null ?? null); // null
// console.log(undefined ?? null??"arghya"); // arghya
// console.log( null ??undefined ); // undefined

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
// let sym = "* "
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
// .includes returns a boolean value
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
// if(num<50){
//   console.log(num);
// }
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

// let anonymousfunc = function(){
//   console.log("It's a anonymous function");
// }
// console.log(anonymousfunc());

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
// 	    1. Variable object/argument object: --> memory
// 	    2. Environment for scope and scope chain.
// 	    3. Setting the value of this keyword

// Execution context is created in 2 phases:
// 	1. Creation phase--> go through the code and extract the variable (only with var keyword)and function deceleration And assign them in key and value pair. And store this to Variable object.
// 	2. Execution phase-->create thread of execution(code component)--> single threaded synchronise language (async is also available)

// Execution context:
// 1.Creation phase--> memory to (variables and function)
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

// Let and const are also hoisted but it's somewhere at the temporal deadzone
// Temporal deadzone is a time period from where the variable is hoisted and from where the variable is declared.(Let, const are hoisted in other memory space)

// console.log(a); // undefined because in var hoisting is enabled in same memory space
// console.log(b);// error occured, we can't access let before declaration because is is in tdz
// let b;
// var a;
// console.log(a);//undefined
// function shownum(a){
//   console.log(a);
// }
// shownum(a);//undefined
// a=15;
// console.log(a);//10

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
// for(let i = 0;i<str1.length;i=i+2){
//     console.log(str1[i])
// }
// -------------------------charAt() and charCodeAt() and String.fromCharCode(ascii code)-----------------------
// charAt()--> gives/return the character in the passed index parameter
// charCodeAt()-->gives/return the ascii value of the character at a index 
// String.fromCharCode(ascii code)--> convert ascii code to character
// read any string and add one in every character "geek"-->"hffl"

// const rl = require("readline-sync");
// const str1 = rl.question("enter any string: ")
// let newstr ="";
// for(i=0;i<str1.length;i++){
//     let stnum = 0;
//     //stnum = str1.charCodeAt(i)+1;
//     stnum = String.fromCharCode(str1.charCodeAt(i)+1);
//     newstr = newstr + stnum;// to print in a single line
// }
// console.log(newstr);
//-------------------------------------------------indexOf()----------------------------------------
// indexOf()--> return the index of a character
// by default it gives the first index when the character is present multiple times
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
//substring(starting index,ending index)---> including strating index, excluding ending index
// let str1 = "ldvjslj klaslkz jmdalv"
// console.log(str1.substring(2,3));//v
// console.log(str1.substring(-1));// it will return the whole string
// console.log(str1.substring(2,-1));// ld; return the first 2 index 

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
// replace("what is to be replaced","by which it should be replaced")
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
// let arr1 = [8,9,4,5];
// let arr2 = [7,8,9,8];
// arr2.concat(5,6); // concat doesn't change the original object and concat also can concatinate multiple object
// console.log(arr2);
// let arr3 = arr2.concat(5,6); 
// console.log(arr3);//[ 7, 8, 9, 8, 5, 6 ]
// let arr4 = [7,8,8];
// let arr5 = arr1.concat(arr2,arr3,arr4); // we can concat multiple array to an array 
// console.log(arr5);

//-----------------------------pop() , slice(), splice()----------------------

// pop() = Removes the last element from an array and returns it. 
//         If the array is empty, undefined is returned and the array is not modified.
// slice() = It returns a shallow copy of a slice. It don't change the original array. 
// *****slice(starting index, ending index)*****include starting index but exclude ending index
//           if there is no ending index that means it slice till the end as substring()
//           inside slice if there is negetive index, it means slicing from last part
//           we can do slicing in a string also.
// splice() = It  can delete and as well as add depding upon condition. It changes the
//            original array.The zero-based location in the array from which to start removing elements.
//            Removes elements from an array and, if necessary, inserts new elements in their place, 
//            returning the deleted elements.
//****splice(strating index, no of element to delete)****(including starting index, elemments to delete)
//to add element--->splice(before strating index, 0, "element to add")

// ***pop()***
// let arr1 = [8,9,4,5];
// let poppedelement = arr1.pop();
// console.log(arr1); // pop: will change the actual element
// console.log("popped element :",poppedelement);

// ***slice()***
// let arr1 = [8,9,4,5];
// let slicedelement = arr1.slice(2,3);// slice the index 2 element (index 2 element to index 3(excluded))
// console.log(arr1); // o/p: [ 8, 9, 4, 5 ]
// console.log(slicedelement);// [4]
// console.log(arr1.slice(-1));// [5] ---> -1 means last element (e.g; -2 means last 2 elements)
// console.log(arr1.slice(1,-2));// [9]---> starting index 1 and ending endex last 2 element which is excluded
// console.log(arr1.slice(1)); // [ 9, 4, 5 ] --> it means from index 1 to end 
// let str = ["apple","hello","arghya","jrl"];
// console.log(str.slice(1,2));// o/p: [ 'hello' ]
// let str1 = "arghya";
// console.log(str1.slice(1));// rghya
// console.log(str1.charAt(0).toUpperCase()+ str1.slice(1)); // Arghya

// **** splice()****
// let str = ["apple","hello","arghya","jrl"];
// str.splice(1,2);
// console.log(str); //[ 'apple', 'jrl' ]
// let str1 = ["apple","hello","arghya","jrl"];
// console.log(str1.splice(1)); // [ 'hello', 'arghya', 'jrl' ]
// let str2 = ["apple","hello","arghya","jrl"];
// str2.splice(1,0,"react js")// it will add react js **before** index 1
// console.log(str2); // [ 'apple', 'react js', 'hello', 'arghya', 'jrl' ]
//
//--------------------includes(any)--------------

// return bolean value 
// as string in array also there is include function
// const availablesize =["S","M","L","XL","XXL","XXXL"];
// const rl = require("readline-sync");
// let usersize = rl.question("Enter your size: ");
// if(availablesize.includes(usersize)){
//     console.log("size is available");
// }
// else{
//     console.log("size is not avilable");
// }

//------------------array sort()----------------------
// sort() = it changes the original array and sort in ascending to desending order  
// lexicographical it works as string manner. so, even if we apply on number
//  const fruits = ["apple","mango","orange","banana"];
//  fruits.sort();
//  console.log(fruits);//o/p: [ 'apple', 'banana', 'mango', 'orange' ]
// let arr = [9,8,7,5,4,2,8];
// arr.sort();
// console.log(arr); //[  2, 4, 5, 7, 8, 8, 9]
// let arr1 =[9,8,7,5,4,2,11,22,33,66]
// arr1.sort();
// console.log(arr1)// [11,  2, 22, 33, 4, 5, 66,  7,  8, 9]--> it's  not in sorted manner 
// because it perform sort() operation as string as per convrting themserves to string (UTF 16)
// lexicographically 11's ascii is ascending compared to 2
// So, to make sort() work in number

// let arr1 =[9,8,7,5,4,2,11,22,33,66]
// function makeascsort(a,b){
//     return a-b; // ascending order--> It's comparing value 9 and 8 (9-8) if posetive answer came
//                 // switch position
// }
// function makedescsort(a,b){
//     return b-a;// descending order-->It's comparing value 8 and 9 (8-9) if negative answer came
//     // switch position
// }
// arr1.sort(makeascsort);
// console.log(arr1);// 2,  4,  5,  7,  8, 9, 11, 22, 33, 66
// arr1.sort(makedescsort);
// console.log(arr1)// 66, 33, 22, 11, 9, 8,  7,  5,  4, 2
//
//--------------------------split() reverse() join()-------------------------------
//
// split()---> split(parameter) splits array or string by showing the passing parameters
// split(" ")--> split into different objects whenever it shows space
// reverse()--> reverse the string or object and manipulate the original string
// join()--> join(parameter)--> joins wherever it shows the parameter

//  const inputstr = "he is a good boy"
//  const newstr = inputstr.split(" ");
//  console.log(newstr); // [ 'he', 'is', 'a', 'good', 'boy' ]
//  const newstr2 = inputstr.split("");
// //  console.log(newstr2);
//  // o/p:
// //  [
// //     'h', 'e', ' ', 'i',
// //     's', ' ', 'a', ' ',
// //     'g', 'o', 'o', 'd',
// //     ' ', 'b', 'o', 'y'
// //   ]
// // console.log(newstr2.reverse());
// // o/p:
// // [
// //     'y', 'o', 'b', ' ',
// //     'd', 'o', 'o', 'g',
// //     ' ', 'a', ' ', 's',
// //     'i', ' ', 'e', 'h'
// //   ]
// console.log(newstr2.join("")); // o/p: he is a good boy
//
//---------------------Spread (...)-----------------------

// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

// it actually unpack the array 

// to add  element to array, instead of push we can spread the array and add element to it as well as another array.

// const arr1 = [1,2,3,4,5];
// console.log(arr1); // [ 1, 2, 3, 4, 5 ]
// console.log(...arr1);// 1 2 3 4 5 --> it becomes unpacked,it't not an array anymore.
// const arr2 = [6,7,8,9]
// arr3 = [...arr1,...arr2,10,11,13]
// console.log(arr3);
// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 13
//  ]

//------------------Destructuring Array--------------------

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// suppose we want to store individual value of an array to individual variable it's part of destruction 

// const num = [1,2,3];
// const [a,b,c] = num; // this called destructuring a conatins 1, b contain 2, c conatin 3
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// const array1 = [1,2,3,["arghya","absk","sjdjj"],{username:"arghya"},4,5,6,7]

// const [,,,names,userdetails] = array1; // use this syntax to skip unnecessery elements
// console.log(names); // [ 'arghya', 'absk', 'sjdjj' ]
// console.log(userdetails); // { username: 'arghya' }
// // we can use spread operator to take rest of the elemnt to a single element suppose we wat to take 4,5,6.. destructure to an array
// const[,,,,,...arraydist]= array1; // storing 4, 5, 6, 7  to an array by destructuring the aary
// console.log(arraydist); // [ 4, 5, 6, 7 ]
// console.log(array1);

//
//----------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------Object--------------------------------------


// object literal:
// {key: value}
// const personobj = {
//     username: "arghya", // property
//     comapny: "LTIM",
//     age: 25,
//     tech: ["html","css","javascript","react js"],
//     "is mentor": true // when key is multiword character then we should 
// };
// console.log(personobj.age);// either we can access object with " . "
// console.log(personobj["is mentor"]); // with multiword character we have to access the value like this only
// console.log(personobj["comapny"]);// we can access every elemnt by this way also.
//-----------------------------------functions as property of object-------------------------------------

// const obj ={
//     username : "arghya",
//     greet: function  (){                // either you add function inside object like this by key as function name and parameter as function{}
//                                         // like anyonymous function
//         console.log("Hello! good morning");
//     },
//     bye(){
//         console.log("Bye bye"); // or, directly you can add function declaration 
//     }
// }

// obj.bye(); // Bye bye
// obj.greet();// Hello! good morning

// -----------------------------object computation------------------
// const rl = require("readline-sync");
// const key = rl.question("What is the key: ");
// const course = rl.question("tell the course: ")
// const obj ={
//     username : "arghya",
//     stream : "CE",
//     phone: 9874157553,
//     [course]: "course not available" // this [] bracket tells course is a variable not a direct key
//                                     // whatever course you input it will take as a variable 
// }


// console.log(obj[key]); // by this we can print the value of any provided key
// console.log(`${course}:`,obj[course]); // course not available

//O/P:
// What is the key: username 
// tell the course: react
// arghya
// react: course not available

// //***** add element into obj:****

// obj.usercity = "kolkata"; // we can add element like this
// obj.userstate = "WB";
// console.log(obj);
// {
//     username: 'arghya',
//     stream: 'CE',
//     phone: 9874157553,
//     usercity: 'kolkata',
//     userstate: 'WB'
//   }

//
//------------------- for in on object--------------------

// in object---> for in works different than in array
// by using "in" we  can ensure is the key in the object or not return
// syntax-->"key" in object
// const obj = {
//     username: "arghya",
//     age: 23,
//     address:"Westbengal"
// }
// console.log("age" in obj ); // return true 
// console.log("name" in obj ); // return false
// for(let key in obj){
//     console.log(obj[key]); // it will print entire value of the object
// }
// o/p: 

// arghya
// 23
// Westbengal

//-------------------Object reference & shallow copy-------------

// as array ---> in object aslo take shallow copy and copied object referencing to the main object. 
// in simple words object copied by reference not value
// const obj1 = {
//     username: "Arghya",
//     city:"Kolkata",
//     state:"WB"
// }

// const obj2 = obj1;
// obj1.city= "Hyderabad"
// console.log(obj2); // { username: 'Arghya', city: 'Hyderabad', state: 'WB' } // both changed bechacuse it's saved as reference
// console.log(obj1) // { username: 'Arghya', city: 'Hyderabad', state: 'WB' } // if we add another parameter it will add to both object

// in place of spread operator here we use----***Object.assign(target,source)*** --- to copy object to different object with out storing the reference but it's also a ***shallow copy***

// const obj1 = {
//     username: "Arghya",
//     city:"Kolkata",
//     state:"WB"
// }

// const obj2 = Object.assign({},obj1); // coping to blank object then assign to another object, so, it's not stored by another array's reference. but still it's a shallow copy not a deep copy
// obj1.city ="Hyderabad";
// console.log(obj1); // {username: 'Arghya', city: 'Hyderabad', state: 'WB' }
// console.log(obj2);  // {username: 'Arghya', city: 'Kolkata', state: 'WB' }
// Object.assign(target,source) works poperly when there is no nested object, but in case of nested object it will change the both array if one is manipulated
//
//-----------------------Optional Chaining-----------------
// You can use optional chaining when attempting to call a method which may not exist.
// (object?.attribute1?.nestedattributed)
// const obj1 = 
// {
//         username: "Arghya",
//         address:{
//             city:"Kolkata",// this is nested object
//             state:"WB"
//         },
//         phone: 9874157553
//      }
// console.log(obj1.address.city); // Kolkata
// console.log(obj1.address.landmark); // Undefined
// console.log(obj1.address?.landmark);// undefined // this is Optional Chaining 
// console.log(obj1.place?.landmark);// undefined 
// console.log(obj1?.address?.landmark)// we can do optional chaining that way also(At first it will check obj1 is present of not, if not then return undefined. if found then only check the next attribute)
// the difference between optional chaining normal chaining is when array "obj1.place?.landmark" is searching for its attributes when it sees "?"
// it checks is the place key is present in the object or not. If not then don't check the next attribute just output "undefined" and if found then only check the next attribute
// like variables or properties , with unmentioned function you don't get undefined, you get an error 

//-------------------------------------Destructuring Objects-----------------------------
// let obj1 = {
//     username: "Arghya",
//     address:{
//         city:"Kolkata",// this is nested object
//         state:"WB"
//             },
//      phone: 9874157553
// }
// let {username,address,phone}=obj1; // we have to mention the key inside the empty object o destruct an object
// console.log(username); // Arghya

//-------------------spread in destructing object------------
// let obj2 = {
//     username: "Arghya",
//     address:{
//         city:"Kolkata",// this is nested object
//         state:"WB"
//             },
//      phone: 9874157553
// }
// let{username,...rest} = obj2; // spread operator rest destruct addresss and phone parameter
// console.log(rest);// { address: { city: 'Kolkata', state: 'WB' }, phone: 9874157553 }
//******************************************************
// let obj3 = {
//     username: "Arghya",
//     address:{
//         city:"Kolkata",// this is nested object
//         state:"WB"
//             },
//      phone: 9874157553
// }
//********************************************************/
// let {username : uname, address: useraddress } = obj3; // change key name (username to---> uname) and (address to--> useraddress)
// console.log(uname);// Arghya
// console.log(useraddress); // { city: 'Kolkata', state: 'WB' }
// console.log(username);// it will give error now
//**********************************************************/
// let obj4= {
//     username: "Arghya",
//     address:{
//         city:"Kolkata",// this is nested object
//         state:"WB"
//             },
//      phone: 9874157553
// }
// let {address:{city,state}} = obj4; // for nested object we can destruct like this also then we can access this only with the child object
// let {address:{city}} = obj4; // only city distructed
// console.log(city);// Kolkata
//
//----------------------------------Object Methods-----------------------

// Object.entries(object name);--> retrun array of key value pair in array inside array manner
// Object.keys(object name);-->return array of keys
// Object.values(object name);--> return array of values
// const obj = {
//     uname :"arghya",
//     age: 23,
//     stream: "CE"
// }
// console.log(Object.entries(obj)); // [ [ 'uname', 'arghya' ], [ 'age', 23 ], [ 'stream', 'CE' ] ]
// console.log(Object.values(obj)); // [ 'arghya', 23, 'CE' ]
// console.log(Object.keys(obj));// [ 'uname', 'age', 'stream' ]

//------------------------- this keywords-----------------------

// this keyword: refers to the object that is executing the function

// const obj = {
//     uname :"arghya",
//     age: 23,
//     stream: "CE",
//     greetuser(){
//         console.log(`Hello! ${this.uname} age: ${this.age} stream: ${this.stream}`); // implicit binding
//     }
// };
// obj.greetuser();
// console.log(this); // this is a window object which is in global space
// const obj1 = {
//     uname :"Rafafa",
//     age: 19,
//     stream: "CE",
//     greetuser(){
//         console.log(`Hello! ${this.uname} age: ${this.age} stream: ${this.stream}`); // implicit binding--> here this refers to the object,  but we can't use it with arrow function (if we use this will refer to window object not to the parent object)
//     }
// }

// const obj2 = {
//     uname :"kcnkd",
//     age: 45,
//     stream: "CSE",
//     greetuser(){
//         console.log(`Hello! ${this.uname} age: ${this.age} stream: ${this.stream}`); // implicit binding
//     }
// }
// obj2.greetuser();
// to use greetuser function we have to write the same function with this keyword for another object this called implicit binding
// to overcome this we have Explicit binding
//
//---------------------------function borrowing (Explicit Binding)---> call() apply() bind() ----------------------------------
//
// call apply bind is method of function not object:
// call()--.The call() method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.
// *****************************Syntax: functionname.call(objectname,parameter in string)*************************
//apply()--The apply() method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function.
// in apply we pass extra parameter as array.
//******************************Syntax: functionname.apply(objectname,parameter in array)****************************/
//bind()---The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.
// ******************Syntax:variable = functionname.bind (objectname,parameter in string)***************************
//*******************to add another parameter --> variable(parameter)*********************************************/
// // const obj1 = {
// //     username: "Arghya",
// //     age: 23,
// //     sayname(){
// //         console.log(this.name);// this type of binding function to object is called implicit binding
// //     }
// // }
// // const obj2 = {
// //     username: "ksckas",
// //     age: 25,
// //     sayname(){
// //         console.log(this.name);// this type of binding function to object is called implicit binding
// //     }
// // }
// // const obj3 = {
// //     username: "lmcsl",
// //     age: 30,
// //     sayname(){
// //         console.log(this.name);// this type of binding function to object is called implicit binding
// //     }
// // }

// // sayname()--> function repeted multiple times to reduce this we use function borowing

// const obj1 = {
//     username: "Arghya",
//     age: 23,
// }
// const obj2 = {
//     username: "ksckas",
//     age: 25,
// }
// const obj3 = {
//     username: "lmcsl",
//     age: 30,
// }
// function sayname(degree,batch){
//     console.log(this.username,degree,batch); // explicit binding of this
// }
// sayname.call(obj1,"B.tech","2022"); // Arghya B.tech 2022 // in call() we pass parameters as string
// sayname.call(obj2,"B.tech","2022"); // ksckas B.tech 2022
// sayname.call(obj3,"B.tech","2022"); // lmcsl B.tech 2022

// sayname.apply(obj1,["B.tech", "2022"]); // Arghya B.tech 2022 // in apply() if there any parameters, we pass parameters as array of strings 

// // bind works little different, we have to store the object 

// console.log(obj1); // { username: 'Arghya', age: 23 }
// const res = sayname.bind(obj1,"B.tech"); // takes object as first parameter and store to an variable then call the variable, even you can add more parameters to the variable at the time of calling
// res(); // Arghya B.tech undefined
// res("2022"); // Arghya B.tech 2022 ---> we can pass parameter this way also.
//---------------------------------------- new keyword and constructor function--------------------------------------

//  *** Constructor function technically is a regular function. It has 2 convention. They are named with capital letter first.
// they should be executed only with "new" operator
// it works like class and object pattern

// function User(username,userage){
//     this.name=username,
//     this.age=userage // here this keyword works like, it refers to the object that is executing the function
// }
// const user1 = new User("Arghya",23); // new keyword makes user1 object with parameters
// const user2 = new User("Rahul",22);
// console.log(user1); //User { name: 'Arghya', age: 23 }
// console.log(user2);// User { name: 'Rahul', age: 22 }
// console.log(user1.age); // 23
// console.log(user2.age); // 22
//----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------Higher order Function-----------------------------------------------------

// Pure Function: A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
// It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments.

//  1. It takes an argument
//  2. It should return something
//  3. for same Input you should get the same output
//  4. The result should not be influenced by the outer parameter
//  5. It should not mutate the original argument 

// this is a pure function 
// function addelementtoarray(arr){
//     const newarr = []; // if this newarr[] is declared outside the function the it's not a pure function. When any function can be manipuled by external parameter the  it's not a pure function
//     newarr.push(...arr,5,6); // if we directly manipulate the original array then also it's not a pure array if the original array changed
//     return newarr;
// }
// const arr1 = [1,2,3,4];
// const addedarray = addelementtoarray(arr1);
// console.log(addedarray); // [ 1, 2, 3, 4, 5, 6 ]

//--------------------------------------------------First class function--------------------------------------------------------------

// First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treat function as a first-class-citizens.

// ***********function assigned to a variable****************
// const greet = function(name){    // like here function is trated variables or "So the functions can be assigned to any other variable"
//     console.log("Welcome to Home!",name); 
// }
// greet("Arghya"); // Welcome to Home! Arghya

//************Function takes another function as aurgument */

// function wrapper(){
//     return "Welcome to Home!";
// }
// function greet(name,inner){ // Here we used wrapper function which is passed as an argument (**inner**) ****actually we are passing the reference of the wrapper function
//     console.log(name,inner())// calling the function 
// }
// greet("Arghya",wrapper); // Arghya Welcome to Home!, Here wrapper function passed as an argument like the reference 

// functionname()---> calling the function
// functionname---> this returns the function reference

//************Function returns another function reference **************/

// function greetmsg(){
//     function wrapper(){
//         let name = "Arghya";
//         console.log(name,"Welcome to Home!");
//     }
//     return wrapper; // function returning the reference of an function
// }

// greetmsg(); // it will not output anything;
// greetmsg()(); // to call nested function we use this syntax
// //Or we can;
// const output = greetmsg(); // storing a funtion to a variable and storing the returned value og wrappers reference
// output(); //calling the function by the variable name, )/p: Arghya Welcome to Home!

//----------------------------------------Higher Order Function----------------------------------
// Higher order function: A function that accaetps another function as an argument or returns a function or does the both called Higher Order Function.


// function wrapper(){
//     return "Welcome to Home!";
// }

// //Higher ordeer function

// function greetmsg(name,innerfunc){ //another function as an argument 
//     console.log(name,innerfunc());
// }
// greetmsg("arghya",wrapper);

//HOF
// function diplaymsg(){
//     return function(){
//         console.log("Hello from inner function")
//     }
// }

// const output = diplaymsg();
// output();

// example of using higher order function-->>

// function square(num){
//     return num ** 2;
// }
// function cube(num){
//     return num ** 3;
// }
// function hof(arr,wrapper){ // wrapper is the reference of the function it is equivalent to function hof(arr,square)
//     let newarray =[];
//     for(let num of arr){
//         newarray.push(wrapper(num));
//     }
//     console.log(newarray)
// }
// let array = [1,2,3,4,5]
// hof(array,square);
// hof(array,cube);

//--------------------------------- map() - filter() - reduce() -----------------------------------

// map and filter is higher order function used in array
// it can take function as parameter so higher order function
// map loop over the array
// map returns an array
// The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, the map() method is used to iterate over an array and call function on every element of the array. 

// *********** use of map function ****************
// const arr = [2,4,5,6];
// function square(num){
//     return num ** num;
// }
// const newarray = arr.map(square); //without using for loop, map use to impose function to entire array, so in map it takes function and works like a hof
// console.log(newarray);

// *********** use of map function ****************
// let arr = [2, 5, 6, 3, 8, 9];
// Using map to transform elements

// let newArr = arr.map(function (val,index) { // map can give index also; 
// 	return { key: index, value: val * val };
// })
// // Display output
// console.log(newArr)
//o/p:
// [
//   { key: 0, value: 4 },
//   { key: 1, value: 25 },
//   { key: 2, value: 36 },
//   { key: 3, value: 9 },
//   { key: 4, value: 64 },
//   { key: 5, value: 81 }
// ]
//------------------------------------------filter()------------------------------
// filter is a Higher order function
// The JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. 

//  const arr = [4,5,9,8,1,2,7];
//  const filteredarr = arr.filter(number => number>5); // [ 9, 8, 7 ] // it's equivalent to (number=> return number>5)
//  console.log(filteredarr)

//  const arr1 = [4,16,400,5000,956474,84632,1000,255,755];
//  const zerodivarr = arr1.filter(number=>(number%100 === 0) || (number%4===0));
// console.log(zerodivarr);

//------------------------------------ reduce() -------------------------------------
//The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator. 

// const arr = [1,2,3,4,8,9];
// const reducefunc = arr.reduce((acc,curr)=>acc+curr);
// console.log(reducefunc);

//**********reduce(function,starting value in accumulator)************

// const arr = [1,2,3,4,8,9];
// const reducefun = (acc,curr) => acc+curr;   // accumulator is acc here and curr is current object(curr itreate over the array and take every element as current object ). so it's returning the sum of the object
// // 0 + 1--->1 stored in acc and passed to next
// // 1 + 2--->3 stored in acc and passed to next
// // 3 + 3--->6 stored in acc and passed to next
// // 6 + 4--->10 stored in acc and passed to next
// // 10 + 8--->18 stored in acc and passed to next
// // 18 + 9---> 27 stored in acc and passed to next 
// const output = arr.reduce(reducefun,6); // 6 is the starting value of acc // so it will start like 6 + 1 =7...and 7 is passed to next
// console.log(output); // 6+27 = 33 as 6 is the starting value

// ********************another example***************
// const arr = [1,2,3,4,8,9];
// const reducefunc = (acc,curr) => acc*curr;
// const output = arr.reduce(reducefunc);// if only the fuction reference passed without any parameter that means the starting value is the the first elemet of the array as here the staring value is 1
// console.log(output); // 1728

// // the same written in upper we can do this that way also
// const arr1 = [1,2,3,4,8,9];
// const reducefunc1 = arr1.reduce(((acc,curr) => acc*curr),2); // written the total function in a single line and  and the staring value is set as 2, so here the value will be start to multliplied with 2
// console.log(reducefunc1); // 3456

//----------------------------------Argument object--------------------------------------

//  Argument object in non arrow function: argument object is an array like object present locally inside a function and it contains value of all the argument passed to the function

// function addelement(){
//     console.log(arguments); //arguments is a keyword, [Arguments] { '0': 4, '1': 5, '2': 6, '3': 7, '4': 6, '5': 8 }
// }
// addelement(4,5,6,7,6,8);
//-----------------------------------------------------------
// function addelement(a,b){
//      return a+b;
// }
// const result = addelement(4,5,6,7,6,8);
// console.log(result);// 9, in javascript it's compute first 2 value in the  passed arguments
//------------------------------------------------------------
// function addelement(){
//     for(let value of arguments){
//         console.log(value);// print every values of the arguments
//     }
// }
// addelement(4,5,6,7,6,8);
//------------------------------------------------------------
// function addelement(){
//    console.log(arguments) // [Arguments] { '0': 4, '1': 5, '2': 6, '3': 7, '4': 6, '5': 8 }---> convert this to an array
//    const arr = [...arguments];// converting to array by spread operator
//    console.log(arr);// [ 4, 5, 6, 7, 6, 8 ]
// }
// addelement(4,5,6,7,6,8);
//-------------------------------------------------------------
// ***************default value in function********************

// function addfunc (a=10,b=10){ // default value of a and b declared as 10
//     console.log(arguments); // [Arguments] { '0': 4, '1': 5 } for addfunc(4,5), [Arguments] { '0': 4 } for addfunc(4), [Arguments] {} for addfunc()
//     console.log(arguments[0]);// 4 for addfunc(4,5), 4 for addfunc(4), undefined for addfunc()
//     arguments[0]=9; // arguments[0] is changed to 9 but after passing it to the parameter so, it will not effect the output,it will just change the argument object
//     console.log(arguments);//  [Arguments] { '0': 9, '1': 5 } for addfunc(4,5), [Arguments] { '0': 9 } for addfunc(4), [Arguments] {} for addfunc()
//     return a+b;

// }
// console.log(addfunc(4,5)); // o/p: 9 
// console.log(addfunc(4));// // o/p: 14 // default value of a and b declared as 
// console.log(addfunc());// // o/p: 20 // default value of a and b declared as 

//-------------------------------------REST parameter--------------------------------------
// The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// rest should be the last parameter in arguments

//const arr = [7,9,5,7,9,2,4];
// function arrayadd(...rest){ // rest will take here the rest parameters and used at last
//     console.log(rest);// [7, 9, 5, 7, 9, 2, 4]
//     let sum = 0;
//     for( let i of rest){
//         sum+=i;
//     }
//     console.log(sum); // 43
// }
// arrayadd(7,9,5,7,9,2,4);
// ********************* another example of rest parameter using spread operator*********************
// function arrayadd(a,b,...rest){ // rest will take here the rest parameters and used at last
//     console.log("sum of first 2 elements is :", a+b);// sum of first 2 elements is : 16
//     console.log(rest);// [7, 9, 5, 7, 9, 2, 4]
//     let sum = 0;
//     for( let i of rest){
//         sum+=i;
//     }
//     console.log("The sum of rest elemets is: ",sum);// The sum of rest elemets is:  27
// }
// arrayadd(7,9,5,7,9,2,4);
//
//--------------------------------------Recursion-----------------------------------------------
 // recursion is a programming term where the function calls itself
//*************sum of numbers **********
// function calsum(number){
//     let sum = 0;
//     if(number>0){
//         sum = number + calsum(number-1);
//     }
//     return sum;
//  }
//  console.log(calsum(10));
// *****factorial with recursion*******
// function factorial(num){
//     if(num===1 || num==0){
//         return num;
//     }
//     if(num>0){
//     return num * factorial(num-1);
//     }
// }
// console.log(factorial(5));

//------------------------------------------Closure-----------------------------------------------
// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. A block is also treated as a scope since ES6. Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events.

// Closure is the concept of function + lexical environment in which function it was created. so every function declared within another function then it has access to the scope chain of the outer function and the variables created within the scope of the outer function will not get destroyed.

// A closure is the combination of the function bundled together with reference to its lexical environments is known as closure. In other words - A closure is a function that remembers its outer variable and can access them.


// function foo(outer_arg) {

// 	function inner(inner_arg) {
// 		return outer_arg + inner_arg;
// 	}
// 	return inner;
// }
// let get_func_inner = foo(5);

// console.log(get_func_inner(4)); //9
// console.log(get_func_inner(3));//8

//-------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------Coding drills---------------------------------------------
// **********Check Plaindrome*************
// const rl = require("readline-sync");
// const str = rl.question("enter the string: ")
// let revstr ="";
// for(let i =str.length-1;i>=0;i--){
//     let newchar = str.charAt(i);
//     revstr = revstr+newchar;
//     newchar="";
// }
// if(str.toLowerCase===revstr.toLowerCase){
//     console.log("The string is a palindromestring");
// }
// else {
//     console.log("The string is not a palindromestring");
// }
// otherwise we can split--> to array then apply reverse() to it then----> join to string

//************************Remove Vowel from string********************/

// const rl = require("readline-sync");
// const str = rl.question("enter the string: ")
// let result = "";
// for(let char of str){
//     let vowel = "aeiouAEIOU";
//     if(!vowel.includes(char)){
//         result+=char;
//     }
// }
// console.log(result);

//********************Mask last characters asper user input*************/

// const rl = require("readline-sync");
// const str = rl.question("enter the string: ");
// const num = rl.question("enter how many character you want to mask: ");
// let maskedsymbol = "#".repeat(num);
// let maskedstr = str.slice(0,str.length-num) + maskedsymbol;
// console.log(maskedstr);

//*****************encoded charaecter uptothe user provided input **********************
// I/p: enter the string: arghya
// enter encoded value: 1
// O/p: bshizb

// const rl = require("readline-sync");
// const str = rl.question("enter the string: ");
// const num = Number(rl.question("enter encoded value: "));
// let encodedstr = "";
// for(let i= 0;i<str.length;i++){
//     let enchar = String.fromCharCode( str.charCodeAt(i)+num);
//     encodedstr += enchar;
// }
// console.log(encodedstr);
//
//---------------------------------------DOM-------------------------------------
// see dom.html

//---------------------------------------------------------------Class-------------------------------------------------------------

//-------------------------------------Prototype------------------------------------
// Prototype: Every object in Javascript has a hidden property called "Prototype". 
// The value of this property can be null or a reference to another object. 
// Every subject can have only one prototype
// const user = {
//     username : "Arghya",
//     age : 23
// }
// console.log(user);
// output in browser console: when a object logged a  hidden property called which is another object . This properthy contain many functions, subproperties and sub-objects, so, when we call toString(), valueOf() with this "User" object it returns [object Object] because of the hidden poperty Prototype.
// age: 23
// name: "arghya"
// [[Prototype]]: Object
// console.log(user.toString()); // [object Object]

//********create custom prototype******/

// const admin = {
//     isAdmin : true
// };
// const user = {
//     username : "Arghya",
//     age : 23,
//     __proto__: admin // "__proto__" is reserved keyword to declare a prototype it will not show in console it will show under hidden property prototype as nested property
// }
// console.log(user);
// o/p:
//{username: 'Arghya', age: 23}
// age: 23
// username: "Arghya"
// [[Prototype]]: Object
//      isAdmin: true //(in nested manner)

// console.log(user.isAdmin);// true // user doesn't contain isAdmin property although it's returning "true" because user have the prototype which is refering to the object admin.

//************Chaining of prototype*******************/
// const loggedinstatus ={
//     isLoggedin: true
// };
// const admin = {
//     isAdmin : true,
//     __proto__: loggedinstatus // prototype loggedinstatus is craeted
//     showmsg(){
//        console.log("User is loggedin")
//  }
// };
// const user = {
//     username : "Arghya",
//     age : 23,
//     __proto__: admin 
// };
// console.log(user);
// user.showmsg(); // showmsg is not user's function although we can access this with user because it has prototype admin access
// console.log(user.isAdmin); //true
// console.log(user.isLoggedin);// true :user doesn't contain isLoggedin property although it's returning "true" because user have the prototype of  admin and admin have the prototype of loggedinstatus. This called Chaining of prototype.
// Every subject can have only one prototype
// we can't do this--->(two prototype can't be assigned in a singel object, for this we have to do chaining of prototype)
// const user = {
//     username : "Arghya",
//     age : 23,
//     __proto__: admin,
//     __proto__: loggedinstatus
// };
// Object.keys(User)--> only return the keys only in the object not in the [prototype];
// to access the all the keys and the prototype keys we use (for let in) 

//----------------------------Class------------------------------------------
//A Class serves as a blueprint for creating multiple objects with similar properties and methods. One real-life example of a class is the Car class. This class defines the blueprint for creating car objects, including properties such as make, model, year, color, and price, and methods for performing actions like starting the engine, accelerating, braking, and turning.

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     // Method in class--> it should be outside tof the constructor
//     displayinfo(){
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }
// const user1 = new User("Arghya",23);
// const user2 = new User("Raman",24,55);
// const user3 = new User("Rahul",22);
// console.log(user1);// User { name: 'Arghya', age: 23 }
// console.log(user1.name);// Arghya
// console.log(user2);// User { name: 'Raman', age: 24 } it will ignore another parameter 55 which is not mentioned in the constructor
// // Calling method of a class
// // if we console.log the object we can only see the properties as in the constructor of the class mentioned but we can't find the method. so where it's storing? actually it's storing inside the hidden prototype
// user3.displayinfo();// Rahul is 22 years old

//------------------------------inheritance--------------------------------
// Inheritance refers to the ability of a child class to inherit properties and methods from its parent class.

// parent class
// class Laptop {
//     constructor(ram, processor, generation) {
//       this.ram = ram;
//       this.processor = processor;
//       this.generation = generation;
//     }
//     displayMessage() {
//       console.log(`Laptop Spec:: RAM ${this.ram} - Processor ${this.processor} ${this.generation} Gen`);
//     }
//   }
  
  //child class
//   class Dell extends Laptop { // through extends keyword we can inherit from a parent class
//     constructor(ram, processor, generation,modelname,price) {
//       super(ram, processor, generation);// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//       this.modelname = modelname;// we are adding more properties to the child extending the parent class
//       this.price=price;
//     }
//     displayMessage(){// this is method overriding
//         console.log(`Laptop Spec:: RAM ${this.ram} - Processor ${this.processor} ${this.generation} Gen ${this.modelname} ${this.price} Rs`);
//     }
//   }
  
//   const dell1 = new Dell("8GB", "Intel", "15","datu08X",100000);
//   console.log(dell1);
//   dell1.displayMessage(); // Laptop Spec:: RAM 8GB - Processor Intel 15 Gen undefined 100000 Rs

//-------------------------Static method and  Static properties ------------------------
// Static Method: Methods that are created inside a class, but the method as a whole is available to all objects of that class. For example, we can use Static Methods for sorting an employee database according to the performance of employees.

// class Children {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     static sortByAge(a, b) {
//       return a.age - b.age;
//     }
//   }
  
//   const child1 = new Children("prakash", 11);
//   const child2 = new Children("ashish", 19);
//   const child3 = new Children("riya", 9);
//   let arr = [child1, child2, child3];
//   console.log(arr.sort(Children.sortByAge));
//  O/P: [
//   Children { name: 'riya', age: 9 },
//   Children { name: 'prakash', age: 11 },
//   Children { name: 'ashish', age: 19 }
// ]

//Static Property: These static properties are defined using static keyword.
// class Children {
//     static id = 1; // Declare a static property to keep track of IDs
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.id = Children.id++; // Assign a unique ID to each child
//     }
//     static sortByAge(a, b) {
//         return a.age - b.age;
//     }
// }

// const child1 = new Children("prakash", 11);
// const child2 = new Children("ashish", 19);
// const child3 = new Children("riya", 9);
// let arr = [child1, child2, child3];
// console.log(arr.sort(Children.sortByAge));

// // Another Example of static property
// class User{
//     static count =0;
//     constructor(name){
//         this.name=name;
//         User.count++; // not assiged to any this.count // this.count=User.count++; then as per object declaration id will increase 0 to N
//     }
// }
// const user1 = new User("Arghya");
// const user2 = new User("rahul");
// const user3  = new User("Aslcma");
// console.log(user1.count);// undefined
// console.log(User.count);// 3
// console.log(user2.count);// undefined
// console.log(User.count);// 3
// console.log(user3.count);// undefined
// console.log(User.count);//3

//----------------------------------------Private Properties--------------------------------------------
// Private Properties: Private properties refers to class properties that are only accessible within the class itself and cannot be accessed or modified from outside the class. 

// class User {
//     id =123;
// }
// const user = new User();
// user.id = 321;
// console.log(user);

// In the above code, a User class is defined with a class field "id" that is initialized to 123. Then, an instance of the User class is created and stored in the "user" variable using the "new" keyword.After creating the instance, the code attempts to modify the "id" property of the user object by setting it to 321. When the user object is logged to the console, it will show the "id" property with the value 321.
// class User {
//     #id = 123;
//     changeId(id){
//         this.id = id;
//     }
//   }
//   const user1 = new User();
//   //user.#id = 321; // error in this line saying private property is not accessible outside class
//   console.log(user1.id); // undefined: we are not even able to  access the private propeerty by object
//   console.log(User.id); //undefined
//   user1.changeId(321); // now with method  id is changed and now accessible to all;
//   console.log(user1.id);// 321
//   user1.id = 456; // now after calling the changeId, this id assignment is also possible. priviously which was disabled.
//   console.log(user1.id); // 456
//The code defines a User class with a private instance variable, #id, initialized to 123 in the class definition. Subsequently, a new instance of the class is created and assigned to the user variable. However, attempting to directly modify the #id private property using the syntax user. #id = 321; results in a syntax error since Private Properties are not accessible from outside the class.


//--------------------------------------------------------- Asynchronous JavaScript--------------------------------------------------------------

//---------------------------------Async and Differ----------------------------

// to run a website we considered: Html Parsing, js loading , js executing [css is not included]

// <script src="/basicnotes.js"></script> -->general

// if script is written like this that means at first html parsing is stared, then when it encountered script it paused the html parsing and started the script downloading and after the completataion of the downloading it instsantly start the execution, and after the execution complete it again continues the html parsing where it left previously. So, here js is blocking the rendering of the HTML. It is not a good practise.

//
//<--------------------------->    js downloading start-end    js execution  start-end      <---------------------------->
//   Html Parsing start-pause <------------------------------><----------------------------> Html again start parting
//
//


// <script async src="/basicnotes.js"></script>
//
//  if script is written like this then with html parsing script will start fetching asyncronously with the html parsing, as soon as the script fetched instantly then the script started executing and the html parsing pasused till the execution end after the execution end the html again starts parsing
//
//  Html Parsing start-pause
//<--------------------------->  js execution  start-end   <---------------------------->
//<---------------------------><---------------------------> Html again start parting
//  js downloading start-end  
//
//
//
// <script differ src="/basicnotes.js"></script>
//
// if script is written with differ the the html starts parsing and with this js fetched from the network. it waits till the html fully parsed then only js starts executing.
//
//                Html Parsing Start-End 
//<------------------------------------------------------->    js starts executing->end
//  <------------------------------>                       <------------------------------> 
//    js downloading start-end  
//
//-------------------CallBack Function--------------------


// Callback FUnction: A callback function is a function that is passed as an argument to another function and is invoked or called by that function at a certain point in time.

// function a(wrapper){ // a function is passed as an aurgument to another function can be called as wrapper function
//   console.log("Main Function");
//   wrapper();// callback function called 
// }
// function b(){
//   console.log("Wrapper Function");
// }
// a(b);

// real time use of callback function

// setTimeout(function callback(){ // setTImeout : is a async function in js, used to delay some action.
// console.log("this is a call back function executed after 4 sec");// callback function will executed after 4 sec
// },4000)

// another example with fetch
// fetch('https://jsonplaceholder.typicode.com/posts/1')// after fetching this
//   .then(response => response.json()) // then give the response into json format
//   .catch(error => console.error(error));

//Here we are making a network call to fetch some data from the JSON placeholder and we are waiting for the response to come back, once we receive the response our callback function is executed which is passed as an argument to the then method. In case Our response fails, our callback function for the catch method is called.


//----------------------------------------------How asyncronise JS works------------------------------------------------

//Async programming is a programming model that allows code to run asynchronously or non-blocking. This means that while a task is being executed, other code can continue to run concurrently without waiting for the task to complete.

// console.log("let's begin");
// setTimeout(()=>{
//   console.log("Wait fot 4 sec");
// },4000)
// console.log("Bye bye");
//O/P:
// let's begin
// Bye bye
// Wait fot 4 sec

// this is the beauty of async js the execution will not wait for the timer API to execute the callback function then go to another line and in back browser starts 4000ms timer. Instead of the js engine execute the next line and after 4 sec the callback function goes to the call stack and execute. But the callback function will not directly go to the call stack. In between there is Event Loop and callback Queue. Actualluy after The timer api expires then the callback function pushes to the callback Queue. The job of the event loop is continuously keep on monitoring the call stack and the callback queue, the call stack is empty or not then push the callback function to the call stack to execute.

// how it is possible to execution the callback after 4 sec? --> actually there is a concept called Event loop inside the browser 
// Event Loop is the heart of the async js is this event loop

// Event Loop: In JavaScript, an event loop is a mechanism that enables asynchronous programming. The event loop works by continuously processing a queue of events and executing any associated callbacks or functions.

// Callback Queue: In JavaScript, the callback queue is a mechanism used by the event loop to manage asynchronous code execution. Whenever an asynchronous operation is performed, such as a timer set by setTimeout() or an HTTP request made by fetch(), the associated callback function is added to the callback queue.The event loop constantly monitors the callback queue and executes the callbacks in the order in which they were added, one at a time. This ensures that the JavaScript runtime remains single-threaded and that no two callbacks are executed simultaneously.
// 2 types of call back queue 
// 1. Task Callback Queue-->Least Priority Task ---> here the callback function of the setTimeout(), Dom Apis
// 2.Micro Task Callback Queue-->high Priority task--> the callback function of the promise should be in this and fetch() is also consider but after promise

// console.log("lets Start");   // line1
// const btnAddtoCart = document.getElementById("btn");  //line2
// btnAddtoCart.addEventListener("click",()=> {     //line3
//   console.log("Button Clicked");
// });
// console.log("Bye Bye ......");

// Initially, the line1 console.log("Let Start") is printed then js engine moves to the next line and extracts the node from the DOM and saves its reference in a variable called btnAddtoCart.Then as soon it encounters line 3, event listener is registered in the web-API and the js engine moves forward and prints the last line console.log("Bye Bye ").Once a user clicks on the button to which the event listener is attached, the callback is pushed into the callback queue, and once the event loop finds the call stack as empty callback queue pushes the callback function into the call stack, and the function gets executed.

//-------------------------------------------------------------------------------------------------------------------------------------------

//callback hell: In JavaScript, the scenario where the code becomes densely nested and challenging to read due to the overuse of callbacks is referred to as "callback hell."
//This bellow senario is called callback hell:
// bookHotel(hotelId,function(){
//   if(err){
//       errorHandler();
//    }else{
//       proceedToPayment(hotelId,function(){
//          if(err){
//            erroHandler();
//          }else{
//            showBookingStatus(hotelId,function(){
//               if(err){
//                 errorHandler();
//               }else{
//                 updateBookingHistroy(hotelId,function(){
//                   success();
//                 })
//                }
//            })
//           }
//       })
//     }
// })
//  If you take a look at the above code it is clear that our code is expanding in the horizontal direction instead of the vertical direction which is considered a bad practice in programming as it makes the code less readable and difficult to identify bugs as well.
//  In order to resolve these issues we use promises and the async-await style of async programming.

//------------------------------------------------Promise-------------------------------------------------

// Promise: Promise is an object that has the status of an async operation, and it's corresponding value.

// either a promise can be resolved or it can be rejected (At first it will be in Pending status)

//A promise in JavaScript represents the eventual outcome of an asynchronous operation and its value, whether successful or failed. Promises are commonly used to handle various asynchronous tasks such as fetching data from an API, reading files, or waiting for a timer to expire.Consider Promise as a special Object in Javascript which has different states and corresponding different values of each state.A promise is initially in a pending state and changes to either a "Fulfilled" or "rejected" state depending on whether the promise was resolved or rejected. Initially, the value of the promise is undefined and changes to the value of the resolve(value) method if the promise is successful or changes to an error in case the reject(error) method is called.


// const URL = "https://goweather.herokuapp.com/weather/Ny";
// let promise = fetch(URL);
// promise.then((response)=>{
//   return response.json();// converting the response to the json format
// }).then((data)=>{  // this .then and .catch is called "Method  Chaining" // We can chain promises and make themm pass the resolved value to one another
//   console.log(data);
//   console.log(data.forecast.find(value=>{
//     return value.day==1
//   }))
//   // if(data.temperature ==="+22 °C"){
//   //   console.log(data);
//   // }
// }).catch((error)=>{// if the promise resolved (.then) comes to action is the promise rejeccted (.catch) comes to the picture. every (.then) is returning a promise
//   console.log(error);
//   console.log("Error Occoured");
// })

// ---------------------------All about Promise:-------------------
// Custom Promise

// const isReqsuccessful = true; // make false to see the error
// let promise = new Promise((resolve,reject)=>{   // resolve and reject are callback function are provided by js itself
//   if(isReqsuccessful){
//     resolve("Request Resolved");// to fullfill  the status of the promise, either we have to resolve(value) with some value it can be string/object anything or reject() will throw an error
//                                   //this resolve(value) we will see in promise.then(response)
//   }
//   else{
//     const error = new Error("Somethig Error;");
//     reject(error.message);
//   }
// })
// console.log(promise);// Promise { 'Request Resolved' }
// promise.then((response)=> console.log(response));// Request Resolved

//------------------------ Promise with Custom DB-----------------------

// const db =[
//   {id : 1, name: "Arghya"},
//   {id : 2, name: "Arun"}
// ]
// let promise = new Promise((resolve,reject)=>{
//   console.log("Resolved");
//   resolve(db);

// })
// promise
//   .then((response)=>console.log(response))// .then *response* is for resolved
//   .catch((err)=>console.log(err.message));

// ************************Simple Understanding of promise: ***************************


// let pro1 = new Promise((resolve,reject)=>{ // resolve and reject are callback function are provided by js itself
//   console.log("Completed")
//   setTimeout(()=>{
//     resolve("resolved promise")
//   },4000)
// })
// let pro2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject(new Error("Error occured"))// new Error created, it will occur if we catch the error of this promise as there is no resolve callback function
//   },4000)
// })

// pro1.then((response)=>{ // this response is coming from the resolve--> the value inside resolve is pass to the response
//   console.log(response);
// })
// pro2.catch((err)=>{// this err is coming from the reject
//   console.log(err.message);
// })
//O/P:
// Completed
// Completed
// resolved promise
// Error occured


//Check every steps here of event listners,call stack, task callback queue, microtask call back queue--> https://www.jsv9000.app/

// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{  // set timeout is a task callback queue,it's executing third because of setTimeout set on 2000ms but it's the oldest in the task callback queue
//     console.log("Inside promise P1");
//   },2000)
// })

// let p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Inside promise P2"); // set timeout is a task callback queue,but it's executing forth because of setTimeout set on 2000ms but it's not the oldest in the task callback queue, oldest one is p1
//   },2000)
// })
// let p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{  // set timeout is a task callback queue, but it's executing second because of setTimeout set on 1000ms
//     console.log("Inside promise P3");
//   },1000)
// })
// let p4 = new Promise((resolve,reject)=>{
//   resolve("Inside promise P4");
// }).then((response)=>console.log(response))// promise.then is a Micro task callback queue, so it's executing fast


//O/P:
// Inside promise P4
// Inside promise P3
// Inside promise P1
// Inside promise P2


//-----------------------------------Attaching Multiple Handelers to a promise------------------------------
// it is different than promise chaining method, because in promise chaining one then returns a value, that uses in the next cahining
// but Attaching Multiple Handelers it don't uses previous returned value

// p1.then()---->this called handelers
// p1.then()---->this called handelers

// when we use multiple handelers with same promise it's called Attaching Multiple Handelers actully we attach multiple (p1.then)

// Example: 

// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(2)
//   },2000)
// }).then((response)=>console.log(response));// 2
// p1.then(()=>console.log("Promise is resolved"));
// p1.then((response)=>{
//   console.log("Hurry!!")
//    return new Promise((resolve,reject)=>{// promise returning a new promise and the resolved value change
//     setTimeout(()=>{
//       resolve(4);
//     },4000)
//   })
// }).then((response)=>console.log(response));//  4

// Promise is resolved
// Hurry!!
// 4

//------------------------------------Promise Api Methods----------------------------------
// There are 6 static methods of Promise class

//  Promise.All([arrayofPromise])
//  https://api.github.com/users/prakashsakari
//  https://api.github.com/users/AshishJangra27
//  Promise.all: takes array of promises
//  Promise.all():  to execute multiple promises in parallel and wait until all of them are ready. 
//  Promise.all(): either resoved the array of resolved value or the latest error
//  if we use setTimeout with different timeout also it will resolve wait until all of them are ready

// let promise1 = new Promise((resolve)=>{// we haven't handeled reject here
//   resolve("Promise1 resolved")
// })
// let promise2 = new Promise((resolve)=>{
//   resolve("Promise2 resolved")
// })
// let promise3 = new Promise((resolve)=>{
//   resolve("Promise3 resolved")
// })
// // if we want to execute all promise in a single execution, execute multiple promises in parallel and wait until all of them are ready. 
// promise1.then((response)=>console.log(response));
// promise2.then((response)=>console.log(response));
// promise3.then((response)=>console.log(response));
//O/P:
// Promise1 resolved
// Promise2 resolved
// Promise3 resolved
// instead of the upper code we can :
// let arrofpromises = [promise1,promise2,promise3];
// let p = Promise.all(arrofpromises);
// p.then((response)=>console.log(response));
//O/P:(returns array response of resolved promises)
//[ 'Promise1 resolved', 'Promise2 resolved', 'Promise3 resolved' ]


// ***********************Promise.all()---> if error occurs********************
// let promise1 = new Promise((resolve,reject)=>{// we haven't handeled reject here
//   resolve("Promise1 resolved")
// })
// let promise2 = new Promise((resolve,reject)=>{
//   reject("Promise2 rejected")
// })
// let promise3 = new Promise((resolve,reject)=>{
//   reject("Promise3 rejected")
// })

// let p = Promise.all([promise1,promise2,promise3]);

// p.then((response)=>console.log(response)).catch((err)=>console.log(err)); // O/p: "Promise2 rejected"

// it will return the value of the recent error which occur
// if we use setTimeout() then the fastest resolved rejected error will be the output
// setTimeout(()=>{reject("Promise2 rejected"),2000})


//*******************************************Fetch()************************************

//  https://api.github.com/users/prakashsakari
//  https://api.github.com/users/AshishJangra27

// let users = ["prakashsakari","AshishJangra27"];
// let arrofpromises = users.map((user)=>
//   fetch(`https://api.github.com/users/${user}`)
// );
// let promise = Promise.all(arrofpromises);
// promise.then((response)=>{
//   response.forEach((data)=>{
//     //console.log(data)
//     console.log(data.url)
// })
// }).catch((err)=>{
//   console.log(err)
// })
//-------------------------------------------------------------------------

// **********************Promise.allSetteled()*****************************

// in Promise.all()--> if any promise rejected , it only show the latest rejected error
// to overcome this we use Promise.allSetteled()

// let promise1 = new Promise((resolve,reject)=>resolve("Promise1 resolved"))
// let promise2 = new Promise((resolve,reject)=>reject("Promise2 rejected"))
// let promise3 = new Promise((resolve,reject)=>reject("Promise3 rejected"))
// let p = Promise.allSettled([promise1,promise2,promise3]);
// p.then((response)=>console.log(response)).catch((err)=>console.log(err));
// O/P:
// [
//   { status: 'fulfilled', value: 'Promise1 resolved' },
//   { status: 'rejected', reason: 'Promise2 rejected' },
//   { status: 'rejected', reason: 'Promise3 rejected' }
// ]
//p.then((response)=>response.forEach((data)=>console.log(data))).catch((err)=>console.log(err)); // this for each will print every promise data as individual object
// O/P:
// { status: 'fulfilled', value: 'Promise1 resolved' }
// { status: 'rejected', reason: 'Promise2 rejected' }
// { status: 'rejected', reason: 'Promise3 rejected' }
 

//**************************Promise.race() vs Promise.any****************************8

// Promise.race(): This function is like Promise.all, but instead of waiting for all promises to settle, it only waits for the first one to settle and retrieves its result or error.
// the fastest one will it retrives: whearther is is resolved or rejected
// if no promise resolved then the fastest reject will be 


// let promise1 = new Promise((resolve,reject)=>reject("Promise1 rejected"))
// let promise2 = new Promise((resolve,reject)=>reject("Promise2 rejected"))
// let promise3 = new Promise((resolve,reject)=>resolve("Promise3 rejected"))
// let promiserace = Promise.race([promise1,promise2,promise3]);
// promiserace.then((reponse)=>console.log(reponse)).catch((err)=>console.log(err)); // Promise1 rejected

// Promise.any(): Although the initial promise was the quickest, it was rejected, and as a result, the second promise became the outcome. Once the first promise that was fulfilled wins the race, any additional outcomes are disregarded.
// promise.any() retrive fastest resolved one not the rejected one
// if every promise gets rejected then promise.any() will throw error

// let promise4 = new Promise((resolve,reject)=>reject("Promise1 rejected"))
// let promise5 = new Promise((resolve,resolved)=>rejeB("Promise2 resolved"))
// let promise6 = new Promise((resolve,reject)=>reject("Promise3 rejected"))
// let promiseany = Promise.any([promise4,promise5,promise6]);
// promiseany.then((reponse)=>console.log(reponse)).catch((err)=>console.log(err)); //Promise2 resolved

// What is the difference between Promise.any and promise.race ?

// Here's an example: imagine you have three promises that represent different tasks you want to do simultaneously. Promise 1 represents checking your email, Promise 2 represents making a phone call, and Promise 3 represents sending a text message.

// If you use Promise.race(), the method will return the result of the first promise that finishes, whether it was successful or not. So, if Promise 1 finishes first but it's a rejection (e.g., you couldn't log in to your email), the Promise.race() method will immediately return the rejection value without waiting for Promise 2 or Promise 3 to finish.

// If you use Promise.any(), the method will return the first promise that finishes successfully (i.e., it gets resolved). So, if Promise 2 finishes first and it's successful (e.g., you finished your phone call), Promise. any() will return that result and Promise 1 and Promise 3 will stop executing. However, if none of the promises get resolved and they all reject, then Promise.any() will throw an error.

//--------------------------------------Async and Wait---------------------------------------------

// Async: Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. async by default returns a fullfilled promise wheather it is a string number or a promise.

//Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

// function returnsome1(){
//   return "Prakash";
// }
// const value = returnsome1();
// console.log(value); // Prakash

// async function returnsome2(){
//   return "sakari";
// }
// const value1 = returnsome2();
// console.log(value1);// Promise { 'sakari' }--> returns promise when function is async

// async function showasync(){
//   const p1 = new Promise((resolve,reject)=>{
//     resolve("done done");
//   })
//   return p1;
// }
// const promise = showasync();
// console.log(promise);// Promise { <pending> }
// promise.then((response)=>{console.log(response)});// done done

// async and await is the elegent way of writting the promise
// async is the keyword to make the return value of any function to a primise

// async function returnsome(){
//   const promise = new Promise((resolve)=> resolve("Promise done"));
//   const result = await promise;// by await keyword function execution stops here, until the promise is settled(either fullfilled or settled)
//   console.log(result);
// }
// returnsome();// Promise done
//--------------------------------------------------------
// for rejection of promise as we are not using .then .catch, so, to catch error we should write the code in try catch block
// async function returnsome(){
//   try{
//     const promise = new Promise((_,rej)=> rej("Promise rejected"));
//     const result = await promise;// by await keyword function execution stops here, until the promise is settled(either fullfilled or settled)
//     console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }
// returnsome();// Promise rejected
//----------------------------------------------------------
// const getuserdata = async()=>{
//   try{
//     const promise = await fetch(" https://api.github.com/users/prakashsakari");
//     const response = await promise.json();
//     console.log(response);// the total json object
//     console.log(response.login); // it will return the login attriibute of the object
//   }catch(err){
//     console.log("error occured"+ err);
//   }
// }
// getuserdata();




















































































