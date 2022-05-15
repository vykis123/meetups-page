import classes from "./LoadingSpiner.module.css";

const LoadingSpiner = () => {
  return (
    <div className={classes.center}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default LoadingSpiner;
