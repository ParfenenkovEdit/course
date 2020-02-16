let money = +prompt("Ваш бюджет на месяц?", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {

  },
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let expenseName = prompt("Введите статью расхода"),
      expenseCost = +prompt("Сколько это стоит?");
  appData.expenses[expenseName] = expenseCost;
}

alert(`Бюджет на день: ${appData.budget/30}`);

for (let key in appData.expenses) {
  alert(`${key} : ${appData.expenses[key]}`);
}




