var nextItemId = 0;

export function idNotificationGenerator() {
  return nextItemId++;
}

export function charCount(text) {
  var charTotal = text.length;
  if (charTotal > 50) {
    return text.slice(0, 50) + "...";
  }
  return text;
}
