import React from 'react';

function Signup () {
    return (
        <section>
           <form>
              <div class="container">
                <label for="phone"><b>Phone Number</b></label>
                <input type="number" placeholder="Enter Phone Number" name="phoneNumber" required></input>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pass" required></input>
              </div>
                  
              <div class="clearfix">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Sign Up</button>
              </div>
          </form>
        </section>
    )
}

export default Signup;