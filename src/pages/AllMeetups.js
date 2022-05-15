import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import LoadingSpiner from "../components/ui/LoadingSpiner";
import classes from "./AllMeetups.module.css";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(
        "https://react-meetup-ca0dc-default-rtdb.firebaseio.com/meetups.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };

            meetups.push(meetup);
          }

          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
    } catch (error) {
      throw new Error(`Something went wrong. Can't add, ${error}`);
    }
  }, []);

  if (isLoading) {
    return <LoadingSpiner />;
  }

  let content;

  if (loadedMeetups.length === 0) {
    content = <p className={classes.text}>No New meet ups. Try adding some.</p>;
  } else {
    content = <MeetupList meetups={loadedMeetups} />;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {content}
    </section>
  );
};

export default AllMeetups;
