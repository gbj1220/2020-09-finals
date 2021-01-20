const makeParagraph = (str) => str.join(" ")

const totalScore = (levels, bonus) => {
  if (bonus === undefined) {
    bonus = 0
  }
  let score = 0
  for (const level of levels) {
    let currentScore = level.score;
    if (level.multiplier) {
      currentScore *= level.multiplier
    }
    score += currentScore
  }
  return score + bonus
}

const cipher = (str) => {
  let result = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyza'
  for (const char of str) {
    const current = alphabet.indexOf(char)
    const next = current + 1
    result += alphabet[next]
  }
  return result
}

const womensAverageSalary = (obj) => {
  let sum = 0;
  let count = 0;
  for (const person of obj) {
    if (person.gender === 'female') {
      sum += person.salary;
      count++;
    }
  }
  return sum / count
}

// const notMarried = (people) => people.filter((person) => person.status !== 'married')

const notMarried = (people) => {
  const newArr = [];
  for (const person of people) {
    if (person.status !== 'married') {
      newArr.push(person)
    }
  } return newArr
}

const addToMultiDigitNumbers = (numToAdd, numToAddTo) => {
  let newArr = [];
  for (let number of numToAddTo) {
    number = Number(number)
    if (number < 10) {
      newArr.push(number.toString())
    } else {
      newArr.push((number + numToAdd).toString())
    }
  }
  return newArr git test 
}

const Faqtory = () => {
  return {
    questions: [],

    addQuestion(questionText) {
      const question = {
        text: questionText,
        answered: false,
        id: this.questions.length,
      }
      this.questions.push(question)
    },

    answerQuestion(num, str) {
      
    }
  }
}


const testFaqtory = Faqtory();
testFaqtory.addQuestion('some question')
console.log(testFaqtory)
testFaqtory.answerQuestion(1, 'some answer')
console.log(testFaqtory)
// Our code goes below... DO NOT TOUCH.



if (typeof makeParagraph === 'undefined') {
  makeParagraph = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof womensAverageSalary === 'undefined') {
  womensAverageSalary = undefined;
}

if (typeof notMarried === 'undefined') {
  notMarried = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}


module.exports = {
  makeParagraph,
  totalScore,
  cipher,
  womensAverageSalary,
  notMarried,
  addToMultiDigitNumbers,
  Faqtory,
}
