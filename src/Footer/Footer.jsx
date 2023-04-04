import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        <div>
          <h5>Contact</h5>
          <p>service@vdollhouse.com</p>
          <p>address</p>
          <p>phone number</p>
        </div>
        <div>
          <h5>About</h5>
          <p>
            <a href="">Clients</a>
          </p>
          <p>
            <a href="">Mission, Vision, & Values</a>
          </p>
          <p>
            <a href="">Hiring</a>
          </p>
          <p>
            <a href="">Life at Dollhouse</a>
          </p>
          <p>
            <a href="">Diversity, Equity, & Inclusion</a>
          </p>
        </div>
        <div>
          <h5>Reference</h5>
          <p>
            <a href="">Privacy Policy</a>
          </p>
          <p>
            <a href="">Terms & Conditions</a>
          </p>
          <p>
            <a href="">Accessibility</a>
          </p>
          <p>
            <a href="">License Agreement</a>
          </p>
          <p>
            <a href="">Security, Privacy, and Compliance</a>
          </p>
          <p>
            <a href="">Investor Relations</a>
          </p>
        </div>
      </div>
      <div className="FooterContent">
        <div>
          <a href="mailto:service@vdollhouse.com?subject=Question">
            Contact Us
          </a>
        </div>
        <div>Copyright 2023 vDollhouse LLC</div>
        <div>
          <a href="mailto:service@vdollhouse.com?subject=Demo Request">
            Request a Demo
          </a>
        </div>
      </div>
    </footer>
  );
};
