function findFirstOccurrence(numbers: number[],
                             target: number) {
    let low: number = 0;
    let hight: number = numbers.length - 1;
    let result: number = -1;
    while (low <= hight) {
        let mid = Math.floor((low + hight) / 2);
        if (numbers[mid] == target) {
            result = mid;
            hight = mid - 1;
        } else if (numbers[mid] > target) {
            hight = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}


let data: number[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let target: number = 5
let index: number = findFirstOccurrence(data, target);

if (index != -1) {
    console.log(`Phần tử ${target} xuất hiện đầu tiên tại vị trí ${index}`)
}else {
    console.log(`Phần tử ${target} không tồn tại trong mảng`)
}