import { useState } from 'react'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import './App.css'

const App = () => {
  const [mailboxes, setmailboxes] = useState ([]);

  return (
    <>
    <NavBar />
     <Routes>
     <Route path="/" element= {<h1>POST OFFICE</h1>} />
     <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
     <Route path="/new-mailbox" element={<MailboxForm mailboxes={mailboxes} setMailboxes={setmailboxes}/>} />
     <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
    </Routes>

    </> 
  )
}

export default App
