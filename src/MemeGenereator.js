import React, { useState, useEffect } from "react";
import "./Meme.css";

const MemeGenereator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [allMemeImage, setAllMemeImage] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((response) => {
        const { memes } = response.data;
        setAllMemeImage(memes);
      });
  }, []);

  const handleTopChange = (e) => {
    setTopText(e);
  };

  const handleBottomChange = (e) => {
    setBottomText(e);
  };

  const randomPhoto = () => {
    let randomNum = Math.floor(Math.random() * 100);
    setRandomImage(allMemeImage[randomNum]);
  };

  return (
    <div className="meme-from">
      <div className="inputlar">
        <input
          type="text"
          className="input"
          name="toptext"
          placeholder="enter top text"
          value={topText}
          onChange={(e) => handleTopChange(e.target.value)}
        />
        <input
          type="text"
          className="input"
          name="bottomtext"
          placeholder="enter bottom text"
          value={bottomText}
          onChange={(e) => handleBottomChange(e.target.value)}
        />
        <button onClick={() => randomPhoto()}>
          <div>
            <span>
              <p>
                Generate Meme <p>:)</p>
              </p>
            </span>
          </div>
          <div>
            <span>
              <p>
                Thanks <p>:)</p>
              </p>
            </span>
          </div>
        </button>
        <div className="image">
          <img src={randomImage.url} alt="" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    </div>
  );
};

export default MemeGenereator;
