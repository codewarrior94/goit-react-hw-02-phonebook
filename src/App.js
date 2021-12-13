import React, { Component } from 'react';

import Form from './components/Form/Form';

// import css from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = () => {};

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default App;
