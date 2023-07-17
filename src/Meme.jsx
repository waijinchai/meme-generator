import React from "react"
import "./Meme.css"
import memesData from "./memesData.js"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomeText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memeArray[randomNumber].url
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button type="button" className="form--button" onClick={getMemeImage} >Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} alt="meme image" className="meme--image"/>
        </main>
    )
}

export default Meme