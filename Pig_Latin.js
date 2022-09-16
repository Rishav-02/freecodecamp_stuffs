//Pig Latin

//Question:-Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.



function translatePigLatin(str) {

    let vowels= ["a","e","i","o","u"], index=0;
  if(vowels.indexOf(str[index])!== -1){  //initial edge case
       return str+"way";
   }
   for(index=1;index<str.length;index++){
       if(vowels.indexOf(str[index]) !==-1){//first vowel found
           break;
      }
   }
  return str.slice(index,str.length)+str.slice(0, index)+"ay";//break then come here
  }
  
  translatePigLatin("consonants");