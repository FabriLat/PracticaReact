import BeerItem from "../beerItem/BeerItem";

const Beers = ({ beers }) => {
    const MappedBeers = beers.map((beer, index) => (
      <BeerItem
      key={index}
      name={beer.beerName}
      style={beer.beerStyle}
      price={beer.price}
      imageUrl={beer.imageUrl}
      available={beer.available}
      BeerItem/>
    ));
  
    return(
      <div className="d-flex justify-content-center flex-wrap">{MappedBeers}</div>
    ); 
  }
export default Beers;