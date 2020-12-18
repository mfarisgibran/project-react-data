import React, { Component } from 'react'

export default class Wallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 100000,
      message: '',
    }
  }

  handleBuy = (productName, productPrice) => {
    if (this.state.balance >= productPrice) {
      this.setState({
        balance: this.state.balance - productPrice,
        message: `Bought ${productName} Rp ${productPrice}`,
      })
    } else {
      this.setState({
        message: `Insufficient balance to buy ${productName} for Rp ${productPrice}`,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>My wallet balance:</h1>
        <p>Rp {this.state.balance}</p>
        <button
          onClick={() => {
            this.handleBuy('Cassava Chips', 20000)
          }}
        >
          Buy Cassava Chips
        </button>
        <button
          onClick={() => {
            this.handleBuy('Bottled Tea', 5000)
          }}
        >
          Buy Bottled Tea
        </button>
        <p>Message: {this.state.message}</p>
      </div>
    )
  }
}
