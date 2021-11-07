function Footer() {
  return (
    <footer className="footer">
      <div className="comp-footer">
        <h2>Parallax Web Services</h2>
        <p className="comp-about">
          Started as a small company, Parallax Web Services have since grown
          into a large business, and making a name for itself in the Web
          Development Industry. Since 2020 Parallax Web Services have deployed
          2,024 Website Projects and continuing to grow to this day.
        </p>
      </div>

      <div className="footer-ul">
        <ul>
        <h2>Company</h2>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>

      <div className="footer-socials">
        <ul>
          <li><i className="fab fa-facebook fa-2x"></i></li>
          <li><i class="fab fa-twitter fa-2x"></i></li>
          <li><i class="fab fa-youtube fa-2x"></i></li>
          <li><i class="fab fa-instagram fa-2x"></i></li>
        </ul>
        <p><i class="fas fa-copyright"></i>2021 Parallax Web Services</p>
      </div>

      <div className="comp">
        <p><i class="far fa-envelope-open"></i>Stay Up to date for the latest news</p>
        <div className="form">
         <div className="form-fields">
         <input type="text" placeholder="Email" className="txt-email1"/>
         </div>
          <input type="button" value="Sign Up" className="btn-sign"/>
        </div>
        <p>Contact Information</p>
        <p><i class="fas fa-phone"></i>021414114</p>
        <p><i class="far fa-envelope-open"></i>email@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
