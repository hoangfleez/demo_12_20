// function searchBinary(numbers: number[],
//                       needle: number): boolean {
//     let left = 0;
//     let right = numbers.length - 1;
//     while (left < right) {
//         let mid = Math.floor((right + left) / 2);
//         if (numbers[mid] === needle) {
//             return true;
//         } else if (numbers[mid] > needle) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return false;
// }
// let arr = [1, 2, 3, 4, 5, 6, 8, 10];
// console.log(searchBinary(arr, 6));
// console.log(searchBinary(arr, 7));
function searchBinary(numbers, needle, left, right) {
    if (right < left) {
        return false;
    }
    var mid = Math.floor((right + left) / 2);
    if (numbers[mid] == needle) {
        return true;
    }
    else if (numbers[mid] > needle) {
        return searchBinary(numbers, needle, left, mid - 1);
    }
    else {
        return searchBinary(numbers, needle, mid + 1, right);
    }
}
var arr = [1, 2, 3, 4, 5, 6, 8, 10];
console.log(searchBinary(arr, 6, 0, arr.length - 1));
console.log(searchBinary(arr, 7, 0, arr.length - 1));
