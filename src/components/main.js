import React, { Component } from 'react';
//import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
        <section className="intro">
            <h3>What is MCS Family Fitness for Financial Aid?</h3>
            <div>
             <p>Think of it as a Virtual Fun Run, but so much more! You can walk, run, hula hoop, bicycle or do ANY type of exercise. Sign up as an individual or create a team! Other friends and family may want to join your team OR they may want to sponsor you! All options are welcome.</p>
            </div>
            <h3>Why are we doing this in our Community?</h3>
            <div>
             <p>The MCS Family Fund (formerly the Annual Fund) was created to help MCS, its families, and our community. The pandemic has affected many of our MCS families financially so we wanted to dedicate monies from this event to support them. </p>
            </div>
            <h3>How do I sign up?</h3>
            <div> 
             <p>Just go to the MCS Family Fitness for Financial Aid Sign Up Genius here <a href="https://www.signupgenius.com/go/30E0D44A8AA2BA5FA7-mcsfamily">SIGN UP</a>
             </p>
            </div>
            <h3>How do I donate?</h3>
            <div> 
             <p>
              To participate, you may contribute a pre-determined amount or get others to sponsor you. 
              Sponsors may make a onetime donation OR may sponsor you based on the number of minutes you exercise (ex. 30 min a day for 5 days = 150 minutes. If someone sponsors you $1/minute that equals $150 for financial aid).  
              Send your friends an email and share this page, suggest they support financial aid by sponsoring you or your team! You could even invite them to join! (They can participate and donate to the event.)

              Your donation amount is not important, participating and having fun is! Contribute what is comfortable for you.You can either contribute an amount or get others to sponsor you. Donate whatever amount makes sense for you. For example, if you think you will exercise 30 min a day for 5 days, that's 150 minutes. If you raised/contributed $1/minute you would donate $150 for financial aid for students in need. $.50/minute would be $75 and so on. 
              Contribute here<form action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx" method="post" name="PrePage"><input name="LinkId" type="hidden" value="1ba5bba0-d140-48bc-a55d-24e39a8bd564" /> <button className="donate-link" type="submit" >DONATE</button></form></p>
            </div>
            <h3>Sounds fun, When is it?</h3>
            <div>
             <p>The event starts on Monday and ends on Sunday, November 9-15, 2020.  
               Because it is virtual, you can fit it in whenever you have time during those days.
               Thank you for your participation!</p>
            </div>
        </section>

         <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
        </div>
      </main>
    );
  }
}

export default Main;
