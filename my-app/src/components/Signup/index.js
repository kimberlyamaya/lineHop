import React from 'react';
import Header from '../header';
// import Footer from '../footer'; 

function Signup () {
    return (
        <div>
          <Header />
          <br></br>
          <div class="container">
            <div class="mb-3">
              <div class="btn-group mr-2">
                <button type="button" class="btn btn-primary customer">Customer</button>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-secondary resturant-owner">Resturant Owner</button>
              </div>
            </div>
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
                <p>Already a customer?  <a href="/signin">Sign in</a></p>
              </div>
            </form>
          </div>
          {/* <Footer />   */}
        </div>
    )
}

export default Signup;