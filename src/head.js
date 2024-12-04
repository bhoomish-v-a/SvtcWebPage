import React from "react";
function Head(Props){
    return(
        <div className="container-fluid bg-primary bg-gradient text-center py-2">
        <h1 className="display-8 fw-bold text-light">{Props.name}</h1>
      </div>
      
      
       
    );
}
export default Head;
