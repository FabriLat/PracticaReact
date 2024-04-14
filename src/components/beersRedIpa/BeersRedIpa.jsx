const BeersRedIpa = ({beers}) => {
    let list = []
    beers.forEach(beer => {
        if (beer.beerStyle === "IPA" || beer.beerStyle === "Red") {
            list.push(beer);
        }
        
    });
    return list.length;
};

export default BeersRedIpa;



