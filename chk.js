function findAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid input: Please provide a non-empty array of numbers.";
    }

    // Calculate the sum of the array
    const sum = arr.reduce((total, num) => total + num, 0);

    // Calculate and return the average
    return sum / arr.length;
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
const average = findAverage(numbers);
console.log(`The average is: ${average}`);
