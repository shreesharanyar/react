import React from'react';
import Expenses from './components/expenses';
import NewExpense from './components/Newexpenses/Newexpense';

const App = () => {
  const expenses = [
    {
      id: '1',
      title: 'Tissue',
      amount: 20.00,
      date: new Date(2023, 5, 25),
    },
    {
      id: '2',
      title: 'towel',
      amount: 200.00,
      date: new Date(2023, 6, 25),
    },
    {
      id: '3',
      title: 'chocolate',
      amount: 100.00,
      date: new Date(2023, 4, 8),
    },
    {
      id: '4',
      title: 'flowerpot',
      amount: 250.00,
      date: new Date(2023, 8, 9),
    },
  ];
  return (
    <div>
      <h2>Expenser Tracker</h2>
      <NewExpense></NewExpense>
      <Expenses item={expenses}/>
     
    </div>


  );
}
export default App;