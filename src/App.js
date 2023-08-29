import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Card from "./Components/Card/Card";

function App() {
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

  return (
    <Card className="appContainer">
      <Navbar />
      <ExpenseItem Expense={expense[0]} />
      <ExpenseItem Expense={expense[1]} />
      <ExpenseItem Expense={expense[2]} />
      <ExpenseItem Expense={expense[3]} />
    </Card>
  );
}

export default App;
