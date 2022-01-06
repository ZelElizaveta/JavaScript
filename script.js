let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    arr = [];

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: "",
    income: arr,
    savings: false
};

for (let i = 0; i < 2; i++) {
   let first = prompt("Введите обязательную статью расходов в этом месяце", ""),
        second = +prompt("Во сколько обойдется", "");
    if ((typeof(first)) === 'string' && (typeof(first)) != null && (typeof(second)) != null
        && first != '' && second != '' && first.length < 20) {
        console.log("done");
        appData.expenses[first] = second;
    } else {
        i--;
    }
}

// let i = 0;

// while (i < 2) {
//     let first = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         second = +prompt("Во сколько обойдется", "");
//     if ((typeof(first)) === 'string' && (typeof(first)) != null && (typeof(second)) != null
//         && first != '' && second != '' && first.length < 20) {
//         console.log("done");
//         appData.expenses[first] = second;
//     } else {
//         i--;
//     }
//     i++;
// }

// do {
//     let first = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         second = +prompt("Во сколько обойдется", "");
//     if ((typeof(first)) === 'string' && (typeof(first)) != null && (typeof(second)) != null
//         && first != '' && second != '' && first.length < 20) {
//         console.log("done");
//         appData.expenses[first] = second;
//     } else {
//         i--;
//     }
//     i++;
// }
//     while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}

console.log(appData);
