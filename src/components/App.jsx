import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useState } from "react";
import './App.module.css';
export const App = () => {
  const [state, setState] = useState({
    contacts: [{name: 'Rosie Simpson', tel: '459-12-56', id: 'id-1',},
    {name: 'Hermione Kline', tel: '443-89-12', id: 'id-2',},
    {name: 'Eden Clements', tel: '645-17-79', id: 'id-3',},
    {name: 'Annie Copeland', tel: '227-91-26', id: 'id-4',},],
    name: "",
    number: "",
    filter: "",
  })
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
  <h1>Phonebook</h1>
  <ContactForm state={state} setState={setState}/>

  <h2>Contacts</h2>
  <Filter state={state} setState={setState} />
  <ContactList contacts={state["contacts"]} filter={state.filter} state={state} setState={setState}/>
</div>
    </div>
  );
};