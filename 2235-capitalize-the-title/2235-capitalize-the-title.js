/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const array = title.toLowerCase().split(" ");
    const capital = [];


    for(const word of array){
        if(word.length <= 2){
            capital.push(word);
        } else {
            capital.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
    }

  return capital.join(" ")
};