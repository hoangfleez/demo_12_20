function findFirstOccurrence(numbers, target) {
    var low = 0;
    var hight = numbers.length - 1;
    var result = -1;
    while (low <= hight) {
        var mid = Math.floor((low + hight) / 2);
        if (numbers[mid] == target) {
            result = mid;
            hight = mid - 1;
        }
        else if (numbers[mid] > target) {
            hight = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return result;
}
var data = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
var target = 5;
var index = findFirstOccurrence(data, target);
if (index != -1) {
    console.log("Ph\u00E2\u0300n t\u01B0\u0309 ".concat(target, " xu\u00E2\u0301t hi\u00EA\u0323n \u0111\u00E2\u0300u ti\u00EAn ta\u0323i vi\u0323 tri\u0301 ").concat(index));
}
else {
    console.log("Ph\u00E2\u0300n t\u01B0\u0309 ".concat(target, " kh\u00F4ng t\u00F4\u0300n ta\u0323i trong ma\u0309ng"));
}
