// Task 1

/**
 *
 * @param {number} age - Person's age
 * @returns {boolean} - Defines is person adult
 */
function isAdult(age) {
    return age >= 18;
}

// Task 2

/**
 *
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {boolean} - Check multiplicity of first and second numbers
 */
function checkMultiplicity(num1, num2) {
    return num1 % num2 === 0;
}

// Task 3

/**
 *
 * @param {number} a - First triangle side's length
 * @param {number} b - Second triangle side's length
 * @param {number} c - Third triangle side's length
 * @returns {boolean} - Defines is triangle possible
 */
function isTrianglePossible(a, b, c) {
    return (a + b > c && a + c > b && b + c > a);
}