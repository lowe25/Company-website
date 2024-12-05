import { useState } from "react";
function Contacts() {
  const [req, setReq] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      contact.length === 0 ||
      msg.length === 0
    ) {
      setReq(true);
    }
  };
  return (
    <div>
      <div className="contacts">
        <div className="contacts__loc">
          <h1>Our Offices</h1>
          <div className="contacts__pic"></div>
          <p className="contacts__txt">Office Name Sample</p>
          <ul className="contacts__list">
            <li className="contacts__list-item">
              <i className="fas fa-map-marker-alt"></i>4677 Brookmere Road
            </li>
            <li className="contacts__list-item">
              <i className="fas fa-phone"></i>(716) 869-2406
            </li>
            <li className="contacts__list-item">
              <i className="fas fa-phone"></i>(716) 305-9669
            </li>
          </ul>
        </div>

        <div className="contacts__form-wrap">
          <form className="contacts__form" onSubmit={handleSubmit}>
            <label className="contacts__label">Name</label>
            {req && name.length <= 0 ? (
              <p className="error">
                <b>Name Field Is Required</b>
              </p>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Name"
              className="contacts__txtbox"
              onChange={(e) => setName(e.target.value)}
            />

            <label className="contacts__label">Email</label>
            {req && email.length <= 0 ? (
              <p className="error">
                <b>Email Field Is Required</b>
              </p>
            ) : (
              ""
            )}
            <input
              type="email"
              placeholder="Name"
              className="contacts__txtbox"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="contacts__label">Contact</label>
            {req && contact.length <= 0 ? (
              <p className="error">
                <b>Contact Field Is Required</b>
              </p>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Contact"
              className="contacts__txtbox"
              onChange={(e) => setContact(e.target.value)}
            />

            <label className="contacts__label">Message</label>
            {req && msg.length <= 0 ? (
              <p className="error">
                <b>Message Field Is Required</b>
              </p>
            ) : (
              ""
            )}
            <textarea
              placeholder="Enter Message"
              className="contacts__txtarea"
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <label className="contacts__label"></label>
            <button type="submit" className="contacts__btn-submit">
              Submit
            </button>
          </form>
          <div className="contacts__info">
            <p>Contact Information</p>
            <ul className="contacts__list">
              <li className="contacts__list-item">
                <i className="fas fa-envelope-open"></i>
                parallaxservices@gmail.com
              </li>
              <li className="contacts__list-item">
                <i className="fas fa-phone"></i>(716) 869-2406
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
