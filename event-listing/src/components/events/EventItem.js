import FavouritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./EventItem.module.css";
import { useContext } from "react";

function EventItem(props) {
  const favoriteContext = useContext(FavouritesContext);
  const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'remove from Favorites' : 'to favorite'}</button>
        </div>
      </Card>
    </li>
  );
}

export default EventItem;
