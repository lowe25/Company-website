import { Link } from "react-router-dom";
function pageDirect() {
  return (
    <div>
          <Link to="/" className="page-links">
          </Link>
          <Link to="/about" className="page-links">
          </Link>
          <Link to="/services" className="page-links">
          </Link>
          <Link to="/contacts" className="page-links">
          </Link>
    </div>
  );
}

export default pageDirect;