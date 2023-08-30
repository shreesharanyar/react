function ExpenseDate(props)

{
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
    return(
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
   
    );
} 

<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem> 
<ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem> 
<ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem> 
<ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> 
