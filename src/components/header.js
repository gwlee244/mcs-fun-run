import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Virtual Fun Run< br/></h1>
            <div>
              <p>Financial Aid is critical in keeping MCS diverse, accessible, and equitable for all students regardless of their circumstances. Because of the pandemic the need for financial aid has increased significantly.  </p>
              
              <form action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx" method="post" name="PrePage"><input name="LinkId" type="hidden" value="1ba5bba0-d140-48bc-a55d-24e39a8bd564" /> <input className="contact" type="submit" value="DONATE NOW" /></form>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
