    import React from "react";
    const Contact =()=>{
        return(
            <>
        <h1>this is Contact Us page</h1>
        <form>
        <h2>Contact Form</h2>
        <div className="row">
            <label>Name</label>
            <input type="text"/>
          </div>
        <div className="row">
            <label>Email Address</label>
            <input type="email"/>
          </div>
        <div className="row">
            <label>Mobile Number</label>
            <input type="number" maxLength={10}/>
         </div>
        <div className="row">
            <label>Address</label>
            <input type="text"/>
          </div>
        <div className="row">
            <label>Description</label>
            <textarea></textarea>
         </div>
        <div className="row">
            <input type="submit" value='submit'/>
         </div>
    </form>
     </>
    ) 
}
export default Contact