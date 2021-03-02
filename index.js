const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCaseTutorials(tutorial) {
  let words = tutorial.split(" ") 
  // splits each letter of the strings
  let wordsCap = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  // iteratiing with .map
  // word is paramater, grabbing the character at 0, making it upper case, then adding the rest of the sentence.
  let tutorialCap = wordsCap.join(" ")
  // joining all the spilt string again.
  return tutorialCap
}

const titleCased = () => {
  return tutorials.map(tutorial => titleCaseTutorials(tutorial))
}
