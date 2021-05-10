import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [memes, setMemes] = useState([]);

  const getMemes = async () => {
    const response = await Axios.get("https://api.imgflip.com/get_memes");
    console.log(response.data.data.memes);
    setMemes(response.data.data.memes);
  };

  const renderMemes = () => {
    return memes.map((meme) => {
      return (
        <ul>
          <li>{meme.name}</li>
          <img src={meme.url} alt={meme.name} />
        </ul>
      );
    });
  };

  useEffect(() => {
    getMemes();
  }, []);
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {renderMemes()}
    </div>
  );
}

export default App;
