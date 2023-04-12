import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const nav = useNavigate()
    useEffect(() => {
     const user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')) : false
     console.log(user.admin)
     if(!user.admin){
       return  nav('/login')
     }
     
    }, [])
  return (
    <div>Admin</div>
  )
}

export default Admin