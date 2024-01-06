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
