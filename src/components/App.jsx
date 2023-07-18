import { ContactForm } from "./ContactForm";
// import { ContactList } from "./ContactList";
export const App = () => {
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
  <ContactForm />

  <h2>Contacts</h2>
  {/* <Filter /> */}
  {/* <ContactList /> */}
</div>
    </div>
  );
};
export let state = {
  contacts: [],
  name: "",
  number: "",
}
