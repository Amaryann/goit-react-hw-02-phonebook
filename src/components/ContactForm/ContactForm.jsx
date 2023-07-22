import { useRef } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css"
export const ContactForm = ({state, setState}) => {
    const contactForm = useRef(null);
    const nameInput = useRef(null);
    const numberInput = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameInput.current.value;
        const number = numberInput.current.value;
        let contact = {name: name, tel: number, id: nanoid()}
        if (state.contacts.some(stateContact => stateContact.name === contact.name)){
            alert("Already exists");
            return
        }
        setState((prevState)=>({
            ...prevState,
            contacts: [...prevState.contacts, contact],
            name: "",
            number: "",
        }))    
    }
    return (
        <div>
            <form action="" className={css.contactForm} ref={contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            className="nameInput"
            id="nameInput"
            name="name"
            ref={nameInput}
            onChange={(e)=>{
                setState({...state, name: e.target.value})
            }} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            <label htmlFor="number">Number</label>
            <input
            type="tel"
            name="number"
            id="telInput"
            ref={numberInput}
            onChange={(e)=>{
                setState({...state, number: e.target.value})
            }}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
            <button type="submit">Add contact</button>
            </form>
        </div>
    )
}