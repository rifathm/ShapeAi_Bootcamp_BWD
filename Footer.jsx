import React from "react";


export default function Footer() {

  var currYear = new Date().getFullYear();
  return (
    <div className="App">
      <footer>
     <p> Copyright @ {currYear}</p>
      </footer >
  
    </div>
  );
}
