import React from 'react';
import logo from '../../logo.svg';
import './AddUser.scss';

class AddUserClassComponent extends React.Component {
  state = {
    name: 'Sơn Nguyễn',
    age: 24
  }

  handleClick = (event) => {
    this.setState({
      name: 'Sơn Nguyễn',
      age: Math.floor((Math.random() * 100) + 1)
    });
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  handleChangeAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser(this.state)
  }

  render() {
    return (
      <div className='row add-user-container'>
        <div className='col col-md-12 mb-3'>
          <div className="d-flex justify-content-center">
            <div className="card w-100">
              <div className="card-header text-center">
                Add New User
              </div>
              <div className="card-body">
                <form onSubmit={this.handleOnSubmit}>
                  <div className="form-group mb-3">
                    <label>Name:</label>
                    <input className="form-control" type="text" onChange={this.handleChangeName} value={this.state.name} />
                  </div>
                  <div className="form-group mb-3">
                    <label>Age:</label>
                    <input className="form-control" type="number" onChange={this.handleChangeAge} value={this.state.age} />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='col col-md-12'>
          <div className="d-flex justify-content-center">
            <div className="card w-100">
              <div className="card-header text-center">
                Review New User
              </div>
              <div className="card-body d-flex align-items-center">
                <img src={logo} />
                <div>{this.state.name} - {this.state.age}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddUserClassComponent;