import PropTypes from "prop-types";

function GetNewQuotes({ getNewQuote }) {
  return (
    <>
      <button className="btn" onClick={getNewQuote}>
        <img
          className="m-2"
          src="https://img.icons8.com/ios-filled/22/quote.png"
          alt="quote"
        />
        Change Quote
      </button>
    </>
  );
}

GetNewQuotes.propTypes = {
  getNewQuote: PropTypes.func.isRequired,
};

export default GetNewQuotes;
