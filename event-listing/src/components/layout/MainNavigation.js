import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
import { useContext } from "react";
import FavouritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteContext = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Party event</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Events</Link>
          </li>
          <li>
            <Link to="/new-event">New Event</Link>
          </li>
          <li>
            <Link to="/fv">Favorite Events
            <span className={classes.badge}>{favoriteContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
