import React, { Component } from 'react';

import Form from './components/Form/Form';

// import css from "./App.module.css";

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  onFormSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onFormSubmit} />
      </>
    );
  }
}

export default App;
