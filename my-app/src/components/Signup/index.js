import React, { useState }  from 'react';
import Header from '../header';
// import Footer from '../footer'; 

function Signup () {
  const [isCustomer, isResturantOwner] = useState(false);

  const resturantOwner = () => isResturantOwner(true);
  const customer = () => isCustomer(true);

    return (
        <div>
          <Header />
          <br></br>
          <div class="container">
            <div class="mb-3">
              <div class="btn-group mr-2">
                {/*add some class to this to get it to turn gray blue when it is selected*/}
                <button onClick={customer} type="button" class="btn btn-primary customer">Customer</button>
              </div>
              <div class="btn-group">
                {/* add some class to this to get it to turn gray blue when it is selected */}
                <button onClick={resturantOwner} type="button" class="btn btn-secondary resturant-owner">Resturant Owner</button>
              </div>
            </div>


            {isCustomer ?
            // Resturant Owner Form
            <form>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Owner Full Name" name="ownerFullName" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Resturant Name" name="resturantName" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Sreet Address 1" name="streetAddress1" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Sreet Address 2" name="streetAddress2" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="City" name="City" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="State" name="State" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Zip" name="Zip" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="number" placeholder="Phone Number" name="phoneNumber" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="password" placeholder="Password" name="pass" required></input>
              </div>
              <div class="mb-3">
              {/* I need to get this button centered to match home page */}
              <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
              <div class="mb-3">
                <p>Already a customer?  <a href="/signin">Sign in</a></p>
              </div>
            </form>
            :
            // Customer Form
            <form>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Full Name" name="fullName" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="number" placeholder="Phone Number" name="phoneNumber" required></input>
              </div>
              <div class="mb-3">
                <input class="form-control" type="password" placeholder="Password" name="pass" required></input>
              </div>
              <div class="mb-3">
              {/* I need to get this button centered to match home page */}
              <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
              <div class="mb-3">
                <p>Already a customer?  <a href="/signin">Sign in</a></p>
              </div>
            </form>
            }

        </div>
          {/* <Footer />   */}
        </div>
    )
}

export default Signup;