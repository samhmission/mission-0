import PropTypes from "prop-types";
import styles from "./ContentCard.module.css";

const ContentCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <img src={props.cardImg} alt={`${props.cardTitle} thumbnail`} />
      <h1>{props.cardTitle}</h1>
      <h2>{props.cardDescription}</h2>
    </div>
  );
};

ContentCard.propTypes = {
  cardImg: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
};

export default ContentCard;
