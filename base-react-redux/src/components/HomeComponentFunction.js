import React, { useState } from 'react';
import AddUserFunctionComponent from './add-user/AddUserFunction';
import ListUserFunctionComponent from './list-user/ListUserFunction';

const HomeComponentFunction = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: 'Sơn Nguyễn', age: 18 },
    { id: 2, name: 'Khoa Nguyễn', age: 20 },
    { id: 3, name: 'Nam Nguyen', age: 22 },
  ])

  const adminName = 'Hoi Dan IT'
  const adminAge = 30

  const _handleAddNewUser = (user) => {
    let newUser = { id: Math.floor(Math.random() * 1000) + 1, ...user }
    setListUsers([...listUsers, newUser]);
  }

  const _handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((user) => {
      return user.id !== userId
    })
    setListUsers(listUsersClone);
  }

  return (
    <React.Fragment>
      <div className='fragment-a'>
        <div className='row mt-3 mb-3'>
          <div className='col col-md-4'>
            <AddUserFunctionComponent
              handleAddNewUser={_handleAddNewUser}
            ></AddUserFunctionComponent>
          </div>
          <div className='col col-md-8'>
            <ListUserFunctionComponent
              name={adminName}
              age={adminAge}
              listUsers={listUsers}
              handleDeleteUser={_handleDeleteUser}
            >
            </ListUserFunctionComponent>
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
                {JSON.stringify(listUsers)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeComponentFunction;