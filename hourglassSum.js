// https://www.hackerrank.com/challenges/2d-array
function hourglassSum(arr) {
  let currHourglassNum = 0;
  const flatArr = [].concat(...arr);
  if (flatArr.length !== 6 * 6) return 0;
  let currentHighestHourglassValue = 0;
  for(let i = 0; i < flatArr.length; i++) {
    if (currHourglassNum > 16) break;
    let tl = flatArr[i];
    let tm = flatArr[i + 1];
    let tr = flatArr[i + 2];
    let mm = flatArr[i + 7];
    let bl = flatArr[i + 12];
    let bm = flatArr[i + 13];
    let br = flatArr[i + 14];
    const hourGlassVal = tl + tm + tr + mm + bl + bm + br;
    if (isNaN(hourGlassVal)) {
      currentHighestHourglassValue = 0;
      break;
    }
    debugger;
    if (hourGlassVal > currentHighestHourglassValue) {
      currentHighestHourglassValue = hourGlassVal;
    }
    currHourglassNum++;
    if (16 % i === 1) {
      i += 2;
    }
  }
  return currentHighestHourglassValue;
}

const arrIn = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
];

const arrIn2 = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 9, 2, -4, -4, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0],
]

console.log(hourglassSum(arrIn2));
