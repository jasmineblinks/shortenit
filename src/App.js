import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h2 className="mainheading">Shorten your link </h2>
        <p className="mainText">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </section>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
