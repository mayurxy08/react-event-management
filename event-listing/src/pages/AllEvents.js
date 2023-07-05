import { useState, useEffect } from "react";
import EventsList from "../components/events/EventsList";
const dummy_events = [
  {
    id: "event1",
    title: "party in Downtown",
    address: "uptown",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/The_Adicts_2011_SO36_03.jpg",
    description: "this is a april fools party",
  },
  {
    id: "event2",
    title: "party in village",
    address: "village",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/This_is_my_church_%282006-08-108%29_%28327847300%29.jpg",
    description: "this is a not party",
  },
];

function AllEvents() {
  const [isLoading, setIsLoading] =useState(true);
  const [loadedEvents, setLoadedEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://event-management-app-c5f03-default-rtdb.firebaseio.com/events.json')
    .then(response => {
      return response.json(); 
    })
    .then(data => {
      const events = [];

      for(const key in data){
        const event = {
          id: key,
          ...data[key]
        }
        events.push(event)
      }

      setIsLoading(false);
      setLoadedEvents(events);
    });
    }, []);

  if(isLoading){
    return (
      <section>
        <h1>Loading.... </h1>
      </section>
    );  }

  return (
    <section>
      <h1>All Events: </h1>
        <EventsList events={loadedEvents} />
    </section>
  );
}

export default AllEvents;
