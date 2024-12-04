import React, {Component} from "react";
class Contact extends Component{
    render(){
        return(
            <div className="container-fluid bg-light bg-gradient p-5">
  <div className="row">
   
    <div className="col-md-6">
      <h3 className="mb-4 text-primary">Contact Us</h3>
      <form className="p-4 shadow-sm bg-white rounded">
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" placeholder="Enter your Name" />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">Mobile Number</label>
          <input type="number" id="phone" className="form-control" placeholder="Enter your Mobile number" />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Enter your Email ID" />
        </div>
        <div className="mb-3">
          <label for="query" className="form-label">Your Query</label>
          <textarea id="query" className="form-control" rows="4" placeholder="Text your Query"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send</button>
      </form>
    </div>

    
    <div className="col-md-6">
      <h3 className="mb-4 text-primary">Contact Information</h3>
      <ul className="list-group shadow-sm">
        <li className="list-group-item">
          <strong>Cell:</strong> 9786233899
        </li>
        <li className="list-group-item">
          <strong>Email:</strong> <a href="mailto:velmurugan637020@gmail.com" className="text-decoration-none">velmurugan637020@gmail.com</a>
        </li>
        <li className="list-group-item">
          <strong>Address:</strong> OPP - Govt. High School, Valayappatti, Namakkal
        </li>
      </ul>
    </div>
  </div>
</div>

        );
    }

}
export default Contact;