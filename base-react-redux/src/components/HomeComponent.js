import React from 'react';
import AddUserComponent from './add-user/AddUser';
import ListUserComponent from './list-user/ListUser';

class HomeComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: 'Sơn Nguyễn', age: 18 },
      { id: 2, name: 'Khoa Nguyễn', age: 20 },
      { id: 3, name: 'Nam Nguyen', age: 22 },
    ]
  }

  handleAddNewUser = (user) => {
    let newUser = { id: Math.floor(Math.random() * 1000) + 1, ...user }
    this.setState({
      listUsers: [...this.state.listUsers, newUser]
    })
  }

  handleDeleteUser = (userId) => {
    let listUsersClone = [...this.state.listUsers];
    listUsersClone = listUsersClone.filter((user) => {
      return user.id !== userId
    })
    this.setState({
      listUsers: listUsersClone
    })
  }

  render() {
    const adminName = 'Hoi Dan IT'
    const adminAge = 30

    return (
      <React.Fragment>
        <div className='fragment-a'>
          <div className='row mt-3 mb-3'>
            <div className='col col-md-4'>
              <AddUserComponent
                handleAddNewUser={this.handleAddNewUser}
              ></AddUserComponent>
            </div>
            <div className='col col-md-8'>
              <ListUserComponent
                name={adminName}
                age={adminAge}
                listUsers={this.state.listUsers}
                handleDeleteUser={this.handleDeleteUser}
              >
              </ListUserComponent>
            </div>
          </div>
        </div>
        <div className='fragment-b'>
          <div className='row mt-3 mb-3'>
            <div className='col col-md-12 d-flex justify-content-center'>
              <div className="card w-50">
                <div className="card-header text-center">
                  All Users Json
                </div>
                <div className="card-body">
                  {JSON.stringify(this.state.listUsers)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeComponent;