import React, { useState } from 'react'
    
export default function AddTransactions() {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

      return (
        <div class="AddTransactions">
        <h2 class="border-b">Add new transaction</h2>
        <div class="text-amount">
          <div className='text'>
            <span class="text-sm">Transaction note : <span>{text }</span></span>
            <input type="text" placeholder="Buy Fruits | Salary" onChange={handleText} />
          </div>
          <div class="amount">
              <span class="text-sm">Transaction Amount : <span> ${ amount}</span> </span>
            <i class="text-xs">(negative - expense. positive - income)</i>
            <input type="number" placeholder="+10 | -10" onChange={handleAmount} />
          </div>

          <div class="add-transaction">
            <button class="">Add transaction</button>
          </div>
        </div>
      </div>
      )
    }
    