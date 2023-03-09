import React from 'react'
import "./NewExpense.css"
import NewExpenseForm from './NewExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const singleExpenseData = {
            id : Math.random().toString(),
            ...enteredExpenseData,
        }
        props.onExpenseSubmit(singleExpenseData);
    };
  return (
    <div className='new-expense'>
        <NewExpenseForm OnSaveExpenseSubmit = {saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense