import expenseDate from './ExpenseDate.css';

function ExpenseDate (props) {
    const month =  props.date.toLocaleString('en-US', {month:'long'});  //////////////////////////////////
    const Year =  props.date.toLocaleString('en-US', {year:'numeric'}); //google toLocaleString function//
    const Day =  props.date.toLocaleString('en-US', {day:'numeric'});   //////////////////////////////////
  
    return(
        <div className='expenseDate-container'>
        <div className='expenseDate-month'>{month}</div>
        <div className='expenseDate-year'>{Year}</div>
        <div className='expenseDate-day'>{Day}</div>
      </div>  
    );
}

export default ExpenseDate;