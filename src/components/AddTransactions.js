import React from 'react'

export default function AddTransactions() {
    return (
        <div class="AddTransactions">
        <h2 class="border-b">Add new transaction</h2>
        <div class="text-amount">
          <div className='text'>
            <span class="text-sm">Transaction note</span>
            <input type="text" placeholder="Buy Fruits | Salary" />
          </div>
          <div class="amount">
            <span class="text-sm">Amount </span>
            <i class="text-xs">(negative - expense. positive - income)</i>
            <input type="number" placeholder="+10 | -10" />
          </div>
          <div class="add-transaction">
            <button class="">Add transaction</button>
          </div>
        </div>
      </div>
    )
}
