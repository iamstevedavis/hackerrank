// https://www.hackerrank.com/challenges/repeated-string
const { PerformanceObserver, performance } = require('perf_hooks');

function repeatedString(s, n) {
  if (isNaN(n) || !isNaN(s) || n < 0 || s.length === 0) {
    return 0;
  }

  // Handle cases where repeat length is less or equal to total string length
  // "aaa", 1
  if (n <= s.length) {
    return (s.substring(0, n).match(/a/g) || []).length;
  }

  // Count occurnaces in s
  const occurancesInInitialString = (s.match(/a/g) || []).length;
  // If there are no occurances, return 0
  if (occurancesInInitialString === 0) {
    return 0;
  }

  let repeatedLength = n;
  // Find out how many extra "a" from the original string we need to consider because of truncation
  const extra = n % s.length;
  let extraCount = 0;

  // If there is extra letters, repeatedLength will be 1 less (not even)
  if(extra !== 0) {
    repeatedLength--;
    // Find occurances of a in "extra" portion of the original string
    extraCount = (s.substring(0, extra).match(/a/g) || []).length;
  }

  // const wholeRepeats = Math.round((repeatedLength / s.length));
  const wholeRepeats = (n - extra) / s.length;

  // If input is aa, 10 then 2 * 5
  // If input is aaa, 10 then 3 * 3 (+ 1 extra)
  let baseCount = (occurancesInInitialString * wholeRepeats);

  return baseCount + extraCount;
}

let str = "aba".repeat(19);
let repeatLength = 42923487;
var t0 = performance.now()

const test = repeatedString(str, repeatLength);

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

console.log(test)
