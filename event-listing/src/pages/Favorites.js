import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";
import EventsList from "../components/events/EventsList";

function Favorites(){
const favoriteContext = useContext(FavouritesContext);

let content;
if(favoriteContext.totalFavorites === 0){
content = <p> No favorites. Add some</p>
}
else{
 content = <EventsList events={favoriteContext.favorites}/>
}
    return (
    <section>
        <h1>My Favorites are</h1>
        {content}
    </section>);
}

export default Favorites;