import { useState } from 'react';
import logo from '../../logo.svg';
import './AddUser.scss';

const AddUserFunctionComponent = (props) => {
  const { handleAddNewUser } = props;

  const [name, setName] = useState('Sơn Nguyễn');
  const [age, setAge] = useState(24);


  const handleClick = (event) => {
    setName('Sơn Nguyễn');
    setAge(Math.floor((Math.random() * 100) + 1))
  }
  const _handleChangeName = (event) => {
    setName(event.target.value);
  }
  const _handleChangeAge = (event) => {
    setAge(event.target.value)
  }
  const _handleOnSubmit = (event) => {
    event.preventDefault();
    handleAddNewUser({ name, age })
  }

  return (
    <div className='row add-user-container'>
      <div className='col col-md-12 mb-3'>
        <div className="d-flex justify-content-center">
          <div className="card w-100">
            <div className="card-header text-center">
              Add New User
            </div>
            <div className="card-body">
              <form onSubmit={(event) => _handleOnSubmit(event)}>
                <div className="form-group mb-3">
                  <label>Name:</label>
                  <input className="form-control" type="text" onChange={(event) => _handleChangeName(event)} value={name} />
                </div>
                <div className="form-group mb-3">
                  <label>Age:</label>
                  <input className="form-control" type="number" onChange={(event) => _handleChangeAge(event)} value={age} />
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
              <div>{name} - {age}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUserFunctionComponent;