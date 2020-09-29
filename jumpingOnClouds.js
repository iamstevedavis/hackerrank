// https://www.hackerrank.com/challenges/jumping-on-the-clouds
function jumpingOnClouds(c) {
  let jumps = 0;
  let currPosition = 0;

  while(1) {
    let newPosition = currPosition + 2;
    if (newPosition > c.length) {
      break;
    }
    if (c[newPosition] === 1) {
      newPosition--;
    }
    currPosition = newPosition;
    jumps++;
    if (newPosition === c.length) {
      break;
    }
  }

  return jumps;
}
