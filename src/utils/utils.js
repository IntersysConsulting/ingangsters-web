export function prettifyCents(value) {
  var valueString = String(value);
  var decimals;
  if (
    valueString.substring(valueString.length - 2, valueString.length) === "00"
  )
    decimals = "0";
  else decimals = value % 100;
  var units = placeCommas(Math.trunc(value / 100));
  return `$${units}.${decimals >= 10 ? decimals : "0" + decimals}`;
}

function placeCommas(x) {
  if (x >= 1000)
    return placeCommas(Math.trunc(x / 1000)) + "," + completeZeros(x % 1000);
  else return x + "";
}

function completeZeros(x) {
  if (x < 100) {
    if (x < 10) return "00" + x;
    else return "0" + x;
  } else return x;
}

export function prettifyStatus(currentStatus) {
  const wordsArray = currentStatus.split("_");
  const uncapitalizedArray = wordsArray.map(word => {
    return word[0] + word.substring(1).toLowerCase();
  });
  return uncapitalizedArray.join(" ");
}
