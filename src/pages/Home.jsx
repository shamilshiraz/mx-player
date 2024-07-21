import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'





function Home() {
  return (
<>
<div className="container mt-5 mb-5 d-flex  justify-content-between">

<div className="add-videos">
 <Add/>   
</div>
<Link to={'/history'} style={{textDecoration:'none',color:'black'}}>Watch history<i class="fa-solid fa-arrow-right"></i></Link>
</div>


<div className="container">
    <div className="allvideos">
        <h2>All videos</h2>
        <View/>
    </div>
    <div className="category">
        <h2>Category</h2>
        <Category/>

        
    </div>
</div>
</>
  )
}

export default Home