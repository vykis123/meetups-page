import { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

import classes from "./Favaourites.module.css";

const Favourites = () => {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = (
      <p className={classes.text}>
        You got no favourites yet. Start adding some?
      </p>
    );
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
