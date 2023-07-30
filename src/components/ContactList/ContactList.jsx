import css from './ContactList.module.css';
import PropTypes from 'prop-types';
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
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tel: PropTypes.string.isRequired,
      })
    ).isRequired,
    filter: PropTypes.string.isRequired,
    state: PropTypes.shape({
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          tel: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    setState: PropTypes.func.isRequired,
  };