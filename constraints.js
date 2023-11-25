//1. we have to intialize const variable on  the line of the declaration.
//2. The scope of a var variable is functional scope, let is blocked scope, const is blocked scope.

//3. Number("98")// -->98, String(123)//-->"123", toString(123);// Boolean("arghya")//-->true
//4. Above typecasting doesn't change the original data. So, we have to store it to use.
//5. console.log("apple">"banana"); --> return false. because it checks one by one letters ascii value

//6. Boolean(Null,undefined,"",0)-->falsy
//7. || operator return first truthy value, if there is no truthy value then return last falsy value
//8. && operator return first falsy value, or last truthy value if all the values are truthy.
//9. nullish coalescing(??) will only give the alternative value when other one is Null or Undefined
//10. suppose, all values are Null or undefined it will return the last-one.

//*****String*****/
//11. indexOf("character", index to start); if any charecter which is not present in given string it will return -1
//12. str = "mscolc"; str.includes("o",-2); o/p: true --> because  if the parameter is nagative then search through the whole string
//13. substring(starting index,ending index)---> including strating index, excluding ending index// console.log(str.substring(-1));// it will return the whole string
//14. No where the original value is changed, In every operation  we have to store the value in another varible to use.

//********Array*******/
//15. for let in will give indexes not the value
//16. if we copy a array be "=" operatoe it becomes,shallow copy: if any of the array updated it will make change to both
//17. to avoid this spread [...] operator comes to picture internally it copy by for loop. let arr2 =[...arr1] ;
//18. array objects are muttable and string objects are immutable. So, if we use use push() original array will be changed, but in concat() original arry remain same we have to store in different variable
//19. We can't use push() on string, concat() we can and it will not change the original string 
//20. let arr5 = arr1.concat(arr2,arr3,arr4); // we can concat multiple array to an array  
//21. pop() = Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.(change the original array)
//22. slice(starting index, ending index): It returns a shallow copy of a slice. It don't change the original array.if there is no ending index that means it slice till the end as substring() inside slice if there is negetive index, it means slicing from last part, we can do slicing in a string also.
//23. Splice(): it changes the original array. splice(strating index, no of element to delete)....(including starting index, elemments to delete), to add element--->splice(in which index you want to add, 0, "element to add"). str2.splice(1,0,"react js")// it will add react js will be at index 1
//24. sort() = it changes the original array and sort in ascending to desending order. lexicographical it works as string manner. so, if we apply on number it will act different
//25. split()---> split(parameter) splits array or string by showing the passing parameters. (Original array is not chnaged)
//26. split(" ")--> split into different objects whenever it shows space. (Original array is not chnaged)
//27. reverse()--> reverse the string or object and manipulate the original string. (Original array is not chnaged)
//28. join()--> join(parameter)--> joins wherever it shows the parameter.(Original array is not chnaged)
//29. The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
//30. instead of push we can spread the array and add element to it as well as another array.  arr3 = [...arr1,...arr2,10,11,13]
//31. The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.[] used

//**********Object**************/
//32. In object we can access value with console.log(personobj["Key"]); syntax also
//33. either you add function inside object like this by key as function name and parameter as function{},e.g., greet: function  (){}
//34. [course]: "course not available" // this [] bracket tells course is a variable not a direct key, const course = rl.question("tell the course: ")--whatever course you input it will take as a variable 
//35. add element into obj: like obj.usercity = "kolkata"; // we can add element like this
//36. "key" in object will return true if the key is present in the object and return false if it is not in the object

//37. In object aslo take shallow copy and copied object referencing to the main object. In simple words object copied by reference not value.
//38. In place of spread operator here we use---***Object.assign(target,source)***---to copy object to different object, it is alos a shallow copy[const obj2 = Object.assign({},obj1);]
//39. Object.assign(target,source) works poperly when there is no nested object, but in case of nested object it will change the both array if one is manipulated.

//40. You can use optional chaining when attempting to call a method which may not exist.***(object?.attribute1?.nestedattributed)***
//41. Option chaining will throw undefined if the property/expression/index is not available, instead of traditional accessing will throw error 
//42. At first it will check first parameter is present of not, if not then return undefined. if found then only check the next attribute

