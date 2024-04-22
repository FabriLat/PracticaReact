import {Card} from "react-bootstrap";

const BeerItem = ({name, style, price, available, imageUrl}) => {
    return(
        <Card className="mx-3 mb-2" style={{ width: "22rem" }}>
            <Card.Img
            height={200}
            variant="top"
            alt="Foto cerveza"
            src={imageUrl !== ""? imageUrl: "https://us.123rf.com/450wm/aquir/aquir2307/aquir230701203/208366064-cerveza-ilustraci%C3%B3n-c%C3%B3mica-dibujada-a-mano-de-cerveza-ilustraci%C3%B3n-de-dibujos-animados-de-estilo-de.jpg?ver=6"}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{style}</Card.Subtitle>
                <div>Precio: ${price * 1030}</div>
                <p>{available?"Disponible":"No disponible"}</p>
            </Card.Body>
        </Card>
    )


}


export default BeerItem