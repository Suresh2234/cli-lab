
//Question 1//
/*Part 1: Fizz Buzz
To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.*/


for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // If the number is not divisible by either 3 or 5
    else {
        console.log(i);
    }
}



/*Part 2: Prime Time
Now we will move onto something slightly more complex.
Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.*/


function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // Numbers divisible by 2 or 3 are not prime

    // Check divisibility by numbers of the form 6k ± 1
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function nextPrime(n) {
    // Start searching for the next prime number from n
    while (true) {
        if (isPrime(n)) {
            return n; // Return the prime number if found
        }
        n++; // Increment to the next number
    }
}

// Test the function with different values of n
const nValues = [4, 5, 9, 20, 50, 100];
nValues.forEach(n => {
    console.log(`For n = ${n}, next prime number is: ${nextPrime(n)}`);
});

