import undraw from "./undraw.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        <section className="fisrtSession">
          <h2 className="mainheading">Shorten your link </h2>
          <p className="mainText">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="getStartedDesk">Get Started</button>
        </section>
        <section>
          <img src={undraw} className="App-logo" alt="logo" />
        </section>
        <button className="getStartedMob">Get Started</button>
      </section>
    </div>
  );
}

export default App;
