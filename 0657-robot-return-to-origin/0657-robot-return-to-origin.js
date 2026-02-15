/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const MOVES = {
        UP: 1,
        DOWN: -1,
        RIGHT: 1,
        LEFT: -1,
    }
    let finalSum = [0, 0];

    for(const move of moves){
        if(move === "U"){
            finalSum[1] += MOVES.UP;
        } else if(move === "D"){
            finalSum[1] += MOVES.DOWN;
        } else if(move === "L"){
            finalSum[0] += MOVES.LEFT;
        } else if(move === "R"){
            finalSum[0] += MOVES.RIGHT;
        }
    }


    if(finalSum[0] === 0 && finalSum[1] === 0) return true;
    return false;
};
