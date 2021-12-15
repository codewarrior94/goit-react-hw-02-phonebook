import { nanoid } from 'nanoid';

import ContactsItem from './ContactsItem';

// import css from './Contacts.module.css'

const Contacts = ({ contactList, deleteContact }) => {
  return (
    <>
      <ul>
        {contactList.map(contact => {
          return (
            <ContactsItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              deleteContact={() => deleteContact(contact.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
