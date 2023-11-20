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
//31. The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

//**********Object**************/






































































