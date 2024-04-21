# Utility Functions Collection

A collection of utility functions in JavaScript for common tasks.

## Introduction

This repository houses a set of JavaScript utility functions designed to simplify common tasks in web development. Each utility function has its own file for easy reference and inclusion.

## Usage

Feel free to browse through the utility functions in the repository and use them in your projects. Copy the functions directly into your JavaScript files.

## Functions

### [type-checker.js](type-checker.js)
- [`checkType(value)`](type-checker.js#L1): This function returns the type of the given value.

  **Parameters:**
  - `value` (any): The value for which the type needs to be determined.

  **Returns:**
  - A string representing the type of the given value.

  **Example:**
  ```javascript
  const valueType = checkType('Hello');
  console.log(valueType); // Output: 'string'

  const arrayValueType = checkType([1, 2, 3]);
  console.log(arrayValueType); // Output: 'array'
  
### [random-element.js](random-element.js)
- [`getRandomElement(array)`](random-element.js#L1): Returns a random element from the given array.

  **Parameters:**
  - `array` (Array): The array from which to retrieve a random element.

  **Returns:**
  - A random element from the array, or `undefined` if the array is empty.

  **Example:**
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const randomValue = getRandomElement(numbers);
  console.log(randomValue); // Output: Random element from the 'numbers' array

  const emptyArray = [];
  const undefinedValue = getRandomElement(emptyArray);
  console.log(undefinedValue); // Output: undefined (empty array)

### [shuffle.js](shuffle.js)
- [`shuffle(array)`](shuffle.js#L1): Shuffles the elements of the given array in place using the Fisher-Yates shuffle algorithm.

  **Parameters:**
  - `array` (Array): The array to be shuffled.

  **Returns:**
  - This function modifies the original array in place. It does not return a new array.

  **Algorithm:**
  - The shuffle function uses the Fisher-Yates shuffle algorithm, also known as the Knuth shuffle, to efficiently randomize the order of elements in the array.

  **Examples:**
  ```javascript
  const arr1 = [1, 2, 3, 4, 5, 6];
  shuffle(arr1);
  console.log(arr1); // Output: Shuffled array: [4, 1, 2, 6, 3, 5]

  const arr2 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
  shuffle(arr2);
  console.log(arr2); // Output: Shuffled array of fruits: ['grape', 'kiwi', 'banana', 'orange', 'apple']

### [get-sign.js](get-sign.js)
- [`getSign(number)`](get-sign.js#L1): Returns the sign of the given number, including the case of -0.

  **Parameters:**
  - `number` (number): The number for which to determine the sign.

  **Returns:**
  - The sign of the number, or `undefined` if the input is not a number.

  **Example:**
  ```javascript
  const sign1 = getSign(5); // Output: 1
  const sign2 = getSign(-5); // Output: -1
  const sign3 = getSign(0); // Output: +1
  const sign4 = getSign(-0); // Output: -1
  const sign5 = getSign('Hello'); // Output: undefined


