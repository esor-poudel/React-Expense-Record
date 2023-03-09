import React from "react";
import "../css/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  
  if(props.data.length === 0)
  {
    return <h2 className="expenses-list__fallback">No Expenses Recorded</h2>
  }

  return (
    <ul className="expense-list">
      {props.data.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
