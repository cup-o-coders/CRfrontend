import React, { Component } from 'react';
import '../css/footer.css'

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-item">
          <p>Close Roast &copy; 2018</p>
        </div>
        <div className="footer-item">
          <p>Created by CupACoders</p>
        </div>
        <div className="footer-item">
          <p>Contact: CupACoders@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default Footer
