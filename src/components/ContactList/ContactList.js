import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const displaySearchResult = () => {
    const filteredContacts = contacts.filter(contact => {
      const searchResultLower = filter.toLowerCase();
      const contactLower = contact.name.toLowerCase();
      return contactLower.includes(searchResultLower);
    });

    return filteredContacts.map(contact => (
      <li key={contact.id} className={css.item}>
        <p>
          - {contact.name} :<span className={css.span}>{contact.number}</span>
        </p>
        <button
          className={css.deleteButton}
          type="button"
          onClick={() => dispatch(deleteContact({ id: contact.id }))}
        >
          Delete
        </button>
      </li>
    ));
  };

  return <ul>{displaySearchResult()}</ul>;
}
