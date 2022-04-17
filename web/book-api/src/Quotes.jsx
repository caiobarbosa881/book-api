import React, {useState} from "react";
import axios from "axios";

function Quotes() {
  const [livro, setLivro] = useState("");

  function getQuote() {
    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      setLivro(response.quotes);
    });
}

  return (
    <div>
      <button onClick={getQuote}>
        Generate Quote
      </button>
      <h1>{livro}</h1>
    </div>
  )
}
export default Quotes;