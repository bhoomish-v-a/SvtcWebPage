import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CutOffCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      styleproperty:'none'
    };

  }

  eventHandel = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = () => {
    this.setState({
      styleproperty:''
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>Contact details</h1>
        <form action="" className='form'>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.eventHandel}
          placeholder="Enter your name"
        /><br />
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.eventHandel}
          placeholder="Enter password"
        /><br />
        <input
          type="email"
          value={this.state.email}
          name="email"
          onChange={this.eventHandel}
          placeholder="Enter email"
        /><br />
        <button onClick={this.submit}>Submit</button>
        </form>
        <table className="table table-stripped" style={{
          display:this.state.styleproperty
        }}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Password</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.name}</td>
              <td>{this.state.password}</td>
              <td>{this.state.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CutOffCalculator;
