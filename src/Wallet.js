import React, { Component } from 'react'

export default class Wallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 100000,
    }
  }

  handleBuy = (productName, productPrice) => {
    if (this.state.balance >= productPrice) {
      console.log(`Bought ${productName} Rp ${productPrice}`)
      this.setState({
        balance: this.state.balance - productPrice,
      })
    } else {
      console.log(
        `Insufficient balance to buy ${productName} for Rp ${productPrice}`
      )
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
      </div>
    )
  }
}
