// Write your code at relevant places in the code below:

import React ,{ useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), amount: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), amount: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), amount: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), amount: 200 },
  ]);

  /*in the rpev question its name was const saveExpenseDataHandler = (expenseData) => {
    console.log(expenseData);*/

  const addExpenseHandler = (expense) => { 
    console.log(expense);

    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];

    });

  };

  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
