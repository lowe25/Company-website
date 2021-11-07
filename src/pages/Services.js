function Services() {
  return (
    <div>
      <div className="services-container">
        <div className="comp-loc">
          <h1>Our Offices</h1>
          <div className="comp-pic"></div>
          <p>Office Name Sample</p>
          <ul>
              <li><i class="fas fa-map-marker-alt"></i>4677 Brookmere Road</li>
              <li><i class="fas fa-phone"></i>(716) 869-2406</li>
              <li><i class="fas fa-phone"></i>(716) 305-9669</li>
          </ul>
        </div>

        <div className="form">
            <form className="services-form">
            <label>Name</label>
            <input type="text" placeholder="Name" className="txt-name"/>

            <label>Email</label>
            <input type="email" placeholder="Name" className="txt-email"/>

            <label>Contact</label>
            <input type="text" placeholder="Contact" className="txt-contact"/>

            <label>Message</label>
            <textarea placeholder="Enter Message" className="txt-area"></textarea>
            <label></label>
            <input type="button" value="Submit" className="btn-submit"/>
            </form>
            <div className="contact-info">
                <p>Contact Information</p>
                <ul>
                    <li><i class="fas fa-envelope-open"></i>parallaxservices@gmail.com</li>
                    <li><i class="fas fa-phone"></i>(716) 869-2406</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
