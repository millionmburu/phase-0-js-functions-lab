function calculateTax(amount) {
    let taxRate = 0.1;
    let taxValue = amount * taxRate;
    return taxValue;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let price = originalPrice - (originalPrice * (discountPercentage / 100));
    return price;
}
console.log(calculateTax(1000))
console.log(convertToUpperCase("hello world"))
console.log(findMaximum(10, 20))    
console.log(isPalindrome("madam"))  
console.log(calculateDiscountedPrice(100, 20)) 

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };