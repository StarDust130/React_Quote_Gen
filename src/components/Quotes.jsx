/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Quotes({ quote, author, getNewQuote }) {
  useEffect(() => {
    getNewQuote();
  }, []); // Fetch a new quote when the component mounts

  return (
    <div>
      <div>
        <h1 className="quotes">{quote}</h1>
        <p className="author">-{author}</p>
      </div>
    </div>
  );
}

export default Quotes;
