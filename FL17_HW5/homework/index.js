function isEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function isBigger(a, b) {
    return a > b;
}

function storeNames() {
    let newArr = [];

    for (let arg of arguments) {
        newArr.push(arg);
    }

    return newArr;
}

function getDifference(num1, num2) {
    return num1 > num2 ? num1 - num2 : num2 - num1;
}

function negativeCount(arr) {
    let count = 0;

    for (let values of arr) {
        if (parseFloat(values) < 0) {
            count++;
        }
    }

    return count;
}

function letterCount(str1, str2) {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2) {
            count++;
        }
    }

    return count;
}

function countPoints(arrPoints) {
    let points = 0;
    const three = 3,
        zero = 0,
        one = 1;

    for (let i = 0; i < arrPoints.length; i++) {

        let splitPoints = arrPoints[i].split(':')
        let x = Number(splitPoints[0]);
        let y = Number(splitPoints[1]);

        if (x > y) {
            points += three;
        } else if (x < y) {
            points += zero;
        } else {
            points += one;
        }
    }

    return points;
}