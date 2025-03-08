/**
 * 1. Write a function named calculateSum that takes two arguments
 * and returns the sum of the two arguments.
 */
const calculateSum = (a, b) => {
    return [a, b].reduce((a, b) => a + b);
};

/**
 * 2. Write a function named isEven that takes one argument
 * and returns true if the number is even, and false if it is not.
 */
const isEven = (a) => {
    return a % 2 === 0;
};

/**
 * 3. Write a function named findMax that takes an array of numbers
 * and returns the largest number from the array.
 */
const findMax = (numbers) => {
    return numbers.reduce((a, b) => a > b ? a : b);
};

/**
 * 4. Write a function named filterOddNumbers that takes an array of numbers
 * and returns a new array containing only the odd numbers.
 */
const filterOddNumbers = (numbers) => {
    return numbers.filter(n => n % 2 !== 0);
};

/**
 * 5. Write a function named countWords that takes a string
 * and returns the number of words in the string.
 */
const countWords = (str) => {
    return str.split(/\s+/).filter(Boolean).length;
};


/**
 * 6. Write a function named removeDuplicates that takes an array
 * and returns a new array with duplicate elements removed.
 */
const removeDuplicates = (arr) => {
    return arr.filter((val, index, self) => self.indexOf(val) === index);
}