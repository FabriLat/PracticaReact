const AvailableBeers = ({beers}) => {
  const availables = beers
    .filter((beer) => beer.available)
    .map((beer) => (
      <div key={beer.id}>
        <p>{beer.beerName}</p>
      </div>
    ));
  return availables;
};

export default AvailableBeers;
