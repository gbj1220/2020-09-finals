// // Your code goes below:
const makeParagraph = (strArr) => {
  return strArr.join(' ')
}

const cipher = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyza'
  let result = ''
  for (const char of str) {
    const location = alphabet.indexOf(char)
    const next = (location +1)  
    result += alphabet[next]
  }
  return result
}


// const totalScore = (items, bonus) => {
//   let result = 0
//   for (items of items) {
//     if (items.multiplier) {
//       result += items.score * items.multiplier
//     } else if (items.score) {
//       result += items.score
//     } else if (bonus === undefined ) {
//       bonus = 0
//     }
//   } return result + bonus   
// }

// //Corrected Version
const totalScore = (levels, bonus) => {
  if (bonus === undefined) {
    bonus = 0
  }

  let score = 0;
  for (const level of levels) {
    let currentScore = level.score;
    if(level.multiplier) {
      currentScore *= level.multiplier
    }
    score += currentScore
  }
  return score + bonus
}

// const womensAverageSalary = (obj) => {
//   let result = 0
//   for (const property of obj) {
//     if (property.gender === 'female') {
//       result += property.salary
//     }
//   } return result / obj.length
// }

// //Corrected Version
const womensAverageSalary = (people) => {
  let sum = 0
  let count = 0
  for (const person of people) {
    if (person.gender === 'female') {
      sum += person.salary
      count++
    }
  }
  return sum / count
}


// let newArr = []
// const notMarried = (obj) => {
//   for (const people of obj) {
//     if (people.status !== 'married' || people.status === 'divorced' || people.status === 'deceased' || people.status === 'widowed') {
//       newArr.push(people)
//     }
//   } return newArr
// }

// //Corrected Version
const notMarried = (people) => people.filter((person) => person.status !== 'married')


// const Faqtory = function () {
//   const obj = {
//     questions: [], 
//   }
//   return obj
// }

//Corrected Version
const Faqtory = () => {
  return {
    questions: [],

    addQuestion: function(questionText) {
      const question = {
        text: questionText,
        answered: false, 
        id: this.questions.length 
      }
      this.questions.push(question)
    }
  }
}


// let answer = ' '
// const addToMultiDigitNumbers = (numToAdd, numToAddTo) => {
//   for (nums of numToAddTo) {
//     if (nums.length >= 1) {
//     }
//   }
//   return nums + numToAdd 
// }

//Corrected Version
const addToMultiDigitNumbers = function(addend, numbers) {
  const result = []
  for (let number of numbers) {
    number = Number(number)
    if (number < 10) {
      result.push(number.toString())
    } else {
      result.push((number + addend).toString())
    }
  }
  return result
}


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
