/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./App.css";
import Quotes from "./components/Quotes";
import Tweet from "./components/Tweet";
import GetNewQuotes from "./components/GetNewQuotes";


function App() {
  const [bg, setBg] = useState("https://source.unsplash.com/1600x900/?nature");
  const [newBg, setNewBg] = useState(null);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);

  // Change Background
  const changeBackground = () => {
    const newBgUrl = `https://source.unsplash.com/1600x900/?nature&${Math.random()}`;
    const img = new Image();
    img.onload = () => {
      setNewBg(newBgUrl);
      setBg(newBgUrl);
      setNewBg(null);
    };
    img.src = newBgUrl;
  };

  // Fetch Quote from API
  const getNewQuote = async () => {
    try {
      setError(null); // Clear any previous errors
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      changeBackground();
    } catch (error) {
      console.error("Error fetching quote:", error);
      setError(error.message);
    }
  };


  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${newBg || bg})` }}
    >
      <div className="box">
        {error ? (
          <h1 className="text-red-500 text-4xl">{`${error} Error😅`}</h1>
        ) : (
          <>
            <Quotes quote={quote} author={author} getNewQuote={getNewQuote} />

            <div className="flex">
              <GetNewQuotes getNewQuote={getNewQuote} />

              <Tweet quote={quote} author={author} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
