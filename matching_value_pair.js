//Wherefore art thou

//Question:-Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


function whatIsInAName(collection, source) {
    // const arr = [];
      
  let sourceKeys = Object.keys(source);  
    
    for (var i=0 ; i < sourceKeys.length ; i++) {
      collection = collection.filter(function(val){
      return val[sourceKeys[i]] == source[sourceKeys[i]];
    });  
    }       
  
  return collection;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


//   2nd Method
// const sourceKeys = Object.keys(source);

// return collection
//   .filter(obj => sourceKeys
//                    .every(key => obj.hasOwnProperty(key) &&
//                           obj[key] === source[key]));
// }