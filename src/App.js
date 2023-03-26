import "./index.css";
import text from "./texto.svg";
import pyramid from "./house.webp";
import twitter from "./twitter.svg";
import btn from "./enter.svg";

function App() {

  const url = "https://ctt.ac/qScfx";

  const twitter = "https://twitter.com/dao_pyramid";

  function openTwitter() {
    window.open(url, "_blank");
  }

  function openProfile() {
    window.open(twitter, "_blank");
  }

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="left-part">
          <div className="para">
            <img src={text} id="paras"></img>
            <div className="line"></div>
            <div className="twitter">
              <img src={twitter} onClick={openProfile} ></img>
              <div className = "enter">
                <img src={btn} onClick={openTwitter}></img>
              </div>
              

            </div>
          </div>
        </div>

        <div className="right-part">
          <img src={pyramid}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