//43. let obj3 = {username: "Arghya",address:{city:"Kolkata",state:"WB"},phone: 9874157553}, let {username : uname, address: useraddress } = obj3; // change key name (username to---> uname) and (address to--> useraddress) // now you can't access with username it will give error
//44. same destructuring methods as in array but for nested objected let we use this manner {address:{city,state}} = obj3
//45. *******[Object.entries(object name);--> retrun array of key value pair in array inside array manner] .[Object.keys(object name);-->return array of keys.] [Object.values(object name);--> return array of values]

//46. this keyword: refers to the object that is executing the function.
//47. But we can't use (.this) with arrow function (if we use this will refer to window object not to the parent object)
//48. Implicit binding occurs when dot notation is used to invoke a function. For example: var MyObject = function (){ this.name = 'MyObjectName'; this. myProperty = 'property'; }; MyObject. 
//49. For every objecte we have to write the same function inside to use with every object, to overcome this we have explicit binding

//50. function borrowing (Explicit Binding)---> call() apply() bind()
//51. function sayname(degree,batch){console.log(this.username,degree,batch) };// explicit binding of this
//52. sayname.call(obj1,"B.tech","2022");// Arghya B.tech 2022 // in call() we pass parameters as string
//53. sayname.apply(obj1,["B.tech", "2022"]); // Arghya B.tech 2022 // in apply() if there any parameters, we pass parameters as array of strings 
//54. const res = sayname.bind(obj1,"B.tech"); // takes object as first parameter and store to an variable then call the variable, even you can add more parameters to the variable at the time of calling,--> res(); // Arghya B.tech undefined, res("2022"); // Arghya B.tech 2022 ---> we can pass parameter this way also.

//55.Constructor function technically is a regular function. It has 2 convention. They are named with capital letter first. they should be executed only with "new" operator,it works like class and object pattern

//***********Higher Order Function*************/

//56. Pure Function: A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments.The result should not be influenced by the outer parameter. It should not mutate the original argument.
//57. First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treat function as a first-class-citizens. Function takes another function as aurgument and also can return another function.
//58. If a function is returning another function which is nested inside that function then it to access it we have to use prarentfunction()() or we have to store it to another variable and again call the varible which conataining the reference of that function.

//59. Higher order function: A function that accetps another function as an argument or returns a function or does the both called Higher Order Function.
//60. map() - filter() - reduce()  is higher order function: use use the function parameter's reference we don't call it
//61. map(): it can take function as parameter so higher order function, ***map loop iterate over the array***, map returns an array. ie.; const newarray = arr.map(square);

//62. filter(): filter is a Higher order function.The JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.    ie.;  const filteredarr = arr.filter(number => number>5), 
// const zero4divarr = arr1.filter(number=>(number%100 === 0) || (number%4===0));

//63. reduce(): The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator. 
// i.e.; const reducefunc = arr.reduce((acc,curr)=>acc+curr);
// const reducefunc1 = arr1.reduce(((acc,curr) => acc*curr),2); // acc containing 2 from the first itreation of result will be multiplied by 2.

//64. Argument object in non arrow function: argument object is an array like object present locally inside a function and it contains value of all the argument passed to the function

//65. The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. Rest should be the last parameter in arguments. const arr = [7,9,5,7,9,2,4]; function arrayadd(...rest){}
// function arrayadd(a,b,...rest){}

//66. Closure: A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. A block is also treated as a scope since ES6. Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events.A closure is the combination of the function bundled together with reference to its lexical environments is known as closure. In other words - A closure is a function that remembers its outer variable and can access them.

//**********DOM************/
//67. There are some DOM Selectors. By which we are selecting the dom like (getElementByID,querySelector,.....)
//68. getElementById('Idname').id// it will give the id
//69. getElementById('Idname').className// it will give the class name---> we cant access class directly by .class

