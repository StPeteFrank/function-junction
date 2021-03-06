/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
let max = (number1, number2) => {
  if (number1 > number2) {
    return number1
  } else {
    return number2
  }
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
let maxOfThree = (number1, number2, number3) => {
  if (number1 > number2 && number1 > number3) {
    return number1
  } else {
    if (number2 > number1 && number2 > number3) {
      return number2
    } else {
      if (number3 > number1 && number3 > number2) {
        return number3
      }
    }
  }
}

// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
let sum = (number1, number2) => {
  return number1 + number2
}

// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */
//Define function sumOfArray
//Define all the numbers in the array
//Function to calculate the sum

let sumOfArray = array => {
  let sum = 0
  array.forEach(number => {
    sum += number
  })
  return sum
}

// function sumOfArray(array) {
//   let total = 0
//   array.forEach(number => {
//     total += number
//   })
//   return total
// }
// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
let isVowel = letter => {
  let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
  let answer = vowels.filter(vowel => {
    return letter === vowel
  })
  return answer.length === 1
}
// ...

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

// ...

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// ...

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

// ...

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'
import { execFileSync } from 'child_process'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
