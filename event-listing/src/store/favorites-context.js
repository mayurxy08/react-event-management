import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteEvent) => {},
    removeFavorite:  (eventId) => {},
    itemIsFavorite:  (eventId) => {}
});

export function FavouritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteEvent){
        setUserFavorites((previousFavorites) => {
            return previousFavorites.concat(favoriteEvent);
        });
    }

    function removeFavoriteHandler(eventId){
        setUserFavorites((previousFavorites) => {
            return previousFavorites.filter(event => event.id !== eventId);
        });

    }

    function itemIsFavoriteHandler(eventId){
        return userFavorites.some(event => event.id === eventId);

    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler    
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;