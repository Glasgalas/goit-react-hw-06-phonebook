import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import s from './Contacts.module.css';

export default function Contacts() {
  return (
    <>
      <h1 className={s.contacts}>Контакты</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
