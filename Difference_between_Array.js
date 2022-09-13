//Diff Two Arrays

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    
    //filter() creates a new array filled with elements that pass a test provided by a function.
    //The includes() method returns true if an array contains a specified value.
    
    //1st method ans.
    /* 
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
    */
   
   //2nd method ans.
     const newArr = [];
     function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);