import "./Meme.css"

function Meme() {
    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button type="button" className="form--button" >Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

export default Meme