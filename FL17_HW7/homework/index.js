function getAge(birthdayDate) {
    let year = 2020;
    let month = 9;
    let day = 22;

    let firstYear = 1970;

    let today = new Date(year, month, day)
    let msDiff = today - birthdayDate.getTime();
    let age = new Date(msDiff);

    return Math.abs(age.getUTCFullYear() - firstYear);
}

function getWeekDay(dateObj) {
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date(dateObj)
    let numberOfWeek = date.getDay();

    for (let i = 0; i < daysOfWeek.length; i++) {
        if (i === numberOfWeek) {
            return daysOfWeek[i];
        }
    }
}

function getAmountDaysToNewYear() {
    const thousand = 1000;
    const sixty = 60;
    const twentyFour = 24;

    const today = new Date();
    const newYear = new Date('December 31, 2021');
    const oneDay = thousand * sixty * sixty * twentyFour;
    const diffMS = newYear - today;

    const getDayToNy = Math.round(diffMS / oneDay);

    return getDayToNy;
}

function getProgrammersDay(yrDt) {
    const thousand = 1000;
    const sixty = 60;
    const twentyFour = 24;
    const twoHundredFiftyFive = 255;

    const oneDay = thousand * sixty * sixty * twentyFour;

    let programDt = new Date(new Date().setFullYear(yrDt, 0, 1) + oneDay * twoHundredFiftyFive);
    let monthDt = programDt.toLocaleString('en', { month: 'short' });
    return `${programDt.getDate()} ${monthDt}, ${yrDt} (${getWeekDay(programDt)}) `;
}

function howFarIs(specifiedWeekday) {
    const thousand = 1000;
    const sixty = 60;
    const twentyFour = 24;
    const two = 2;
    const seven = 7;

    specifiedWeekday = specifiedWeekday[0].toUpperCase() + specifiedWeekday.slice(1).toLowerCase();
    let weekDay = getWeekDay(new Date());

    const oneDay = thousand * sixty * sixty * twentyFour;

    if (weekDay === specifiedWeekday) {
        return `Hey, today is ${specifiedWeekday} =)`
    } else {
        let date1 = new Date();
        let date2 = new Date(new Date().setDate(date1.getDate() + seven));

        for (let i = new Date(); i < date2; i.setDate(i.getDate() + 1)) {
            let weekDay1 = getWeekDay(new Date(i));
            if (specifiedWeekday.slice(0, two) === weekDay1.slice(0, two)) {
                let number = Math.ceil((i.getTime() - date1.getTime()) / oneDay)
                return `It's ${number} day(s) left till ${specifiedWeekday}`
            }
        }
    }
}

function isValidIdentifier(str) {
    let strRGEX = /^[A-Za-z$_@][A-Za-z0-9$_@]+$/;
    return strRGEX.test(str);
}

function capitalize(str) {
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

function isValidAudioFile(str) {
    let strRGEX = /^[a-zA-Z]+[.mp3|.flac|.alac|.aac]+$/;
    return strRGEX.test(str);
}

function getHexadecimalColors(str) {
    let strRGEX = /#(\b[A-Fa-f0-9]{6}\b|\b[A-Fa-f0-9]{3}\b)/g;
    let arr = str.match(strRGEX);
    if (arr === null) {
        return [];
    } else {
        return str.match(strRGEX)
    }
}

function isValidPassword(str) {
    let strRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (/([A-Z])/.test(str) === false) {
        return `${strRGEX.test(str)} (no uppercase letter)`;
    } else if (/([a-z])/.test(str) === false) {
        return `${strRGEX.test(str)} (no lowercase letter)`;
    } else if (/(\d)/.test(str) === false) {
        return `${strRGEX.test(str)} (no numbers)`;
    } else if (/[a-zA-Z\d]{8,}/.test(str) === false) {
        return `${strRGEX.test(str)} (too short)`;
    } else {
        return strRGEX.test(str);
    }
}

function addThousandsSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getAllUrlsFromText(text) {
    let strRGEX = /(https?:\/\/[^\s]+)/g;

    try {
        let arr = text.match(strRGEX);
        if (arr === null) {
            return [];
        } else {
            return text.match(strRGEX);
        }
    } catch (e) {
        return 'error';
    }
}