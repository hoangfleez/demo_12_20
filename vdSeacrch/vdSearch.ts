function Search(numbers: number[],
                needle: number) {
    for (const number of numbers) {
        if (number === needle) {
            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(Search(arr,6));
console.log(Search(arr,7));