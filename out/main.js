function PrintPyramid(numOfPilesAll) {
    var numOfPilesNow = 0;
    var space = 0;
    var paintOfPlies = "";
    var asterisk = 0;
    for (numOfPilesNow = 1; numOfPilesNow <= numOfPilesAll; numOfPilesNow++) {
        paintOfPlies = "";
        for (space = 0; space <= numOfPilesAll - numOfPilesNow - 1; space++) {
            paintOfPlies += " ";
        }
        for (asterisk = 1; asterisk <= 2 * numOfPilesNow - 1; asterisk++) {
            paintOfPlies += "*";
        }
        console.log(paintOfPlies);
    }
}
window.onload = function () {
    PrintPyramid(5);
};
//# sourceMappingURL=main.js.map