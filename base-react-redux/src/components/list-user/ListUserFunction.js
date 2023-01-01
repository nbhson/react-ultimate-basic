import React, { useEffect, useState } from 'react';
import './ListUser.scss'

// Stateless: chỉ có props mà ko có state
const ListUserFunctionComponent = (props) => {
  const { name, age, listUsers, handleDeleteUser } = props;
  // tên state - hàm để cập nhật state
  const [showOrHideList, setShowOrHideList] = useState(true);

  const _handleShowOrHideList = () => {
    setShowOrHideList(!showOrHideList);
  }

  const _handleDeleteUser = (userId) => {
    handleDeleteUser(userId)
  }

  // Chay sau return (xử lí DOM/call API)- tất cả những gì làm thay đổi state/props đều chạy vào đây
  useEffect(
    () => {
      console.log('Call useEffect');
      setTimeout(() => {
        document.title = 'React Function'
      }, 3000);
    },
    // thêm [] thì nó chỉ chạy 1 lần
    // biến bên trong để theo dõi sự thay đổi => biến có sự thay đổi là chạy vào useEffect
    [listUsers]
  )
  useEffect(
    () => {
      console.log('Call useEffect');
      setTimeout(() => {
        document.title = 'React Function'
      }, 3000);
    },
    [name]
  )

  console.log('Call render');
  return (
    <div className='list-user-container row'>
      <div className='col col-md-6'>
        <div><strong>Admin</strong> name's <span className="badge text-bg-success">{name}</span></div>
        <div><strong>Admin</strong> age's <span className="badge text-bg-warning">{age}</span></div>
      </div>
      <div className='col col-md-6 d-flex justify-content-end align-items-center'>
        <div className='btn btn-dark' onClick={() => _handleShowOrHideList()}>{showOrHideList ? 'Hide' : 'Show'} List</div>
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
              showOrHideList && <>
                {
                  listUsers.map((user) => {
                    return (
                      <tr key={user.id} className={user.age >= 18 ? 'green' : 'red'}>
                        <td style={{ fontWeight: 'bold' }}>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                          <button className='btn btn-outline-danger' onClick={() => _handleDeleteUser(user.id)}>
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

export default ListUserFunctionComponent;