import React from 'react'
import UsersTable from './usersTable'
export default function OrderList(props) {
  

  return (
    <div>
    <UsersTable searchValue={props.search}  tableData={props.listData}/>
    </div>
  )
}
