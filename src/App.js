import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 29000,
      date: new Date(2019, 2, 28),
    },
    { id: "2", title: "Medicine", amount: 30000, date: new Date(2020, 3, 25) },
    {
      id: "3",
      title: "Petrol Price",
      amount: 60000,
      date: new Date(2020, 4, 2),
    },
    { id: "4", title: "Shopping", amount: 50000, date: new Date(2021, 6, 15) },
  ];
  const [initialExpenses, setExpenes] = useState(expenses);

  const addNewExpense = (expense) => {
    setExpenes((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

 

  return (
    <div>
      <NewExpense onExpenseSubmit={addNewExpense} />
      <Expenses items={initialExpenses}  />
    </div>
  );
}

export default App;
