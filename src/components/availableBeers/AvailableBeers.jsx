import BeerItem from "../beerItem/BeerItem";

const AvailableBeers = ({beers}) => {
  const availables = beers
    .filter((beer) => beer.available)
    .map((beer, index) => (
      <div key={beer.id}>
        <BeerItem
        key={index}
        name={beer.beerName}
        style={beer.beerStyle}
        price={beer.price}
        imageUrl={beer.imageUrl}
        available={beer.available}/>
      </div>
    ));
  return availables;
};

export default AvailableBeers;
