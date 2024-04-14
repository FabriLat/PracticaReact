const Beers = ({ beers }) => {
    const MappedBeers = beers.map((beer) => (
      <div key={beer.id}>
        <p>{beer.beerName}</p>
        <p>{beer.beerStyle}</p>
        <p>${beer.price * 960}</p>
        <p>{beer.available ? "Disponible" : "No disponible"}</p>
        <hr/>
      </div>
    ));
  
    return <div>{MappedBeers}</div>;
  }
export default Beers;