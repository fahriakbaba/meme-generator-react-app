import React from "react";
const URL = `https://api.imgflip.com/get_memes`;

function Main() {
  const [data, setData] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/46e43q.png",
  });
  const [allMeme, setAllMeme] = React.useState([]);

  /* to get data using fetch api*/
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setAllMeme(data.data.memes);
  };

  /* changing randomly image */
  const handleClick = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const { url } = allMeme[randomNumber];
    setData((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  };

  /* changing top and bottom text */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="container">
      <form className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Botton Text"
          name="bottomText"
          onChange={handleChange}
        />
        <button type="submit" className="btn" onClick={handleClick}>
          Get a new random meme &#128527;
        </button>
      </form>
      <div className="form-image">
        <h4 className="topText">{data.topText}</h4>
        <img src={data.randomImage} alt="" />
        <h4 className="bottomText">{data.bottomText}</h4>
      </div>
    </section>
  );
}

export default Main;
