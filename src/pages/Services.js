import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div className="services__container">
        <h1>Services Offered</h1>
        <div className="services__col">
          <div className="services__blk">
            <h2>Search Engine Optimization</h2>
            <p className="services__txt">
              is the process of improving the quality and quantity of website
              traffic to a website or a web page from search engines
            </p>
            <div className="services__btn-con">
              <Link to="/contacts">
                <button type="submit" className="services__btn">
                  Inquire
                </button>
              </Link>
            </div>
          </div>

          <div className="services__blk">
            <h2>Web Design & Development</h2>
            <p className="services__txt">
              Web design and development is an umbrella term that describesthe
              process of creating a website. Web design determines the look and
              feel of a website, while web development determines how it
              functions.
            </p>
            <div className="services__btn-con">
              <Link to="/contacts">
                <button type="submit" className="services__btn">
                  Inquire
                </button>
              </Link>
            </div>
          </div>

          <div className="services__blk">
            <h2>Ecommerce Website Development</h2>
            <p className="services__txt">
              Developing an Ecommerce website is a common investment decision
              among the majority of business owners,retailers and entrepreneurs.
            </p>
            <div className="services__btn-con">
              <Link to="/contacts">
                <button type="submit" className="services__btn">
                  Inquire
                </button>
              </Link>
            </div>
          </div>

          <div className="services__blk">
            <h2>Graphic Design and Branding</h2>
            <p className="services__txt">
              Graphic design is essentially the creation of all those logos,
              images, websites, and colors that help your brand stand out. The
              work is handled by an experienced graphic designer that knows what
              works and what doesn't.
            </p>
            <div className="services__btn-con">
              <Link to="/contacts">
                <button type="submit" className="services__btn">
                  Inquire
                </button>
              </Link>
            </div>
          </div>

          <div className="services__blk">
            <h2>Social Media Marketing </h2>
            <p className="services__txt">
              Refers to the use of social media and social networks to market a
              company's products and services. Social media marketing provides
              companies with a way to engage with existing customers and reach
              new ones
            </p>
            <div className="services__btn-con">
              <Link to="/contacts">
                <button type="submit" className="services__btn">
                  Inquire
                </button>
              </Link>
            </div>
          </div>

          <div className="services__blk">
            <h2>Website Maintenance</h2>
            <p className="services__txt">
              Website maintenance is the process of checking to see whether your
              website is healthy and performing well. It's about keeping up with
              security updates, fresh content, encouraging traffic growth, and
              making sure your website visitors are happy.
            </p>
            <div className="services__btn-con">
              <Link to="/contacts">
                <button type="submit" className="services__btn">
                  Inquire
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
