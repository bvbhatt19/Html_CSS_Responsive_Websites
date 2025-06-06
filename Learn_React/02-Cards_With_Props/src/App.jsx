import "./App.css";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import Products from "./components/product.json";
import Style from "./components/style.module.css";
function App() {
  return (
    <div className="main">
      <Navbar />
      <Cards items={Products} />
    </div>
  );
}

export default App;
