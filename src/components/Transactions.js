import React, { Component } from 'react'

export default class Transactions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: [
        'Purchased Cassava Chips Rp 20000',
        'Purchased Bottled Tea Rp 5000',
        'Purchased Bottled Tea Rp 5000',
        'Purchased Bottled Tea Rp 5000',
        'Purchased Cassava Chips Rp 20000',
        'Purchased Cassava Chips Rp 20000',
        'Purchased Bottled Tea Rp 5000',
      ],
    }
  }

  render() {
    return (
      <div>
        <h1>Transactions:</h1>
        <ul>
          {this.state.transactions.map((transaction, index) => {
            return <li key={index}>{transaction}</li>
          })}
        </ul>
      </div>
    )
  }
}
