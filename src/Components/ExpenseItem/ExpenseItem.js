import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate.js";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <div>{props.Expense.date.toISOString()}</div> to convert to string we need to add "toISOString"  */}
      <div className="expense-item-descriptions">
        <h2>{props.title}</h2>
        <div className="expense-item-price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
