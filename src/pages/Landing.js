function Landing() {
  return (
    <div className="landing">
      <section className="landing__img">
        <div className="landing__txt">
          <h1 className="landing__title">Start your business</h1>
          <h1>With Parallax Web Services</h1>
          <div className="landing__btn-section">
            <input
              type="button"
              value="Schedule Consultation"
              className="landing__btn-consult"
            />
          </div>
        </div>
      </section>

      <section className="landing__discounts-container">
        <div className="landing__inputs-blk">
          <p>Recieves Updates or Discounts</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="landing__txt-email"
          />
          <input
            type="button"
            value="Submit"
            className="landing__btn-submit"
          ></input>
        </div>
      </section>

      <section className="landing__tbl-container">
        <h2 className="landing__tbl-title">Package Plans</h2>
        <table className="landing__tbl">
          <thead className="landing__tbl-thead">
            <tr className="landing__tbl-tr">
              <th className="landing__tbl-th"></th>
              <th className="landing__tbl-th">Starter</th>
              <th className="landing__tbl-th">Standard</th>
              <th className="landing__tbl-th">Professional</th>
            </tr>
          </thead>
          <tbody>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td"> 24/7 Support</td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td">SEO Friendly</td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td">Responsive Pages</td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td">Free Logo Design</td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td">Free Business Card</td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-times"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td">
                Customized Web Design creation
              </td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-times"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td">
                Web publishing and Hosting (100MB)
              </td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
            <tr className="landing__tbl-tr">
              <td className="landing__tbl-td">Free 1 Year Website Hosting</td>
              <td data-label="Starter" className="landing__tbl-td">
                <i className="fas fa-times"></i>
              </td>
              <td data-label="Standard" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
              <td data-label="Professional" className="landing__tbl-td">
                <i className="fas fa-check"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Landing;
