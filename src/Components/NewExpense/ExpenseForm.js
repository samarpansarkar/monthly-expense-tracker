import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [newInput, setNewInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setEnterTitle(event.target.value);
  //   console.log(enteredTitle);

  //   // setNewInput({ ...newInput, enteredTitle: event.target.value }); // ...newInput - here three dots are spread operator. link: https://www.w3schools.com/react/react_es6_spread.asp

  //   // setNewInput((prevState)=>{
  //   //   return {
  //   //   ...prevState,
  //   //     enteredTitle: event.target.value,  //If my state updates depending on my previous state then always use use function to store previous state.
  //   //   };
  //   // })

  // };

  // const amountChangeHandler = (event) => {
  //   setEnterAmount(event.target.value);
  //   // setNewInput({ ...newInput, enteredAmount: event.target.value }); // ...newInput - here three dots are spread operator.  link: https://www.w3schools.com/react/react_es6_spread.asp
  //   console.log(enteredAmount);
  // };

  // const dateChangeHandler = (event) => {
  //   setEnterDate(event.target.value);
  //   // setNewInput({ ...newInput, enteredDate: event.target.value }); // ...newInput - here three dots are spread operator.  link: https://www.w3schools.com/react/react_es6_spread.asp
  //   console.log(enteredDate);
  // };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expensesData);
    props.onSaveExpenseData(expensesData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2010-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
