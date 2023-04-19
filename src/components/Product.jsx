import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({img, title,description,price,fit=true}) {

    const imgDiv = {
        height: "100%"
    }
    const imgStyle = {
        objectFit: fit? "contain": "cover",
        height: "100%",
        width: "100%"
    }

    return (
        <Card className={"border-0 shadow-sm h-100"}>
            <div style={imgDiv}>
                <Card.Img style={imgStyle} variant="top" src={img} alt={"picture"} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={"border-0 bg-transparent"}>
                <div  className="d-flex justify-content-between">
                    <Button variant="primary" size="sm">Add Card</Button>
                    <Button variant="warning" size="sm">Buy Now</Button>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default Product;