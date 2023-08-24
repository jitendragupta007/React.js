import {Card, Button}from "react-bootstrap";

const SingleProduct = ({ element }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={element.image} alt={element.name} />
        <Card.Body>
        
          <Card.Title>{element.name}</Card.Title>
          <Card.Subtitle>
            $ <span>{element.price}</span>
         
          {element.fastDelivery ? (
            <div>
              <h6>Fast Delivery</h6>
            </div>
          ) : (
            <div>
              <h6>4 days delivery</h6>
            </div>
          )}
        </Card.Subtitle>
        <div className="buttons">
         <Button className="buttons" >Add to cart</Button>
          </div>


        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
