import React, { useState } from "react";
import undraw from "./undraw.svg";
import dev from "./dev.svg";
import "./App.css";
import shortenURL from "./util/shortenURL";
import { FaSpinner } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  // const [text, setText] = useState("");

  const onCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  const shortIt = async (value) => {
    setLoading(true);
    const data = await shortenURL(value);
    console.log(data);

    //set
    setHistory((prev) => [...prev, data]);
    setLoading(false);
  };
  return (
    <div className="App">
      <section className="container">
        <section className="firstContainer">
          <section className="fisrtSession">
            <h2 className="mainheading">Shorten your link </h2>
            <p className="mainText">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="getStartedDesk">Get Started</button>
          </section>
          <section>
            <img src={undraw} className="App-logo" alt="logo" />
          </section>
          <button className="getStartedMob">Get Started</button>
        </section>
        <section className="secondContainer">
          {/* <section className="shorten">
            <input placeholder="Shorten a link here" /> <br />
            <button className="btnShort">Shorten It</button>
            <div className="resultMobile">
              <span id="mainurl" className="mainurl">
                I am a boy
              </span>
              <div>
                <span id="the_result" className="resulttext">
                  I am a boy
                </span>
                <br />
                <button className="clipsmob">Copy</button>
              </div>
            </div>
          </section> */}

          <section className="shorten">
            <input
              type="text"
              value={value}
              id="link_shortner"
              type="search"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Shorten a link here"
            />
            {loading === false ? (
              <button className="btnShort" onClick={() => shortIt(value)}>
                Shorten It
              </button>
            ) : (
              <FaSpinner
                size="35px"
                className="loaderIcon"
                // style={{
                //   color: "#ffffff",

                //   marginRight: "25px",
                //   animation: "animation: spin infinite 20s linear",
                //   }}
              ></FaSpinner>
            )}

            {history.map((data, index) => (
              <div key={index} className="resultMobile">
                <span id="mainurl" className="mainurl">
                  {data.link}
                </span>
                <br />
                <span id="the_result" className="resulttext">
                  {data.shortened}
                </span>
                <div className="">
                  <CopyToClipboard text={data.shortened} onCopy={onCopy}>
                    <button className="clipsmob">Copy</button>
                  </CopyToClipboard>
                  <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                    Copied
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="shortendesktop">
            <input
              type="text"
              value={value}
              id="link_shortner"
              type="search"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Shorten a link here"
            />
            {loading === false ? (
              <button className="btnShort" onClick={() => shortIt(value)}>
                Shorten It
              </button>
            ) : (
              <FaSpinner
                size="35px"
                className="loaderIcon"
                // style={{
                //   color: "#ffffff",

                //   marginRight: "25px",
                //   animation: "animation: spin infinite 20s linear",
                //   }}
              ></FaSpinner>
            )}
          </section>
          {history.map((data, index) => (
            <div key={index} className="resultdesktop">
              <span id="the_result" className="resulttext">
                {data.link}
              </span>
              <span id="the_result" className="resulttext">
                {data.shortened}
              </span>
              <div className="">
                <CopyToClipboard text={data.shortened} onCopy={onCopy}>
                  <button className="clips">Copy</button>
                </CopyToClipboard>
                <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                  Copied
                </span>
              </div>
            </div>
          ))}
          <section className="card">
            <section className="secondText">
              <h2>Who we are?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing.
              </p>
            </section>
            <section>
              <img src={dev} className="App-dev" alt="logo" />
            </section>
          </section>
        </section>
        <section className="contactUs">
          <h2>Contact Us</h2>
          <form>
            <section className="inputText">
              <label>
                Name:
                <br />
                <input type="text" name="email address" />
              </label>

              <label>
                Email Address:
                <br />
                <input type="text" name="email address" />
              </label>
            </section>
            <label className="inputname">Message:</label>
            <br />
            <textarea type="text" name="email address" />
            <button className="submit">Get In Touch</button>
          </form>
        </section>
      </section>
    </div>
  );
}

export default App;
