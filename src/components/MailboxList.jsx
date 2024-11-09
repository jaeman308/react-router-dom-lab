// import React from 'react'
import { Link } from 'react-router-dom'



const MailboxList = (props) => {
    return (
      <>
        <h1>Maibox List</h1>
        <ul>
            {props.mailbox.map((currentMailbox) => (
                <li key={currentMailbox._id}>
                    <Link className='mailboxList' to={`/maikboxes/${currentMailbox._id}`}>
                    {`Mailbox ${currentMailbox._id}`}</Link>
                </li>
            ))}
        </ul>
      </>
    )
}

export default MailboxList;