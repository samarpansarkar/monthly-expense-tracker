import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.Expense.title);

  const ClickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.Expense.date} />
      {/* <div>{props.Expense.date.toISOString()}</div> to convert to string we need to add "toISOString"  */}
      <div className="expense-item-descriptions">
        <h2>{title}</h2>
        <div className="expense-item-price">{props.Expense.amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
