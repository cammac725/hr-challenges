// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  
  // for (let char of str) {
  //   if (!obj[char]) {
  //     obj[char] == 1;
  //   } else {
  //     obj[char]+=1;
  //   }
  // }
  Object.keys(obj).includes(char) ? obj[char]++ :
    (obj[char] = 1);

  Object.keys(obj).reduce((a, b) => {
    return obj[a] > obj[b] ? a : b
  })
   
}


// create a variable that is an object
// if it's not in the object, set the value to one
// otherwise increment that entry
// once we get the dictionary, find the max value
// then return the character of that entry