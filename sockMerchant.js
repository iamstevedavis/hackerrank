// https://www.hackerrank.com/challenges/sock-merchant
function sockMerchant(n, ar) {
  let socksToReturn = n;
  let tmp = 0;
  ar.sort();

  for (let i = 0; i < ar.length; i++) {
    if (i + 1 >= n) break;
    if (isNaN(ar[i]) !== false) break;
    if (ar[i] === ar[i + 1]) {
      i++;
      tmp++;
    }
  }
  return tmp;
}
