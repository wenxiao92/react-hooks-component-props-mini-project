import React from "react";

function makeEmojiList(minutes){
    let emojis = ""
    if(minutes<30) {
        for(let i =0; i <minutes; i+=5){
            emojis += "☕️";
            }
            return emojis
    } else {
        for(let i =0; i <minutes; i+=10){
            emojis += "🍱";
            }
            return emojis
    }
}


function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emojis = makeEmojiList(minutes);

    return (
      <article>
        <h3>{title}</h3>
        <small>{date} • {emojis} {minutes} min read</small>
        <p>{preview}</p>
      </article>
    );
  }


// Simpler solution to makeEmojiList function
//   function makeEmojiList(minutes) {
//     const interval = minutes < 30 ? 5 : 10;
//     const emoji = minutes < 30 ? "☕️" : "🍱";
  
//     let emojis = "";
//     for (let i = 0; i < minutes; i += interval) {
//       emojis += emoji;
//     }
  
//     return emojis;
//   }
export default Article;