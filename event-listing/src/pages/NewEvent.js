import NewEventForm from "../components/events/NewEventForm";
import {useNavigate} from 'react-router-dom';

function NewEvent(){
    const navigate = useNavigate();

    function addEventHandller(eventData) {
        fetch('https://event-management-app-c5f03-default-rtdb.firebaseio.com/events.json',
        {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/', { replace: true });
        });
    }

    return (
        <section>
            <h1> Add a new Event</h1>
            <NewEventForm onAddEvent={addEventHandller}/>
        </section>
    );
}

export default NewEvent;