//70. we can also get attribute with the dom selector. getElementById('Idname').getAttribute('id') // it will give the id name
//71. as get attribute we can also set the attribute:  getElementById('Idname').setAttribute('class','classname') // the classattribute will be change in the dom
//72. we can implement style aslo getElementById('Idname').style.backgroundColor = 'red';

//73. we can access the content with the help of (innerHTML,innerText,textContent)
//74. innerText: this will give show the visible text 
//75. textContent: this show the total content, including the hiding content also which we hiding through dispaly or css property.(display:none) 
//76. innerHTML: this will give the entire text and if any inner html tag included in it, it will give this also.

//77. .addEventListner("event",function to trigger)
//78. Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.This event bubbling is connected to event delegation, when we need to perform same event with multiple element. Then without applying the eventlistner multiple time, we create eventlistner with the parent tag.

//****************Class*****************/

//79. Prototype: Every object in Javascript has a hidden property called "Prototype".The value of this property can be null or a reference to another object.  Every subject can have only one prototype
//80. "__proto__" is reserved keyword to declare a prototype it will not show in console it will show under hidden property prototype as nested property.
//81. We can use Property Chaining to chain the Property

//82. A Class serves as a blueprint for creating multiple objects with similar properties and methods.
//83. Inheritance refers to the ability of a child class to inherit properties and methods from its parent class.-------> class Dell extends Laptop<-------super(ram, processor, generation);
//84.  Static Method: Methods that are created inside a class, but the method as a whole is available to all objects of that class. For example, we can use Static Methods for sorting an employee database according to the performance of employees.
//85. Static Property: These static properties are defined using static keyword. static id = 1; // Declare a static property to keep track of IDs, this.id = Children.id++; // Assign a unique ID to each child

//86. Private Properties: Private properties refers to class properties that are only accessible within the class itself and cannot be accessed or modified from outside the class. way to use private property #id = 123; we declare another method to  change the private property 


//************Asynchronous JavaScript*************/
//87. To run a website we considered: Html Parsing, js loading , js executing [css is not included]
//88. <script src="/basicnotes.js">--->if script is written like this that means at first html parsing is stared, then when it encountered script it paused the html parsing and started the script downloading and after the completataion of the downloading it instsantly start the execution, and after the execution complete it again continues the html parsing where it left previously. So, here js is blocking the rendering of the HTML. It is not a good practise.

//89. <script async src="/basicnotes.js">--->if script is written like this then with html parsing script will start fetching asyncronously with the html parsing, as soon as the script fetched instantly then the script started executing and the html parsing pasused till the execution end after the execution end the html again starts parsing.

//90. <script differ src="/basicnotes.js">--->if script is written with differ the the html starts parsing and with this js fetched from the network. it waits till the html fully parsed then only js starts executing.


//91. Callback FUnction: A callback function is a function that is passed as an argument to another function and is invoked or called by that function at a certain point in time.
//92.  Async programming is a programming model that allows code to run asynchronously or non-blocking. This means that while a task is being executed, other code can continue to run concurrently without waiting for the task to complete.
//93. Event Loop: In JavaScript, an event loop is a mechanism that enables asynchronous programming. The event loop works by continuously processing a queue of events and executing any associated callbacks or functions. Event Loop is the heart of the async js is this event loop.

//94. Callback Queue: In JavaScript, the callback queue is a mechanism used by the event loop to manage asynchronous code execution. Whenever an asynchronous operation is performed, such as a timer set by setTimeout() or an HTTP request made by fetch(), the associated callback function is added to the callback queue.The event loop constantly monitors the callback queue and executes the callbacks in the order in which they were added, one at a time. This ensures that the JavaScript runtime remains single-threaded and that no two callbacks are executed simultaneously.2 types of callback queue.
//95. 1. Task Callback Queue-->Least Priority Task ---> here the callback function of the setTimeout(), Dom Apis
//    2. Micro Task Callback Queue-->high Priority task--> the callback function of the promise should be in this and fetch() is also consider but after promise

//96. Callback hell: In JavaScript, the scenario where the code becomes densely nested and challenging to read due to the overuse of callbacks is referred to as "callback hell."In order to resolve these issues we use promises and the async-await style of async programming.

//97. 


































































