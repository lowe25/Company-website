function Footer() {
  return (
    <footer className="footer">
      <div className="footer__comp">
        <h2>Parallax Web Services</h2>
        <p className="footer__about">
          Started as a small company, Parallax Web Services have since grown
          into a large business, and making a name for itself in the Web
          Development Industry. Since 2020 Parallax Web Services have deployed
          2,024 Website Projects and continuing to grow to this day.
        </p>
      </div>

      <div className="footer__socials">
        <div className="footer__socials-blk">
          <ul className="footer__socials-list">
            <li className="footer__socials-list-item">
              <a href="#test" target="_blank" className="footer__list-link">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </li>
            <li className="footer__socials-list-item">
              <a href="#test" target="_blank" className="footer__list-link">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li className="footer__socials-list-item">
              <a href="#test" target="_blank" className="footer__list-link">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </li>
            <li className="footer__socials-list-item">
              <a href="#test" target="_blank" className="footer__list-link">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__list-wrap">
          <ul className="footer__list">
            <li className="footer__item">About</li>
            <li className="footer__item">Contact</li>
            <li className="footer__item">Services</li>
          </ul>
          <p>
            <i className="fas fa-copyright"></i>2024 Parallax Web Services
          </p>
        </div>
      </div>

      <div className="footer__comp">
        <p>
          <i className="fas fa-envelope-open"></i>Stay Up to date for the latest
          news
        </p>
        <div className="footer__form">
          <div className="form-fields">
            <input
              type="text"
              placeholder="Email"
              className="footer__txt-email1"
            />
          </div>
          <input type="button" value="Sign Up" className="footer__btn-sign" />
        </div>
        <p>Contact Information</p>
        <p>
          <i className="fas fa-phone"></i>021414114
        </p>
        <p>
          <i className="far fa-envelope-open"></i>email@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
