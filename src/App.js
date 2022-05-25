import "./App.css";
import NavComp from "./components/NavComp";
import Banner from "./components/Banner";

function App() {
  return (
    <main className="container">
      <NavComp />
      <header className="">
        <Banner />
      </header>
    </main>
  );
}

export default App;
