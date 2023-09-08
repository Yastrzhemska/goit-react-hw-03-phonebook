import { Component } from 'react';
import { nanoid } from 'nanoid';

import { PhoneForm } from '../Form/PhoneForm';
import { ContactList } from '../ContactsList/ContactsList';
import { FilterField } from '../FilterField/FilterField';

import { Title, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;
    console.log(contacts);
    console.log(newContact);
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  changeFilter = evt => {
    console.log(evt);
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Title>Phonebook</Title>
        <PhoneForm onAdd={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <FilterField filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={visibleContact} onDelete={this.deleteContact} />
      </div>
    );
  }
}
