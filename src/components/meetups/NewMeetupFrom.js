import classes from "./NewMeetupFrom.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
import { useState } from "react";

function NewMeetupFrom(props) {
  const [showError, setShowError] = useState(false);

  const showErrorHandler = () => {
    setShowError(true);
  };

  const hideErrorHandler = () => {
    setShowError(false);
  };

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const textInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = textInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            onFocus={showErrorHandler}
            onBlur={hideErrorHandler}
          />
          {showError && <span className={classes.error}>Only Url for now</span>}
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Adsress</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={textInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupFrom;
