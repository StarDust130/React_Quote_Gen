import PropTypes from "prop-types";

function Tweet({ quote, author }) {
  // Tweet the Quote 🚘
  const tweet = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" + quote + " - " + author
    );
  };
  return (
    <>
      <button className="btn" onClick={tweet}>
        <img
          className="mr-2"
          src="https://img.icons8.com/ios-filled/22/x-coordinate.png"
          alt="x"
        />
        Tweet
      </button>
    </>
  );
}

Tweet.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Tweet;
