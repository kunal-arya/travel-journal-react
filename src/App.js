import './App.css';
import Nav from "./components/nav.js";
import Card from "./components/card.js";
import data from "./data.js";

function App() {
  const allCards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
        <Nav />
        <section className="cards">
          {allCards}
        </section>
    </div>
  );
}

export default App;
