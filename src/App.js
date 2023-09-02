import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Card from "./Components/Card/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";

function App(props) {
  const expense = [
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

  const addExpenseHandler = (expenses) => {
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

  return (
    <div className="App">
      <Card className="appContainer">
        <Navbar />
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseFilter
          defaultYear={filteredYear}
          onChangeFilter={addExpenseFilter}
        />
        <p className="filterInfo-text">
          <h3>Note: {filterInfoText} year data are hidden!</h3>
        </p>
        <ExpenseItem Expense={expense[0]} />
        <ExpenseItem Expense={expense[1]} />
        <ExpenseItem Expense={expense[2]} />
        <ExpenseItem Expense={expense[3]} />
      </Card>
    </div>
  );
}

export default App;
