import React from "react";
function Banner(){
    return(
        <div className="container-fluid p-0 mt-3 mb-3">
  <img
    src="/images/banner.webp"
    alt="Banner"
    className="img-fluid w-100"
    style={{ height: '400px', objectFit: 'cover' }}
  />
</div>);
}
export default Banner;