import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  return (
    <div className="container my-5">
     

      <div className="row g-5">
        
        {/* CPVC & UPVC Pipes */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="row g-3">
            <div className="col-md-6">
              <img 
                src="/images/watertecPipe.jpeg" 
                alt="CPVC and UPVC Pipes" 
                className="img-fluid rounded shadow-sm" 
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h4>CPVC & UPVC Pipes and Fittings</h4>
              <p>
                Known for superior durability and corrosion resistance, CPVC and UPVC pipes are ideal for plumbing and industrial applications. CPVC handles hot and cold water, while UPVC is perfect for cold water and drainage systems.
              </p>
            </div>
          </div>
        </div>

        {/* Kundan Wire */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="row g-3">
            <div className="col-md-6">
              <img 
                src="/images/kun cab.jpeg" 
                alt="Kundan Wire" 
                className="img-fluid rounded shadow-sm" 
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h4>Kundan Wire</h4>
              <p>
                Kundan Wire ensures durability and excellent conductivity. Renowned for high-quality wires and cables, it’s designed for various electrical applications with long-lasting performance.
              </p>
            </div>
          </div>
        </div>

        {/* Finolex Pipes */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="row g-3">
            <div className="col-md-6">
              <img 
                src="/images/fn.png" 
                alt="Finolex Pipes" 
                className="img-fluid rounded shadow-sm" 
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h4>Finolex Pipes</h4>
              <p>
                Finolex Pipes provides reliable solutions for plumbing, irrigation, and sanitation. Their products ensure long-lasting performance and superior strength, trusted by professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Nippon Paint */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="row g-3">
            <div className="col-md-6">
              <img 
                src="/images/np.png" 
                alt="Nippon Paint" 
                className="img-fluid rounded shadow-sm" 
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h4>Nippon Paint</h4>
              <p>
                Nippon Paint offers vibrant colors and exceptional durability. Their commitment to sustainability enhances surfaces with superior protection and aesthetic appeal.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Product;
