import { useHistory } from "react-router-dom";
import NewMeetupFrom from "../components/meetups/NewMeetupFrom";

const NewMeetup = () => {
  const history = useHistory();

  const addMeetupHanlder = (meetupData) => {
    fetch(
      "https://react-meetup-ca0dc-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHanlder} />
    </section>
  );
};

export default NewMeetup;
