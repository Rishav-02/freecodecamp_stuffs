//Seek and Destroy

//Question:- You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note: You have to use the arguments object.

//1st Method
function destroyer(arr) {
    let args = [];
   
   for (let i = 1; i < arguments.length; i++) {
     args.push(arguments[i]);
   }
   
   let filtered = arr.filter(function(x) {
     return args.indexOf(x) === -1;
   });
   
   return filtered;
 }
 
 destroyer([1, 2, 3, 1, 2, 3], 2, 3);


 //2nd Method
//  function destroyer(arr, ...valsToRemove) {
//     return arr.filter(elem => !valsToRemove.includes(elem));
//   }