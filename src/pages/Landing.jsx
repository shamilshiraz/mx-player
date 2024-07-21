import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Landing() {
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
   
   <Col></Col>
   <Col lg={5}>
   <h1>Welcome to <span>Media Player</span></h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe illum officiis temporibus. Minima, voluptatum incidunt quibusdam vel blanditiis velit veritatis natus error. Libero non quod, numquam expedita error incidunt!</p>
<Link to={'/home'} className="btn btn-primary mt-4 ms-4">Get started</Link>  
 </Col>
   <Col lg={5}><img src="https://i.makeagif.com/media/9-02-2022/VTEKNO.gif" alt="" /></Col>
   <Col></Col>


</Row>

<div className="container mb-5 mt-5 d-flex justify-content-center align-items-center flex-column">
    <h2>Features</h2>
    <div className="cards  mb-5 mt-5 d-flex justify-content-center align-items-center flex-row">
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" width={'300px'} height={'400px'} src="https://variety.com/wp-content/uploads/2022/06/Collage-Maker-22-Jun-2022-06.00-PM.jpg?w=1000&h=563&crop=1" />
      <Card.Body>
        <Card.Title>Categorize Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem',margin:'20px' }}>
      <Card.Img variant="top" width={'300px'} height={'400px'} src="https://variety.com/wp-content/uploads/2022/06/Collage-Maker-22-Jun-2022-06.00-PM.jpg?w=1000&h=563&crop=1" />
      <Card.Body>
        <Card.Title>Categorize Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" width={'300px'} height={'400px'} src="https://variety.com/wp-content/uploads/2022/06/Collage-Maker-22-Jun-2022-06.00-PM.jpg?w=1000&h=563&crop=1" />

       <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>



</div>
<div className="container w-100 p-5 border rounded border-dark mb-5 mt-5 d-flex justify-content-between align-items-center">
<div className="col m-3">
        <h3 className='text-warning'>Simple,powerful &fast</h3>
        <h4 className='mb-5 fs-5'><span className='text-warning fs-5 fw-bolder'>Play EVerything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus commodi consequatur esse error ullam vero magnam accusamus ad aliquid. Voluptatibus, ab porro. Facilis sed error aspernatur esse vitae nobis.</h4>
   
        <h3 className='text-warning'>Simple,powerful &fast</h3>
        <h4 className='mb-5 fs-5'><span className='text-warning fs-5 fw-bolder'>Play EVerything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus commodi consequatur esse error ullam vero magnam accusamus ad aliquid. Voluptatibus, ab porro. Facilis sed error aspernatur esse vitae nobis.</h4>
  
        <h3 className='text-warning'>Simple,powerful &fast</h3>
        <h4 className='mb-5 fs-5'><span className='text-warning fs-5 fw-bolder'>Play EVerything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus commodi consequatur esse error ullam vero magnam accusamus ad aliquid. Voluptatibus, ab porro. Facilis sed error aspernatur esse vitae nobis.</h4>
    
</div>
<div className="col ">
<iframe width="100%" height="350" src="https://www.youtube.com/embed/hOHKltAiKXQ?si=hSSg6lH55nZOWES_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    
</div>
  
  </>)}

export default Landing