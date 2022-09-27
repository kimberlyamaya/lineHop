import React from 'react';
import Header from '../header';
// import Footer from '../footer'; 

function Signin () {
  return (
    <div>
        <br></br>
        <div className="container">
          <form>
            <div className="mb-3">
              <input className="form-control" type="number" placeholder="Phone Number" name="phoneNumber" required></input>
            </div>
            <div className="mb-3">
              <input className="form-control" type="password" placeholder="Password" name="pass" required></input>
            </div>
            <div className="mb-3">
              {/* I need to get this button centered to match home page */}
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
            <div className="mb-3">
              <p>New to lineHop?  <a href="/signup">Sign up</a></p>
            </div>
          </form>
        </div>
        {/* <Footer />   */}

    </div>
  )
}
export default Signin;