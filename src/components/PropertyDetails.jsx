import React, { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';


function PropertyDetails({property_type}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const { id } = useParams();
    
    const item = property_type.find(property => property.propertyId.toString() === id);
    if (!item) {
      console.log("Item not found");
    } 
         return (
           <>
             <Container className="text-center">
               <Row
                 style={{
                   marginTop: "150px",
                 }}
               >
                 <Col lg="10" className="ms-auto me-auto">
                   <Card className="text-center mb-5 pb-3">
                     <Card.Img src={item.image} />
                     <Card.Title>
                       <h1>{item.type}</h1>
                     </Card.Title>
                     <Card.Text>{item.description}</Card.Text>
                     <Link to="/">
                       <Button variant="primary">Back To Home</Button>
                     </Link>
                   </Card>
                 </Col>
               </Row>
             </Container>
           </>
         );
    
    
}

export default PropertyDetails;