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

// Task 4

/**
 *
 * @param {number} side - Rhomb's side length
 * @param {number} height - Rhomb's height length
 * @returns {number} - Rhomb's area
 */
function rhombArea(side, height) {
    return side * height;
}

/**
 *
 * @param {number} height - Cylinder's height length
 * @param {number} radius - Cylinder's base radius length
 * @returns {number} - Cylinder's area
 */
function cylinderArea(height, radius) {
    return 2 * Math.PI * radius * (height + radius);
}

/**
 *
 * @param {number} base - Triangle's base length
 * @param {number} height - Triangle's height length
 * @returns {number} - Triangle's area
 */
function triangleArea(base, height) {
    return (base * height) / 2;
}

/**
 *
 * @param {number} length
 * @param {number} width
 * @returns {number}
 */
function rectangleArea(length, width) {
    return length * width;
}