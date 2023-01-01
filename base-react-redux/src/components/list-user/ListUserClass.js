import React, { useState } from 'react';
import './ListUser.scss'

// Stateful: quản lí component bằng state
class ListUserClassComponent extends React.Component {
  constructor(props) {
    console.log('Call constructor');
    super(props);
    this.state = {
      isHideList: true
    }
  }

  handleHideList = () => {
    this.setState({
      isHideList: !this.state.isHideList
    })
  }

  handleDeleteUser = (userId) => {
    this.props.handleDeleteUser(userId)
  }

  render() {
    console.log('Call render');
    //typeof this.props = object
    const { name, age, listUsers } = this.props;
    return (
      <div className='list-user-container row'>
        <div className='col col-md-6'>
          <div><strong>Admin</strong> name's <span className="badge text-bg-success">{name}</span></div>
          <div><strong>Admin</strong> age's <span className="badge text-bg-warning">{age}</span></div>
        </div>
        <div className='col col-md-6 d-flex justify-content-end align-items-center'>
          <div className='btn btn-dark' onClick={this.handleHideList}>{this.state.isHideList ? 'Hide' : 'Show'} List</div>
        </div>
        <div className='col col-md-12'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.isHideList && <>
                  {
                    listUsers.map((user) => {
                      return (
                        <tr key={user.id} className={user.age >= 18 ? 'green' : 'red'}>
                          <td style={{ fontWeight: 'bold' }}>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.age}</td>
                          <td>
                            <button className='btn btn-outline-danger' onClick={() => this.handleDeleteUser(user.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </>
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // Chạy sau render - Thường gọi API và select DOM
  componentDidMount() {
    console.log('Call did mount');
    setTimeout(() => {
      document.title = 'React Lifecycle';
    }, 3000);
  }

  // Chạy sau render - Khi state thay đổi/ new props/force update
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Call did update', prevProps, prevState, snapshot);
  }
}


export default ListUserClassComponent;