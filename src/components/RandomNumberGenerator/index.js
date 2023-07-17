// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  getRandomNumber = () => {
    const num = Math.ceil(Math.random() * 100)

    this.setState({number: num})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
