function reverseNumber(num) {
    let reverseString = '';
    const changedNum = num + '';

    if (num < 0) {
        reverseString += '-';
        for (let i = changedNum.length - 1; i >= 1; i -= 1) {
            reverseString += changedNum[i];
        }
    } else {
        for (let i = changedNum.length - 1; i >= 0; i -= 1) {
            reverseString += changedNum[i];
        }

    }
    
    return reverseString;
}

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function map(arr, func) {
    const newArr = [];

    forEach(arr, function (el) {
        if (typeof el === 'string') {
            el = parseInt(el);
        }
        newArr.push(func(el));
    });

    return newArr;
}

function filter(arr, func) {
    const newArr = [];

    forEach(arr, function (el) {
        if (func(el)) {
            newArr.push(el);

        }
    });

    return newArr;
}

function getAdultAppleLovers(data) {
    const userAge = 18;

    let filterArr = filter(data, el => el.age > userAge && el.favoriteFruit === 'apple');
    let mapArr = map(filterArr, el => el.name);

    return mapArr;
}

function getKeys(obj) {
    const newArr = [];

    for (let keys in obj) {
        if (keys) {
            newArr.push(keys);
        }
    }

    return newArr;
}

function getValues(obj) {
    const newArr = [];

    for (let values in obj) {
        if (obj[values]) {
            newArr.push(obj[values]);
        }
    }

    return newArr;
}

function showFormattedDate(dateObj) {
    const four = 4,
        seven = 7,
        eight = 8,
        ten = 10;

    const dateString = dateObj.toDateString();
    let year = dateString.slice(-four);
    let month = dateString.slice(four, seven);
    let date = dateString.slice(eight, ten);

    return `It is ${date} of ${month}, ${year}`
}
