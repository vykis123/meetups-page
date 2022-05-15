import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";

const MeetupItem = (props) => {
  const favouriteCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  };

  const removeMeetupHandler = (e) => {
    const id = e.target.closest("li").id;
    try {
      fetch(
        `https://react-meetup-ca0dc-default-rtdb.firebaseio.com/meetups/${id}.json`,
        {
          method: "DELETE",
        }
      ).then(() => {
        window.location.reload(false);
      });
    } catch (error) {
      throw new Error(`Something went wrong, can't delete ${error}`);
    }
  };

  return (
    <li className={classes.item} id={props.id}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button className={classes.remove} onClick={removeMeetupHandler}>
            Remove this meetup
          </button>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
