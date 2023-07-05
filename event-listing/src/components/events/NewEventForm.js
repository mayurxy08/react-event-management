import Card from "../ui/Card";
import classes from './NewEventForm.module.css';
import { useRef } from "react";

function NewEventForm(props){
const titleInputRef = useRef();
const imageInputRef = useRef();
const addressInputRef = useRef();
const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const eventData = {
         title: enteredTitle,
         image: enteredImage,
         address: enteredAddress,
        description: enteredDescription
        }
        
        props.onAddEvent(eventData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type="url" required id='image' ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" required id='title' ref = {titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id='address' ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button> Add a event</button>
            </div>
        </form>
    </Card>
}

export default NewEventForm;