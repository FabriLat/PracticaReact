const OnlyStyles = ({beers}) => {
    const styles = beers.map((beer)=><p key={beer.id}>{beer.beerStyle}</p>)
    return styles
};
export default OnlyStyles;