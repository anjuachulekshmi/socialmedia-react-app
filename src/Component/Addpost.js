import React from 'react'
import Navbar from './Navbar'

const Addpost = () => {
  return (
    <div>
        <Navbar />
         <div>
        
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Title</label>
                    <input type="text" className="form-control"/>
                </div>
               
                <div className="col  col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Message</label>
                    <textarea name="" id="" cols="30" rows="4" className="form-control"></textarea>
                </div>
                
               
                <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
    </div>
  )
}

export default Addpost