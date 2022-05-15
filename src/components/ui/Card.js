import classes from "./Card.module.css";

const Card = (props) => {
  //Special prop wich evry component recived by default and recive the info passed between it
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
