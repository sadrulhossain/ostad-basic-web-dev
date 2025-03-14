/**
 * 1.  Write a for loop using javascript and it will show only odd numbers between 1 - 20.
 * Ex: 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20
 */
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

/**
 * 2. Write a function names sumArray(arr) that takes an array of numbers
 * and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output: 10
 */
const sumArray = (arr) => {
    return arr.reduce((a, b) => a + b);
};
console.log(sumArray([1, 2, 4, 23 , 45, 3]));


/**
 * 3. Write a JavaScript function named mergeArrays(arr1, arr2)
 * that takes two arrays as arguments and returns a new array.
 * Ex. mergeArrays([1,2],[3,4]) //Output: [1,2,3,4]
 */
const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 3, 3, 5, 6], [2, 3, 4, 56]));



