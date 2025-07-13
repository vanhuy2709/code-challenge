// Problem 1: Three ways to sum to n

/**
 * 1. Using a loop to iterate from 1 to n and accumulate the sum.
 * Time complexity: O(n)
 *  */
var sum_to_n_a = function (n) {
  let sum = 0;
  for (let idx = 1; idx <= n; idx++) {
    sum += idx;
  }
  return sum;
};

/**
 * 2. Using the arithmetic series formula to calculate the sum directly.
 * Time complexity: O(1)
 *  */
var sum_to_n_b = function (n) {
  return n * (n + 1) / 2;
};

/**
 * 3. Using recursion to calculate the sum by adding n to the sum of numbers from 1 to n-1.
 * Time complexity: O(n)
 *  */
var sum_to_n_c = function (n) {
  if (n <= 1) return n;
  return n + sum_to_n_c(n - 1);
};