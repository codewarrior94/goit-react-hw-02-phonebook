// import css from './Contacts.module.css'
import { nanoid } from 'nanoid';

const Contacts = ({ contactList }) => {
  return (
    <ul>
      {contactList.map(item => {
        return (
          <li key={nanoid()}>
            {item.name}: {item.number}
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
