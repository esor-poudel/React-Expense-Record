import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const yearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredData = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

 

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onYearChange={yearChangeHandler} />
      <ExpensesChart items={filteredData} />
      <ExpensesList data = {filteredData} />
    </Card>
  );
};

export default Expenses;
