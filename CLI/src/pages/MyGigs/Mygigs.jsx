import React from 'react'
import "./Mygigs.css"
import { Link } from 'react-router-dom'

export const Mygigs = () => {
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="title">
          <h2>Gigs</h2>
         <Link to="/add"> <button>Add New Gig</button></Link>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt=""  /></td>
            <td>Mukund Varsani</td>
            <td>11</td>
            <td>121</td>
            <td><img className='delete' src="../Images/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt=""  /></td>
            <td>Mukund Varsani</td>
            <td>11</td>
            <td>121</td>
            <td><img className='delete' src="../Images/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt=""  /></td>
            <td>Mukund Varsani</td>
            <td>11</td>
            <td>121</td>
            <td><img className='delete' src="../Images/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt=""  /></td>
            <td>Mukund Varsani</td>
            <td>11</td>
            <td>121</td>
            <td><img className='delete' src="../Images/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt=""  /></td>
            <td>Mukund Varsani</td>
            <td>11</td>
            <td>121</td>
            <td><img className='delete' src="../Images/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt=""  /></td>
            <td>Mukund Varsani</td>
            <td>11</td>
            <td>121</td>
            <td><img className='delete' src="../Images/delete.png" alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}
