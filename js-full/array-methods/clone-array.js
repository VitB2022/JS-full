function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let clonedArr = [];
    clonedArr = [...arr];
    return clonedArr;
}

console.log(cloneArr([3, 7, 9]));