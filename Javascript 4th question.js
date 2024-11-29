// Function to reverse a string
function reverseString(str) {
    // Convert the string into an array of characters
    let char = str.split('');
    
    // Reverse the array
    char.reverse();
    
    // Join the array elements back into a string
    let reversedStr = char.join('');
    
    return reversedStr;
}

// Example usage
let originalString = "javascript";
let reversedString = reverseString(originalString);

console.log("Original String:", originalString);  // Output: "hello"
console.log("Reversed String:", reversedString);  // Output: "olleh"