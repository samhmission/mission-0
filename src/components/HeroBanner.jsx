import PropTypes from "prop-types";
import styles from "./HeroBanner.module.css";

const HeroBanner = (props) => {
  return (
    <div
      className={styles.bannerContainer}
      style={{
        backgroundImage: `url(${props.bannerImg})`,
      }}
    >
      <div className={styles.heroText}>
        Voted best <br />
        Digital News platform <br />
        since ages ago <br />
      </div>
      <div className={styles.searchBar}>
        <input />
        <button>SEARCH</button>
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  bannerImg: PropTypes.string.isRequired, // Required string path to banner img
};
export default HeroBanner;
