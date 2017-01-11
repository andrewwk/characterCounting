const input = "lighthouse in the house";

const countLetters = (myString) => {
  let joinedCharacters = myString.replace(/\s/ig, "");
  let uniqueCharacters = {};

  for (let i = 0; i < joinedCharacters.length; i++) {
    if (uniqueCharacters[joinedCharacters[i]]) {
      uniqueCharacters[joinedCharacters[i]] += 1;
    } else {
      uniqueCharacters[joinedCharacters[i]] = 1;
    }
  }
  return uniqueCharacters;
}

console.log(countLetters(input));
