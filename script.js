var
  positivePalidromeTest,
  failingPalodromeTest,
  secondPositivePalidromeTest;


function isItPalidrome(string) {
  var
    charArr,
    validCharacters,
    lettersArr
    //make string lowercase
  string = string.toLowerCase();
  //make Characters array
  charArr = string.split('');
  //make a valid characters array to compare to
  validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  lettersArr = [];
  charArr.forEach(char => {
    // for each character in the characterArray if it is in the validCharacters array and doesnt come back -1 and it is in the array it pushes to the lettersarray to be inspected
    if(validCharacters.indexOf(char) > -1) { lettersArr.push(char); }
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) {
      return true;
    } else {
      return false;
    }
  // return true or false
}


positivePalidromeTest = "Madam I'm Adam";

failingPalodromeTest = "I am just going to type something.";

secondPositivePalidromeTest = "Racecar";


// should pass
console.log("Palidrome status: " +isItPalidrome(positivePalidromeTest));
// should fail
console.log("Palidrome status: " +isItPalidrome(failingPalodromeTest));
// should pass
console.log("Palidrome status: " +isItPalidrome(secondPositivePalidromeTest));
