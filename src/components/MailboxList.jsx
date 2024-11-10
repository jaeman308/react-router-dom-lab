import { Link } from 'react-router-dom'


const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            <h1>Mailboxes</h1>
            <ul>
                {mailboxes.length > 0  ? (
                    mailboxes.map((mailbox) => (
                        <li key={mailbox._id} className='mail-box'>
                            <Link to={`/mailboxes/${mailbox._id}`}>
                            Mailbox {mailbox._id}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li>No mailboxes found.</li>
                
                )}
            </ul>
        </div>
    )
}


export default MailboxList;