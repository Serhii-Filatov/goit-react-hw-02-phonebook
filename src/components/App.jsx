import React from 'react';

import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
  };

  // UNDONE=====================================================================
  // handleDeleteContact = contactId => {
  //   console.log(contactId);
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // =========================================================================
  //   this.setState({
  //     contacts: this.state.contacts.filter(contact => contact.id !== contactId),
  //   });
  // };

  // Фильтрация
  // filterContacts = (contacts, filter) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  // UNDONE=====================================================================
  render() {
    // const { filter, contacts } = this.state;
    // const filteredContacts = this.filterElements(contacts);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>

        {/* <Filter value={filter} onChange={this.handleChange} /> */}
        <Filter />

        <ContactList
          contacts={this.state.contacts}
          // handleDeleteContact={this.handleDeleteContact}
        />
        {/* <ContactList
           contacts={filteredContacts}
           handleDeleteProduct={this.handlDeleteProduct}
        /> */}
      </div>
    );
  }
}
