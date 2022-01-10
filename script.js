let money, time;
let arr = [];
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: arr,
    savings: true
};

function chouseExpenses() {
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
}

chouseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let firstOpt = prompt("Введите необязательную статью расходов в этом месяце", ""),
            secondOpt = +prompt("Во сколько обойдется", "");
         if ((typeof(firstOpt)) === 'string' && (typeof(firstOpt)) != null && (typeof(secondOpt)) != null
             && firstOpt != '' && secondOpt != '' && firstOpt.length < 20) {
             console.log("done");
             appData.optionalExpenses[firstOpt] = secondOpt;
            } else {
             i--;
        }
    }
}

chooseOptExpenses();

console.log(appData);
