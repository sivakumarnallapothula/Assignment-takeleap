// Callback function
function greetingCallback(name) {
    console.log(`Hello, ${name}!`);
}

// Main function that takes a callback
function sayHelloAfterDelay(name, callback) {
    setTimeout(() => {
        console.log("How are you?");
        callback(name); // Invoke the callback function after the delay
    }, 2000); // 2-second delay
}

// Calling the main function and passing the callback
sayHelloAfterDelay("Siva", greetingCallback);