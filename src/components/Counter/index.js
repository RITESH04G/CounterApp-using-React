// importing the Component
import {Component} from 'react'

// importing the css file for adding className for styling the elements
import './index.css'

class Counter extends Component {
  // add state object so that count will be updated
  state = {count: 0}

  // add event listener onIncremnet using arrow function
  onIncrement = () => {
    // use of setState to update the count so i passed the preState as argument in an arrow function and
    //  that arrow function is passed as argument for the setState callback function
    this.setState(prevState => {
      console.log(`previous state count is  ${prevState.count}`)
      // return the  updated count
      return {count: prevState.count + 1}
    })
  }

  // add event listener for decrement
  onDecrement = () => {
    // use of setState to update the count so i passed the preState as argument in an arrow function and
    //  that arrow function is passed as argument for the setState callback function
    this.setState(prevState => {
      console.log(`previous state count is  ${prevState.count}`)
      // return the  updated count
      return {count: prevState.count - 1}
    })
  }
  render() {
    // access the state
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

// export the Counter
export default Counter
