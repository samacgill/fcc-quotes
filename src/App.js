import "./App.css";
import Quote from "./components/Quote";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getQuotes = async () => {
      const url =
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
      const resp = await axios.get(url);
      const newQuotes = resp.data.quotes;
      setQuotes(newQuotes);
      setIsLoading(false);
    };
    getQuotes();
  }, []);

  const getQuote = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div className="App">
      {!isLoading && (
        <Quote
          quote={quotes[randomNumber].quote}
          author={quotes[randomNumber].author}
          getQuote={getQuote}
        />
      )}
    </div>
  );
}

export default App;
