//1. we have to intialize const variable on  the line of the declaration.
//2. The scope of a var variable is functional scope, let is blocked scope, const is blocked scope.

//3. Number("98")// -->98, String(123)//-->"123", toString(123);// Boolean("arghya")//-->true
//4. Above typrcasting doesn't change the original data. So, we have to store it to use.
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
//38. In place of spread operator here we use---***Object.assign(target,source)***---to copy object to different object, it is alos a shallow copy[const obj2 = Object.assign({},(obj1);]
//39. Object.assign(target,source) works poperly when there is no nested object, but in case of nested object it will change the both array if one is manipulated.

//40. You can use optional chaining when attempting to call a method which may not exist.***(object?.attribute1?.nestedattributed)***
//41. Option chaining will throw undefined if the property/expression/index is not available, instead of traditional accessing will throw error 
//42. At first it will check first parameter is present of not, if not then return undefined. if found then only check the next attribute

//43. let obj3 = {username: "Arghya",address:{city:"Kolkata",state:"WB"},phone: 9874157553}, let {username : uname, address: useraddress } = obj3; // change key name (username to---> uname) and (address to--> useraddress) // now you can't access with username it will give error
//44. same destructuring methods as in array but for nested objected let we use this manner {address:{city,state}} = obj3
//45. [Object.entries(object name);--> retrun array of key value pair in array inside array manner] .[Object.keys(object name);-->return array of keys.] [Object.values(object name);--> return array of values]

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
//58. If a function is returning another function which is nested inside that function then it to access it we have to use prarentfunction()() or we have to store it to another variablea and again call the varible which conataining the reference of that function.

//59. Higher order function: A function that accetps another function as an argument or returns a function or does the both called Higher Order Function.
//60. map() - filter() - reduce()  is higher order function
//61. map(): it can take function as parameter so higher order function, ***map loop iterate over the array***, map returns an array. ie.; const newarray = arr.map(square);
//62. 

































































