import React from 'react';
import Expense from './Expense';

import Income from './Income';

export default function IncomeExpenses() {
    return (
        <div className='IncomeExpenses'>
            <Income />
            <Expense />
        </div>
    )
}
