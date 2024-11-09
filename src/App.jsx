import { useState } from 'react'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import './App.css'

const App = () => {

  return (
    <>
    <NavBar />
     <Routes>
     <Route path="/" element= {<h1>Post Office</h1>} />
     <Route path="/mailboxes" element={<MailboxList />} />
     <Route path="/new-mailbox" element={<MailboxForm />} />
    </Routes>

    </> 
  )
}

export default App
