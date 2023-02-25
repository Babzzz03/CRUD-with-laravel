import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

const DefaultLayout = () => {
  const {token, user} = useStateContext();
  if(!token){
    console.log(token)
    return <Navigate to= "/login"/>
  }

const onLogout = (ev) => {
ev.preventDefault();
};

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">DashBoard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            header
          </div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className="btn_logout" >LogOut</a>
          </div>
        </header>
        <main><Outlet/></main>
      </div>
        
    </div>
  )
}

export default DefaultLayout