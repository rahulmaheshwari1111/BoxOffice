import "./App.css";
import { useState } from "react";
function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState("http://i.imgflip.com/1bij.jpg")
  const randomMeme =()=>{
   fetch('https://api.imgflip.com/get_memes').then(res=>res.json()).then(content=>
  
   setMeme(content.data.memes[Math.floor(Math.random()*100)].url)
   )
  }
  return (
    <div>
      <center>
      <h1>😀😀👻🐱‍🏍 Welcome to MEME Generator 😀😀👻🐱‍🏍</h1>
      <h2> 😎😎 Let Your Sarcasm ROLLL!!😎😋</h2>
     
     <div style ={{marginTop:"2em"}}>
      <input
        placeholder="Edit on Top.."
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <button  className="cutButton" onClick ={()=>setTopText('')}>✂</button>
      <input placeholder="Edit on Bottom.." value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
      <button  className="cutButton" onClick ={()=>setBottomText('')}>✂</button>

      <br/>
     
      <button  className = "memeButton" onClick ={()=>randomMeme()}> Generate MEME</button>
      <br/>
      </div>
      <div className="meme">
      <img src= {meme} alt ="meme" width = "550" height ="550" />
      <h2 className ="topText">{topText} </h2>
      <h2 className ="bottomText">{bottomText} </h2>
      </div>
      </center>
    </div>
  );
}

export default App;
