let initialAmount,
    numberOfYears,
    percentage,
    one = 1,
    two = 2,
    hundred = 100,
    thousand = 1000,
    totalProfit = 0,
    totalAmount = 0;

if (getUserData()) {
    for (let i = 1; i <= numberOfYears; i++) {
        totalProfit += (initialAmount + totalProfit) / hundred * percentage;
    }

    totalAmount = (initialAmount + totalProfit).toFixed(two);
    totalProfit = totalProfit.toFixed(two);

    alert(`Initial amount: ${initialAmount}
Number of years: ${numberOfYears}
Percentage of year: ${percentage}

Total profit: ${totalProfit}
Total amount: ${totalAmount}`)
}

function getUserData() {

    initialAmount = prompt('Enter Initial amount');
    initialAmount = parseInt(initialAmount);

    if (isNaN(initialAmount) || initialAmount < thousand) {
        alert('Invalid input data');
        return false;
    }

    numberOfYears = prompt('Enter number of years');
    numberOfYears = parseInt(numberOfYears);

    if (isNaN(numberOfYears) || numberOfYears < one) {
        alert('Invalid input data');
        return false;
    }

    percentage = prompt('Enter percentage of a year');
    percentage = parseInt(percentage);

    if (isNaN(percentage) || percentage > hundred) {
        alert('Invalid input data');
        return false;
    }

    return true;
}

