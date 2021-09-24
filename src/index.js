import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css";

ReactDOM.render(
  <div>
  <div >
    <div className="header">
      <div className ="ary">
        <img src="./images/a1.png"></img>
      </div>
      

      <div className="brandMid">
        <div className="Activity">
          {" "}
          <p> Activity &#9660; </p>{" "}
        </div>
        <div className="ToolGuide">
          {" "}
          <p> Tool Guide &#9660; </p>{" "}
        </div>
      </div>
      <div className="Lastbox">
        <img src="./images/bell.png" alt="notif" className="notif"></img>
        <img src="./images/women.jpg" alt="profile" className="profile"></img>
      </div>
      <div className="Inpbox">
        <form method="get">
          <input type="text" placeholder="Search" className="Inptext"></input>
        </form>
      </div>
      
    </div>
  </div>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <div>
  <React.StrictMode>
    { <App /> }
  </React.StrictMode>
  </div>

  </div>,
  document.getElementById('root')
);
