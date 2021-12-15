import PropTypes from 'prop-types';

const ContactsItem = ({ name, number, deleteContact }) => {
  return (
    <li>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactsItem;
