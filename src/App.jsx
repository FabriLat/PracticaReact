import "./App.css";
import Beers from "./components/beers/Beers";
import AvailableBeers from "./components/availableBeers/AvailableBeers.jsx";
import BeersRedIpa from "./components/beersRedIpa/BeersRedIpa.jsx";
import OnlyStyles from "./components/onlyStyles/OnlyStyles.jsx";
import Products from "./components/products/Products.jsx";

const beers = [
  {
    id: 1,
    beerName: "American",
    beerStyle: "IPA",
    price: 3,
    available: true,
    imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2020/10/AIPA-1.png",
  },
  {
    id: 2,
    beerName: "Argenta",
    beerStyle: "IPA",
    price: 4,
    available: false,
    imageUrl: "https://cervezadimenna.com.ar/wp-content/uploads/2021/04/imageonline-co-transparentimage.png",
  },
  {
    id: 3,
    beerName: "Irish",
    beerStyle: "Red",
    price: 4,
    available: true,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2iqa2jJl-uYOQJYxRe916v1uebbkkSfDf37TOaGYmQ&s",
  },
  {
    id: 4,
    beerName: "Scotish",
    beerStyle: "Red",
    price: 3,
    available: true,
    imageUrl: "https://acdn.mitiendanube.com/stores/001/246/405/products/scottish1-aed141eea24f3669fc16794929633716-1024-1024.jpg",
  },
  {
    id: 5,
    beerName: "DeEssoCiTratta",
    beerStyle: "APA",
    price: 3,
    available: true,
    imageUrl: "",
  },
  {
    id: 6,
    beerName: "Santa APA",
    beerStyle: "APA",
    price: 3,
    available: true,
    imageUrl: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62695_default_big.jpeg",
  },
  {
    id: 7,
    beerName: "German",
    beerStyle: "Pilsen",
    price: 1,
    available: true,
    imageUrl: "https://beermarket.com.ar/wp-content/uploads/2021/08/Antares-German-Pilsen-473ml.jpg",
  },
  {
    id: 8,
    beerName: "London Porter",
    beerStyle: "Porter",
    price: 2,
    available: false,
    imageUrl: "https://www.espaciovino.com.ar/media/default/0001/58/thumb_57809_default_big.jpeg",
  },
  {
    id: 9,
    beerName: "Scotish ALE",
    beerStyle: "Red",
    price: 5,
    available: false,
    imageUrl: "https://cervezaarrecifes.com/wp-content/uploads/2022/09/Scottish-1.png",
  },
];

const products = ["table", "couch", "chair1", "chair2"];

function App() {
  return (
    <div>
      <h2>Todas las cervezas: </h2>
      <Beers beers={beers} />
      <h2>Cervezas disponibles: </h2>
      <AvailableBeers beers={beers} />
      <h2>IPA y Red disponibles: </h2>
      <BeersRedIpa beers={beers} />
      <h2>Estilos: </h2>
      <OnlyStyles beers={beers} />
      <h2>Products: </h2>
      <Products products={products} />
    </div>
  );
}
export default App;
