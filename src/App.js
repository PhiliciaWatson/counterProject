import React, {Component} from 'react'
import './App.css'

class App extends Component {

  state = {
    count: 0
  }
  
  countUp = () => {

    this.setState(
      { count: this.state.count + 1 }
    )
  }

  countDown = () => {

    this.setState(
      { count: this.state.count -1 }
    )
  }

  Subtract = () => {

    var input1 = document.getElementById('input1').value;

    this.setState(
      { count: +this.state.count - +input1 }
    )
  }

  Add = () => {

     var input1 = document.getElementById('input1').value;

     this.setState(
      { count: +this.state.count + +input1 }
    )

  }




  render () {

   
    

    return (

      <div className='App'>
        <p>The current state is:</p>
        <h4>{this.state.count}</h4>

        <br/>

        <button onClick={this.countUp} className='count-up-btn'>Count Up</button>

        <br/>
        <br/>

        <button onClick={this.countDown} className='count-down-btn'>Count Down</button>

        <br/>
        <br/>
        <br/>

        <div>
        <input type='number' id='input1' className='input-box'></input>

        <br/>
        <br/>
        <br/>

        <button className='sub-btn' onClick={this.Subtract}>Subtract</button>

        <br/>
        <br/>

        <button className='add-btn' onClick={this.Add}>Add</button>

        
        </div>
      </div>
    )
  }
}

export default App;