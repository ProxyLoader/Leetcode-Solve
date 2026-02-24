/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  let array = title.split(" ");
  let stringBuilder = "";
  let isF = false;
  for (let i = 0; i < array.length; i++) {
    isF = false;
    stringBuilder += " ";

    for (let j = 0; j < array[i].length; j++) {
      if (array[i].length <= 2) {
        stringBuilder += array[i][j].toLowerCase();
        continue;
      }

      if (isF === false) {
        stringBuilder += array[i][j].toUpperCase();
        isF = true;
      } else {
        stringBuilder += array[i][j].toLowerCase();
      }
    }
  }

  return stringBuilder.trim();
};