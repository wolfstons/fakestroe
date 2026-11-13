import "./App.css";
import Products from "./component/Products";

function App() {
  return (
    <>
      <header className="site-header">
        <h1>FakeStore</h1>
        <p>Válogass a webáruház termékei közül!</p>
      </header>

      <main className="site-main">
        <h2>Termékek</h2>
        <Products />
      </main>

      <footer className="site-footer">Készítette: Páczi Balázs</footer>
    </>
  );
}

export default App;
