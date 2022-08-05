import React, { useState } from "react";
import "./App.css";
import Images from "./Images";

const App = () => {
  const [image, setImage] = useState(Images[0]);
  return (
    <div className="App">
      <h2>Image Gallery</h2>
      <h4>Rolls Royce Series</h4>
      <img src={image} alt="" className="selected" />
      <div className="imgContainer">
        {Images.map((image) => {
          return (
            <img src={image} className="imgs" onClick={() => setImage(image)} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
