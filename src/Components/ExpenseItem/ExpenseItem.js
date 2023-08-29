import expenseItem from './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate.js';
function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car insurance';
  // const expenseAmount = 1000;

 
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.Expense.date}/>                                        
      { /* <div>{props.Expense.date.toISOString()}</div> to convert to string we need to add "toISOString"  */}
      <div className='expense-item-descriptions'>
        <h2>{props.Expense.title}</h2>
        <div className='expense-item-price'>{props.Expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
