import css from './ContactList.module.css';
export const ContactList = ({ contacts, filter, state, setState }) => {
    if (!contacts || contacts.length === 0) {
      return <p>No contacts available</p>;
    }
    const handleDelete = (e) => {
      const contactId = e.target.dataset.id;
      setState((prevState)=>({
        ...prevState,
        contacts: [...prevState.contacts.filter(contact => contact.id !== contactId)],

    }))    
    }
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <div className={css.contact}>
            <li key={contact.id}>
            {contact.name}: {contact.tel}
          </li>
          <input type="button" value="Delete" className="delete-button" data-id={contact.id} onClick={handleDelete}/>
          </div>

        ))}
      </ul>
    );
  };