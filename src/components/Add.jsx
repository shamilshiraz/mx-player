import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';



function Add() {
 const [uploadVids,setUploadVids]=useState({
  id:"",caption:"",url:"",link:""
 })



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
    <div className='d-flex align-items-center'>
      <h5>Upload videos</h5>
      <button className='btn' onClick={handleShow}><i style={{height:'50px'}} class="fa-solid fa-upload mt-4"></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload videos</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInput"
        label="Video id"
        className="mb-3">
        <Form.Control type="id" placeholder="video id" onChange={e=>setUploadVids({...uploadVids,id:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Video url"
        className="mb-3"
      >
        <Form.Control type="id" placeholder="video id" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="image url"
        className="mb-3"
      >
        <Form.Control type="id" placeholder="video id" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="video url"
        className="mb-3"
      >
        <Form.Control type="id" placeholder="video id" />
      </FloatingLabel>
      
      
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

    </div>
    </>
  )
}

export default Add