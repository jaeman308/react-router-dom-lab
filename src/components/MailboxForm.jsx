import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const MailboxForm = () => {
 const [mailbox, setMailbox]= useState ([]);

 const [newMailbox, setNewMailbox] = useState ({
        boxholder: '',
        size: '',
        _id: null,
    });

    const navigate = useNavigate();

    const handleInputChange =(event) => {
        setNewMailbox({...newMailbox,[event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newMailboxWithId = {
            ...newMailbox,
            _id: mailbox.length +1, };
        setMailbox([...mailbox, newMailboxWithId])
        setNewMailbox({boxholder:'', size:'', _id: null});
        navigate("/Mailboxes");
    }

    return (
        <>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxholder">Enter a Boxholder</label>
            <input
            id= "boxholder"
            name= "boxholder"
            value={newMailbox.boxholder}
            onChange={handleInputChange}
            />
            <br />
            <label htmlFor="size">Select a Box Size</label>
            <select
            id= "size"
            name="size"
            value={newMailbox.size}
            onChange={handleInputChange}>

            <option value="">Select</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            </select>
        </form>
        <button type="submit">Submit</button>
        </>
    )
}

export default MailboxForm;