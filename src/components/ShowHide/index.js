// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isCheckFirstName: true,
    isCheckLastName: true,
  }

  checkShowOrHide = () => {
    this.setState(prevState => ({
      isCheckFirstName: !prevState.isCheckFirstName,
    }))
  }

  checkShowOrHideTwo = () => {
    this.setState(prevState => ({
      isCheckLastName: !prevState.isCheckLastName,
    }))
  }

  changeText = () => {
    const {isCheckFirstName} = this.state

    return isCheckFirstName ? null : (
      <div className="ready-display">
        <p>Joe</p>
      </div>
    )
  }

  changeTexts = () => {
    const {isCheckLastName} = this.state

    return isCheckLastName ? null : (
      <div className="ready-display">
        <p>Jonas</p>
      </div>
    )
  }

  render() {
    return (
      <div className="show-hide-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="two-buttons">
          <div className="joe-container">
            <button className="button" onClick={this.checkShowOrHide}>
              Show/Hide FirstName
            </button>
            {this.changeText()}
          </div>
          <div className="joans-container">
            <button className="button" onClick={this.checkShowOrHideTwo}>
              Show/Hide LastName
            </button>
            {this.changeTexts()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
