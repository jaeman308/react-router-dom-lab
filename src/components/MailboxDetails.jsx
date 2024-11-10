
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams()
    const selectedMailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

    return (
        <div>
            {selectedMailbox ? (
                <div>
                    <h2>Mailbox {selectedMailbox._id}</h2>
                    <p>Boxholder: {selectedMailbox.boxholder}</p>
                    <p>Box Size: {selectedMailbox.boxSize}</p>
                </div>
            ) : (
                <p>Mailbox Not Found!</p>
            )}
        </div>
    )
}



export default MailboxDetails;