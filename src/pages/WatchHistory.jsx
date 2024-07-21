import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
<>
   <div className="watchHis d-flex justify-content-between">
    <h2>Watch history</h2>
    <Link to={'/home'}><i class="fa-solid fa-arrow-left"></i>Go back home</Link>

   </div>
   <table className='table mb-5 '>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>URL</th>
      <th>Time strap</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>1</td>
      <td>vdeo</td>
      <td>http.com</td>
      <td>12:57      </td>
      <td><i class="fa-solid fa-trash"></i></td>
    </tr>
   </table>
</>
)
}

export default WatchHistory