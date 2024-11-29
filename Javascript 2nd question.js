//map implementation 
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

//filter implementation 
function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

//reduce implementation 
function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    for (let i = (initialValue === undefined ? 1 : 0); i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

//flatmap implementation 
function customFlatMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let mappedValue = callback(arr[i], i, arr);
        // Flatten the result of the mapping function
        if (Array.isArray(mappedValue)) {
            result.push(...mappedValue);
        } else {
            result.push(mappedValue);
        }
    }
    return result;
}

//code of usage all above

const numbers = [1, 2, 3, 4, 5];

// Map example: Multiply each number by 2
const mapped = customMap(numbers, num => num * 2);
console.log('Mapped (x2):', mapped);  // [2, 4, 6, 8, 10]

// Filter example: Keep only even numbers
const filtered = customFilter(numbers, num => num % 2 === 0);
console.log('Filtered (even numbers):', filtered);  // [2, 4]

// Reduce example: Sum all numbers
const reduced = customReduce(numbers, (acc, num) => acc + num, 0);
console.log('Reduced (sum):', reduced);  // 15

// FlatMap example: Convert numbers to an array of even and odd values
const flatMapped = customFlatMap(numbers, num => [num, num * 2]);
console.log('FlatMapped (num, num*2):', flatMapped);  // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]