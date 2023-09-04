import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";
import ExpensesList from "./Components/ExpensesList/ExpensesList";

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
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="App">
      <li>
        <Card className="appContainer">
          <Navbar />
          <NewExpense onAddExpense={addExpenseHandler} />
          <ExpenseFilter
            defaultYear={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesList items={filteredExpense} />
        </Card>
      </li>
    </div>
  );
}

export default App;
