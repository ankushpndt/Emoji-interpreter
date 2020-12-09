import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🤣": "Rolling on the floor laughing",
  "🤗": "Hugging Face",
  "🎄": "Christmas Tree",
  "😀": "Grinning Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😛 ": "Face with Tongue"
};
var emoji = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  var meaningHandler = (event) => {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Unavailable";
    }
    setMeaning(meaning);
  };

  function emojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={meaningHandler} placeholder="Search emoji" />
      <div class="emoji-view">
        <h2 style={{ fontWeight: "bold", margin: "1rem 0" }}>{meaning}</h2>

        <p>Click on emoji and know the meaning</p>
        {emoji.map((emoji) => {
          return (
            <span
              className="item"
              style={{
                cursor: "pointer",
                padding: "0.5rem",
                fontSize: "1.5rem"
              }}
              onClick={() => emojiHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
