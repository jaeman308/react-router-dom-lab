const MailboxForm = () => {

    // const [newMailbox, setNewMailbox] = useState ({
    //     boxholder: '',
    //     size: '',
    // });

    return (
        <>
        <h1>New Mailbox</h1>
        <form>
            <label htmlFor="boxholder">Enter a Boxholder</label>
            <input
            id= "boxholder"
            name= "boxholder"
            // value={newMailbox.boxholder}
            />
            <br />
            <label htmlFor="boxsize">Select a Box Size</label>
            <select
            id= "boxsize">

            <option value="">Select</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="xlarge">xlarge</option>
            </select>
        </form>
        <button>Submit</button>
        </>
    )
}

export default MailboxForm;