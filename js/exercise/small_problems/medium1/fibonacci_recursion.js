function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 2) + fibonacci(n - 1)
}

// Rule
// It calls itself at least once.
// It has an ending condition (if (n === 1) above).
// The results of each recursion are used in each step (n + sum(n - 1) uses sum(n - 1).
// Except for n === 1 && n === 2(ending condition), every fibonacci equals to sum of the previous 2 fibonacci number


// Test
// - if n = 1, fibonacci(n) === 1
// - if n = 2, fibonacci(n) === 1
// - if n = 3, fibonacci(n) === 2 === 1 + 1
// - if n = 4, fibonacci(n) === 3 === 1 + 2
// - if n = 5, fibonacci(n) === 5 === 2 + 3


// Algorithm
// n === 1 && n === 2 are the ending condition, if (n === 1 || n === 2) return 1;
// if n >= 3 return fibonacci(n-1) + fibonacci(n-2)
​