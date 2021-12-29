import React from 'react'
export default function Transactions() {
    return (
        <div className='history'>
            <h3>Transactions</h3>
            <ul className='lists'>
                <li className='list'>
                    <div>
                    <strong>Buy Fruits: </strong>
                    <span> -$200</span>
                   </div>
                    <button className="delete-btn btn-primary" variant="primary">X</button>
                </li>
            </ul>
        </div>
    )
}
