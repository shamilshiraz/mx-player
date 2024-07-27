import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllUploadedVideosAPI } from '../services/allAPI'


function View() {

  const [allVideos,setAllVideos]=useState([])
useEffect(()=>{
  getAllUploadedVideos()
},[])

const getAllUploadedVideos=async()=>{
  const result=await getAllUploadedVideosAPI();
  if(result.status === 200){
    console.log(result);
    setAllVideos(result.data)
  }else{
    console.log("API failed");
    setAllVideos([])
  }
}



  return (
    <>
    <Row>
      <Col>
      <VideoCard/>
      </Col>
    </Row>
    </>
  )
}

export default View