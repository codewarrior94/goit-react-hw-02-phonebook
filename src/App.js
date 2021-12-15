import { Component } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';

// import css from './App.module.css';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  onFormSubmit = data => {
    this.addContact(data);
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Header name="Phonebook" />
        <Form onSubmit={this.onFormSubmit} />

        <Header name="Contacts" />
        <Contacts contactList={contacts} />
      </>
    );
  }
}

export default App;
