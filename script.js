let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    first = prompt("Введите обязательную статью расходов в этом месяце", ""),
    second = +prompt("Во сколько обойдется", ""),
    firstAgain = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondAgain = +prompt("Во сколько обойдется", ""),
    articles = [first, firstAgain],
    expenses = [second, secondAgain],
    arr = [];

let appData = {
    budget: money,
    timeData: time,
    expenses : {
        questionFirst: articles,
        questionSecond: expenses,
    },
    optionalExpenses: "",
    income: arr,
    savings: false
};

let result = (appData.budget - (appData.expenses.questionSecond[0] + appData.expenses.questionSecond[1])) / 30;

console.log(appData);
alert("Ваш ежедневный бюджет:" + " " + result.toFixed(2));

