function countElement(arr: number[], value: number) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            count++;
        }
    }
    return count;
}


let arr = [1, 1, 1, 2, 2, 2, 2, 5, 5,]
console.log(countElement(arr, 1));
console.log(countElement(arr, 2));
