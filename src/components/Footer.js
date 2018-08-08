import React, { Component } from 'react';
import '../css/footer.css'

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="footer-item">
          <p>Close Roast &copy; 2018</p>
        </div>
        <div className="footer-item">
          <p>Created by CupOCoders</p>
        </div>
        <div className="footer-item">
          <p>Contact: CupOCoders@gmail.com</p>
        </div>
      </footer>
    )
  }
}

export default Footer
