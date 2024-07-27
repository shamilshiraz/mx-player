import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allAPI';



function Add() {
 const [uploadVids,setUploadVids]=useState({
  id:"",caption:"",url:"",link:""
 })



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addYT=(e)=>{
    const{value}=e.target
    if(value.includes("v=")){
      let vID=value.split('v=')[1].slice(0,11)
      setUploadVids({...uploadVids,link: `https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVids({...uploadVids,link:''})
  }}

  const handleUpload= async()=>{
    const {id,caption,url,link}=uploadVids
    if(!id || !caption || !url || !link){
      alert("Please input all the fields");
    }else{
      const result=uploadVideoAPI(uploadVids)
      console.log(result);
      if(result.status >=200 && result.status<=300){
        handleClose();

        setUploadVids({
          id:"",caption:"",url:"",link:""
        })
      }else{
        result.message
      }
    }
  }

  
  // https://www.youtube.com/watch?v=0bVFEOb39vk
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
        label="Video caption"
        className="mb-3"
      >
        <Form.Control type="id" placeholder="video id" onChange={e=>setUploadVids({...uploadVids,caption:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="image url"
        className="mb-3"
      >
        <Form.Control type="id" placeholder="video id" onChange={e=>setUploadVids({...uploadVids,url:e.target.value})}  />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="video url"
        className="mb-3"
      >
        <Form.Control type="id" placeholder="video id" onChange={addYT}  />
      </FloatingLabel>
      
      
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </div>
    </>
  )
}

export default Add