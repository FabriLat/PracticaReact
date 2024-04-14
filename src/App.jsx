import "./App.css";
import Beers from "./components/beers/Beers";
import AvailableBeers from "./components/availableBeers/AvailableBeers.jsx";
import BeersRedIpa from "./components/beersRedIpa/BeersRedIpa.jsx";
import OnlyStyles from "./components/onlyStyles/OnlyStyles.jsx";

const beers = [
  { id: 1, beerName: "American", beerStyle: "IPA", price: 3, available: true },
  { id: 2, beerName: "Argenta", beerStyle: "IPA", price: 4, available: false },
  { id: 3, beerName: "Irish", beerStyle: "Red", price: 4, available: true },
  { id: 4, beerName: "Scotish", beerStyle: "Red", price: 3, available: true },
  {
    id: 5,
    beerName: "DeEssoCiTratta",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  { id: 6, beerName: "Santa APA", beerStyle: "APA", price: 3, available: true },
  { id: 7, beerName: "German", beerStyle: "Pilsen", price: 1, available: true },
  {
    id: 8,
    beerName: "London Porter",
    beerStyle: "Porter",
    price: 2,
    available: false,
  },
  {
    id: 9,
    beerName: "Scotish ALE",
    beerStyle: "Red",
    price: 5,
    available: false,
  },
];

function App() {
  return (
    <div>
      <h2>Todas las cervezas: </h2>
      <Beers beers={beers}/>
      <h2>Cervezas disponibles: </h2>
      <AvailableBeers beers={beers}/>
      <h2>IPA y Red disponibles: </h2>
      <BeersRedIpa beers={beers} />
      <h2>Estilos: </h2>
      <OnlyStyles beers={beers}/>
    </div>
  );
}

export default App;