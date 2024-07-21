 import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
 
 
 function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return (
     <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tnwm_qPMCaa74A8egr4_VUXdCLBOZNT7FQ&s" />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-between'><h5>Video Title</h5>
        <button><i class="fa-solid fa-trash"></i></button>
        </Card.Title>
       
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} className='w-100'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="460" height="315" src="https://www.youtube.com/embed/hOHKltAiKXQ?si=qzI3jIs5jvg1hBQL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
     </div>
   )
 }
 
 export default VideoCard