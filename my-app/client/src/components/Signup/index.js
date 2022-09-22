import React, { useState }  from 'react';
import Header from '../header';
// import Footer from '../footer'; 

function Signup () {

  const [customer, setCustomer] = useState(true);
  const [restaurantOwner, setRestaurantOwner] = useState(false);
  // I am trying to use these two below to switch class names
  const [restaurantOwnerActive, setRestaurantOwnerActive] = useState(false);
  const [customerActive, setCustomerActive ] = useState(true);

  const customerHandler = () => {
    setCustomer(true);
    setRestaurantOwner(false);
    setCustomerActive(true);
    setRestaurantOwnerActive(false);
  };

  const restaurantHandler = () => {
    setCustomer(false);
    setRestaurantOwner(true);
    setCustomerActive(false);
    setRestaurantOwnerActive(true);
  };

    return (
        <div>
          <Header />
          <br></br>
          <div className="container">
            <div className="mb-3">
              <div className="btn-group mr-2">
                {/*add some className to this to get it to turn gray blue when it is selected*/}
                {/* <button onClick={customerHandler} type="button" className="btn btn-primary customer">Customer</button> */}
                <button onClick={customerHandler} type="button" className={customerActive ? "btn-primary" : "btn-secondary"}>Customer</button>
              </div>
              <div className="btn-group">
                {/* add some className to this to get it to turn gray blue when it is selected */}
                {/* <button onClick={restaurantHandler} type="button" className="btn btn-secondary restaurant-owner">restaurant Owner</button> */}
                <button onClick={restaurantHandler} type="button" className={restaurantOwnerActive ? "btn-primary" : "btn-secondary"}>Restaurant Owner</button>
              </div>
            </div>

            {/* Customer Sign up Form */}
            {customer && (
              <form>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="Full Name" name="fullName" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="number" placeholder="Phone Number" name="phoneNumber" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="password" placeholder="Password" name="pass" required></input>
                </div>
                <div className="mb-3">
                  {/* I need to get this button centered to match home page */}
                  <button type="submit" className="btn btn-primary customer-signup-btn">Sign Up</button>
                </div>
                <div className="mb-3">
                  <p>Already a customer?  <a href="/signin">Sign in</a></p>
                </div>
              </form>
            )}

            {/* Restaurant Owner Sign up Form */}
            {restaurantOwner && (
              <form>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="EIN #" name="EIN" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="Owner Full Name" name="ownerFullName" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="restaurant Name" name="restaurantName" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="Sreet Address 1" name="streetAddress1" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="Sreet Address 2" name="streetAddress2" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="City" name="City" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="State" name="State" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="Zip" name="Zip" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="number" placeholder="Phone Number" name="phoneNumber" required></input>
                </div>
                <div className="mb-3">
                  <input className="form-control" type="password" placeholder="Password" name="pass" required></input>
                </div>
                <div className="mb-3">
                {/* I need to get this button centered to match home page */}
                <button type="submit" className="btn btn-primary restaurant-owner-signup-btn">Sign Up</button>
                </div>
                <div className="mb-3">
                  <p>Already a customer?  <a href="/signin">Sign in</a></p>
                </div>
              </form>
            )}

        </div>
          {/* <Footer />   */}
        </div>
    )
}

export default Signup;