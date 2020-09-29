// https://www.hackerrank.com/challenges/counting-valleys
function countingValleys(n, s) {
  let numValleys = 0;
  let currOffset = 0;
  let inValley = false;
  const directions = {
    U: 1,
    D: -1,
  };

  for (let i = 0; i < s.length; i++) {
    const currDir = s.charAt(i).toUpperCase();
    const currDirValue = directions[currDir];
    if (!directions[currDir]) continue;
    currOffset = currOffset + currDirValue;
    if (currOffset === 0 && inValley === true) {
      numValleys++;
      inValley = false;
    }

    if (currOffset < 0 && inValley === false) {
      inValley = true;
    }

    if (currOffset > 0) {
      inValley = false;
    }
  }

  return numValleys;
}
