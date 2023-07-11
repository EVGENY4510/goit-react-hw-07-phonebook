import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './app.module.css';

export default function App() {
  return (
    <div className={css.appWrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleContact}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
