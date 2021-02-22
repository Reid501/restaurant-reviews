import { useState } from "react";
import Cards from "./Cards";
import Header from "./Header";
import Modal from "./Modal";

function App() {
const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className="App">
      <Header />
      <Cards setSelectedCard={setSelectedCard} />
      { selectedCard && <Modal selectedCard={selectedCard} setSelectedCard={setSelectedCard} /> }
    </div>
  );
}

export default App;
