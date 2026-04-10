import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import './index.css'
import Welcome from './Pages/Welcome';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';
import AccountSetting from './Pages/AccountSetting';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/'  element = {<Welcome />} />
      <Route path = '/create-account'  element = {<CreateAccount />} />
      <Route path = '/login'  element = {<Login />} />
      <Route path = '/account-settings'  element = {<AccountSetting />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
