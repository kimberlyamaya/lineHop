import React from 'react';
import Header from '../header';
// import Footer from '../footer'; 

function Signin () {
    return (
        <div>
          <Header />
          <br></br>
          <div class="container">
            <form>
              <div class="mb-3">
                <input class="form-control" type="number" placeholder="Enter Phone Number" name="phoneNumber" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="password" placeholder="Enter Password" name="pass" required></input>
              </div>
              <div class="mb-3">
              {/* I need to get this button centered to match home page */}
              <button type="submit" class="btn btn-primary">Sign In</button>
              </div>
              <div class="mb-3">
                <p>New to lineHop?  <a href="/signup">Sign up</a></p>
              </div>
            </form>
          </div>
          {/* <Footer />   */}
        </div>
    )
}

export default Signin;