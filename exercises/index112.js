let showNumbers = function (startNumber, endNumber) {
    var list = [];
    if (startNumber < endNumber) {
        for (var i = startNumber; i <= endNumber; i++) {
            list.push(i);
        }
    } else if (startNumber > endNumber) {
        for (var i = startNumber; i >= endNumber; i--) {
            list.push(i);
        }
    }
    if (startNumber < endNumber) {
        list.sort(function (a, b) { return a - b });
        console.log(list)
    } else if (startNumber > endNumber) {
        list.sort(function (a, b) { return b - a });
        console.log(list)
    } else if (startNumber == endNumber) {
        console.log(startNumber + ' and ' + endNumber + ' are the same number')
    } else
        console.log('Please enter a valid number')
}
showNumbers(100, 0)
