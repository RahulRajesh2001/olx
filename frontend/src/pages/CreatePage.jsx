import React, { useContext } from 'react'
import Header from '../components/header/Header.jsx'
import Create from '../components/create/CreatePage.jsx'
import { loginContext } from '../App.jsx'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const islogin = useContext(loginContext)
  const navigate = useNavigate()
  return islogin ? (
    <div>
      <Header />
      <Create />
    </div>
  ) : (
    navigate('/login')
  )
}

export default CreatePage
