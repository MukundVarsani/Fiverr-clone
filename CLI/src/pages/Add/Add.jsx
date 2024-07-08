import React from "react";
import "./Add.css";
export const Add = () => {

const handleCreate =()=>{
  
}

  return (
    <div className="add">
     <div className="container">
    
     <div className="left">
      <h2>Add New Gig</h2>
        <form action="#">
              <label htmlFor="Title">Title</label>
              <input type="text" name="" id="" placeholder="e.g. I will do something I'm relly good at" />
              <label htmlFor="category">category</label>
              <input type="text" name="" id="" placeholder="Design" />
              <label htmlFor="image">Cover Image</label>
              <input type="file" name="" id="" />
              <label htmlFor="upload-Image"> upload Images</label>
              <input type="file" name="" id="" />
              <label htmlFor="desc">Description</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button onClick={handleCreate}>Create</button>
        </form>
     </div>
      <div className="right">
        <label htmlFor="">Service Title</label>
        <input type="text" name="" id=""  placeholder="e.g. one page-design"/>
        <label htmlFor="">Short desciption</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <label htmlFor="">Delivery Time(e.g. 3 days)</label>
        <input type="text" name="" id=""  />
        <label htmlFor="">Revision Number</label>
        <input type="text" name="" id="" />
        <label htmlFor=""> Add Features</label>
        <input type="text" placeholder="e.g. page design" />
        <input type="text" placeholder="e.g. file uploading" />
        <input type="text" placeholder="e.g. setting up domain" />
        <input type="text" placeholder="e.g. Hosting" />
        <label htmlFor="">Price</label>
        <input type="text"  />

      </div>

     </div>
    </div>
  );
};
