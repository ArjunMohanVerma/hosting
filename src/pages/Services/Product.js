import React from "react";
import "./Product.css";

export default function Product(props) {
  

  function handleClick(){
    
    var elms = document.getElementsByClassName("desk");
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";

      } else {
        x.style.display = "none";
      }
    })

  }



  return (
    <div className="ard">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="desk">{props.description}</p>
      <p>
        <button id="btn" onClick={handleClick} className="ton">Explore More!</button>
      </p>
    </div>
  );
}

