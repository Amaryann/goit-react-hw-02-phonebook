import { nanoid } from "nanoid"
import { state } from "./App"
export const ContactForm = () => {
    return (
        <div>
            <form action="" id="contactForm">
            <label htmlFor="name">Name</label>
            <input
            type="text"
            className="nameInput"
            id="nameInput"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            <label htmlFor="number">Number</label>
            <input
  type="tel"
  name="number"
  id="telInput"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            <button type="submit">Add contact</button>
            </form>
        </div>
    )
}
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const telInput = document.getElementById("telInput");
const handleSubmit = (e) => {
    e.preventDefault();
    let contact = {name: nameInput.value, id: nanoid()}
    if (state.contacts.some(stateContact => stateContact.name === contact.name)){
        alert("Already exists");
        return
    }
    state.contacts.push(contact)
    state.name = "";
    state.number = "";
    console.log(state);
}
const handleNameChange = () => {
    state.name = nameInput.value;
}
const handleTelChange = () => {
    state.number = telInput.value;
}
contactForm.addEventListener("submit", handleSubmit);
nameInput.addEventListener("input", handleNameChange);
telInput.addEventListener("input", handleTelChange);