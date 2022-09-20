import React, { useState }  from 'react';
import Header from '../header';
// import Footer from '../footer'; 

function Signup () {

  const [customer, setCustomer] = useState(true);
  const [resturantOwner, setResturantOwner] = useState(false);

  const customerHandler = () => {
    setCustomer(true);
    setResturantOwner(false);
    
  };

  const resturantHandler = () => {
    setCustomer(false);
    setResturantOwner(true);
  };

    return (
        <div>
          <Header />
          <br></br>
          <div className="container">
            <div className="mb-3">
              <div className="btn-group mr-2">
                {/*add some className to this to get it to turn gray blue when it is selected*/}
                <button onClick={customerHandler} type="button" className="btn btn-primary customer">Customer</button>
              </div>
              <div className="btn-group">
                {/* add some className to this to get it to turn gray blue when it is selected */}
                <button onClick={resturantHandler} type="button" className="btn btn-secondary resturant-owner">Resturant Owner</button>
              </div>
            </div>


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
            {resturantOwner && (
              <form>
              <div className="mb-3">
                <input className="form-control" type="text" placeholder="Owner Full Name" name="ownerFullName" required></input>
              </div>
              <div className="mb-3">
                <input className="form-control" type="text" placeholder="Resturant Name" name="resturantName" required></input>
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
              <button type="submit" className="btn btn-primary resturant-owner-signup-btn">Sign Up</button>
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