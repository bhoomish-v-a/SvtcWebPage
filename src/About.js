import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="container my-5">
   

      {/* Company Introduction */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img 
              src="images/mother 007.JPG" 
              alt="Sree Velmurugan Trading Company Building" 
              className="img-fluid rounded shadow-lg" 
              style={{ border: "5px solid #0d6efd" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-primary fw-bold">Who We Are</h3>
            <p className="text-muted">
              Established in 2002, **Sree Velmurugan Trading Company** has become a leading name in the **plumbing, electrical, and construction materials** industry. Based in **Namakkal, Tamil Nadu**, we proudly serve a broad clientele with high-quality products, reliable services, and a commitment to excellence.
            </p>
            <p className="text-muted">
              Our portfolio includes top-notch brands like **CPVC & UPVC Pipes**, **Kundan Wires**, **Finolex Pipes**, and **Nippon Paint**, ensuring durability, safety, and superior performance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="mb-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-4 bg-light shadow rounded">
              <h4 className="text-primary">Our Mission</h4>
              <p>
                To deliver top-quality products and innovative solutions, empowering customers in the **construction and infrastructure** sectors while promoting sustainable growth.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-light shadow rounded">
              <h4 className="text-primary">Our Vision</h4>
              <p>
                To be a market leader in **plumbing, electrical, and construction** materials across **India**, known for reliability, service excellence, and innovation.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-light shadow rounded">
              <h4 className="text-primary">Our Values</h4>
              <p>
                We are committed to **integrity, quality, and customer-centric service**, driving high standards in every product and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-5">
        <h3 className="text-secondary text-center mb-4">Meet Our Team</h3>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <img 
              src="/images/human.jpeg" 
              alt="Team Member" 
              className="img-fluid rounded-circle shadow-lg mb-3" 
              style={{ width: '150px', height: '150px', border: '3px solid #0d6efd' }} 
            />
            <h5 className="text-primary fw-bold">Anandkumar A P</h5>
            <p className="text-muted">Founder & CEO</p>
          </div>
          <div className="col-md-4">
            <img 
              src="/images/human.jpeg" 
              alt="Team Member" 
              className="img-fluid rounded-circle shadow-lg mb-3" 
              style={{ width: '150px', height: '150px', border: '3px solid #0d6efd' }} 
            />
            <h5 className="text-primary fw-bold">Bhoomish V A</h5>
            <p className="text-muted">Operations Manager</p>
          </div>
          <div className="col-md-4">
            <img 
              src="/images/human.jpeg" 
              alt="Team Member" 
              className="img-fluid rounded-circle shadow-lg mb-3" 
              style={{ width: '150px', height: '150px', border: '3px solid #0d6efd' }} 
            />
            <h5 className="text-primary fw-bold">Kavitha M</h5>
            <p className="text-muted">Sales & Marketing Head</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h3 className="text-secondary text-center mb-3">Why Choose Us?</h3>
        <ul className="list-group shadow-lg">
          <li className="list-group-item bg-light">
            <strong>Extensive Industry Experience:</strong> Over **[Years]** years of expertise in the trading business.
          </li>
          <li className="list-group-item bg-light">
            <strong>High-Quality Products:</strong> Sourcing premium brands to ensure durability and performance.
          </li>
          <li className="list-group-item bg-light">
            <strong>Customer-Centric Approach:</strong> Personalized services catering to unique client needs.
          </li>
          <li className="list-group-item bg-light">
            <strong>Timely Delivery:</strong> A streamlined supply chain ensuring timely product availability.
          </li>
          <li className="list-group-item bg-light">
            <strong>Competitive Pricing:</strong> Cost-effective solutions without compromising quality.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h4 className="text-primary">Get in Touch</h4>
        <p className="text-muted">
          Contact **Sree Velmurugan Trading Company** today at:
          <br />
          <strong>Phone:</strong> +91 9786233899 &nbsp;|&nbsp;
          <strong>Email:</strong> <a href="mailto:velmurugan637020@gmail.com" className="text-decoration-none">velmurugan637020@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default About;
