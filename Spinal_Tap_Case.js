//Spinal Tap Case

//Question:-Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//Ex-spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

function spinalCase(str) {
    //using Regex
      return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+|_+/g, '-').toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');