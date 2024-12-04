import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
function Card(props){
    return(
        <div class="card my-3" style={{ width: '24rem' }}>
  <img src={props.img} class="card-img-top img-fluid" style={{ width: "24rem", height: "22rem" }} alt=""></img>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.dis}</p>
    <a href="/electrical" class="btn btn-primary">View More</a>
  </div>
</div>
);

}

export default Card;