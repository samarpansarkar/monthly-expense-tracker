import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Card from "./Components/Card/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";

const INITIAL_EXPENSES = [
  {
    id: "01",
    title: "Car Insurance",
    amount: "$1000",
    date: new Date(2021, 1, 1),
  },
  {
    id: "02",
    title: "Rent",
    amount: "$1000",
    date: new Date(2021, 12, 3),
  },
  {
    id: "03",
    title: "Gas",
    amount: "$1000",
    date: new Date(2021, 4, 6),
  },
  {
    id: "04",
    title: "House",
    amount: "$1000",
    date: new Date(2021, 11, 9),
  },
];

function App() {
  const [expense, setExpense] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenses) => {
    setExpense((prevExpenses) => {
      return [expenses, ...expense];
    });
    console.log(expenses);
    console.log("In App.js");
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = "2019,2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020,2021 & 2022";
  } else if (filteredYear === "2020") {
    filterInfoText = "2019,2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019,2020 & 2022";
  } else {
    filterInfoText = "2019,2020 & 2021";
  }

  const addExpenseFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="App">
      <Card className="appContainer">
        <Navbar />
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseFilter
          defaultYear={filteredYear}
          onChangeFilter={addExpenseFilter}
        />
        <div className="center">
          <p className="filterInfo-text">
            Note: {filterInfoText} year data are hidden!
          </p>
        </div>
        {filteredExpense.length === 0 ? (
          <p>No Expenses found!</p>
        ) : (
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default App;
