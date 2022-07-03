import {useState} from "react";
function Contacts(){
  const [req, setReq] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  if(name.length === 0 || email.length === 0 || contact.length === 0 || msg.length === 0){
    setReq(true);
  }
  }
    return(
        <div>
        <div className="contacts-container">
          <div className="comp-loc">
            <h1>Our Offices</h1>
            <div className="comp-pic"></div>
            <p>Office Name Sample</p>
            <ul>
                <li><i className="fas fa-map-marker-alt"></i>4677 Brookmere Road</li>
                <li><i className="fas fa-phone"></i>(716) 869-2406</li>
                <li><i className="fas fa-phone"></i>(716) 305-9669</li>
            </ul>
          </div>
  
          <div className="form">
              <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name</label>
              {req && name.length <= 0 ? (<p className="error"><b>Name Field Is Required</b></p>) : ("")}
              <input type="text" placeholder="Name" className="txt-name" onChange={(e) => setName(e.target.value)}/>
  
              <label>Email</label>
              {req && email.length <= 0 ? (<p className="error"><b>Email Field Is Required</b></p>) : ("")}
              <input type="email" placeholder="Name" className="txt-email" onChange={(e) => setEmail(e.target.value)}/>
  
              <label>Contact</label>
              {req && contact.length <= 0 ? (<p className="error"><b>Contact Field Is Required</b></p>) : ("")}
              <input type="text" placeholder="Contact" className="txt-contact" onChange={(e) => setContact(e.target.value)}/>
  
              <label>Message</label>
              {req && msg.length <= 0 ? (<p className="error"><b>Message Field Is Required</b></p>) : ("")}
              <textarea placeholder="Enter Message" className="txt-area" onChange={(e) => setMsg(e.target.value)}></textarea>
              <label></label>
              <button type="submit" className="btn-submit">Submit</button>
              </form>
              <div className="contact-info">
                  <p>Contact Information</p>
                  <ul>
                      <li><i className="fas fa-envelope-open"></i>parallaxservices@gmail.com</li>
                      <li><i className="fas fa-phone"></i>(716) 869-2406</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Contacts;