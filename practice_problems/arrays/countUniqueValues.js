function countUniqueValues(arr) {
    if (arr.length < 2) {
        return arr.length;
    }

    let counter = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            counter += 1;
        }
    }

    return counter;

}

countUniqueValues([1, 1, 2, 3, 4, 4, 4, 4, 5, 5]);
