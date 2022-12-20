function Search(numbers, needle) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number === needle) {
            return true;
        }
    }
    return false;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(Search(arr, 6));
console.log(Search(arr, 7));
