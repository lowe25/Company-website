function Landing() {
  return (
    <div>
      <div className="landing-img">
        <div className="landing-txt">
          <h1>Start your business</h1>
          <h1>With Parallax Web Services</h1>
          <div className="btn-section">
            <input
              type="button"
              value="Schedule Consultation"
              className="btn-consult"
            />
          </div>
        </div>
      </div>

      <div className="discounts-container">
        <div className="inputs">
          <p>Recieves Updates or Discounts</p>
          <input type="text" placeholder="Enter Email" className="txt-email" />
          <input type="button" value="Submit" className="btn-submit"></input>
        </div>
      </div>

      <div className="tbl-container">
        <h1>Package Plans</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Starter</th>
              <th>Standard</th>
              <th>Professional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 24/7 Support</td>
              <td data-label="Starter">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>SEO Friendly</td>
              <td data-label="Starter">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Responsive Pages</td>
              <td data-label="Starter">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Free Logo Design</td>
              <td data-label="Starter">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Free Business Card</td>
              <td data-label="Starter">
                <i className="fas fa-times"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Customized Web Design creation</td>
              <td data-label="Starter">
                <i className="fas fa-times"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Web publishing and Hosting (100MB)</td>
              <td data-label="Starter">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr>
              <td>Free 1 Year Website Hosting</td>
              <td data-label="Starter">
                <i className="fas fa-times"></i>
              </td>
              <td data-label="Standard">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional">
                <i className="fas fa-check"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Landing;
