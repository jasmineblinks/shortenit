import undraw from "./undraw.svg";
import dev from "./dev.svg";
import "./App.css";

function App() {
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
          <section className="shorten">
            <input placeholder="Shorten a link here" /> <br />
            <button className="btnShort">Shorten It</button>
          </section>
        </section>
        <section className="secondContainer">
          <section className="secondText">
            <h2>Who we are?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing
            </p>
          </section>
          <section>
            <img src={dev} className="App-dev" alt="logo" />
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
