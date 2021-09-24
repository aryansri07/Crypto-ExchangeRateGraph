import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import "./s1.css";
function ListItems(props) {
  return (
    <div class="ListItem">
      <img class="ListImage" src={props.imgurl} alt="icon" />
      <p style={{color: "#5843BE"}}>{props.name}</p>
    </div>
  );
}
function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return (<div>
    <div className="leftSidebar">
      <div className="ListItem2">
        <img className="ListImage2" src="./images/pencilscale.png" alt="icon" />
        <p className="Tools" style={{color:"#5843BE"}}>Tools</p>
      </div>
      <div className="List">
        <ul className="ListUnordered">
          <li>
            <ListItems imgurl="./images/dashboard.png" name="Dashboard" />
          </li>
          <li>
            <ListItems
              imgurl="./images/backlogremove.png"
              name="Backlog Remover"
            />
          </li>
          <li>
            <ListItems imgurl="./images/rankup.png" name="Rank up" />
          </li>
          <li>
            <ListItems imgurl="./images/speed.png" name="Speed up" />
          </li>
          <li>
            <ListItems imgurl="./images/accuracy.png" name="Accuracy up" />
          </li>
          <li>
            <ListItems imgurl="./images/revision.png" name="Revision" />
          </li>
          <li>
            <ListItems imgurl="./images/testcreator.png" name="Test Creator" />
          </li>
          <li>
            <ListItems
              imgurl="./images/assignment.png"
              name="Assignment Creator"
            />
          </li>
          <li>
            <ListItems
              imgurl="./images/studymaterial.png"
              name="Study Material"
            />
          </li>
          <li>
            <ListItems imgurl="./images/formula.png" name="Formula Sheet" />
          </li>
        </ul>
      </div>
    </div>
        <div>
          <div>
            <br></br>  
          </div>
          <div>
            <img style={{float :"left", display: "inline"}} src="./images/pic.png"
            width="60" height="45" />
          <h2 style={{ color: '#5843BE',fontSize:23, float: 'left',display: "inline",fontFamily: "Poppins",
fontWeight: "normal",fontStyle:"normal"}}>Real-time bitcoin graph</h2>
          </div>
          <div>
            <div>
            <h2 style={{ color: 'white',fontSize:20, float: 'right',fontWeight:"normal",display: "inline",backgroundColor:"#5843BE"}}>commodity 2</h2></div>
  
          <div>
            <h2 style={{ color: 'white',fontSize:20, float: 'right',display: "inline",
            fontWeight:"normal",backgroundColor:"#C30F70", width: "35", height: "50"}}>commodity 1</h2>
            </div>
          </div>
          
        </div>
    </div>);
  }
  return (
    <div>
    <div className="leftSidebar">
      <div className="ListItem2">
        <img className="ListImage2" src="./images/pencilscale.png" alt="icon" />
        <p className="Tools" style={{color:"#5843BE"}}>Tools</p>
      </div>
      <div className="List">
        <ul className="ListUnordered">
          <li>
            <ListItems imgurl="./images/dashboard.png" name="Dashboard" />
          </li>
          <li>
            <ListItems
              imgurl="./images/backlogremove.png"
              name="Backlog Remover"
            />
          </li>
          <li>
            <ListItems imgurl="./images/rankup.png" name="Rank up" />
          </li>
          <li>
            <ListItems imgurl="./images/speed.png" name="Speed up" />
          </li>
          <li>
            <ListItems imgurl="./images/accuracy.png" name="Accuracy up" />
          </li>
          <li>
            <ListItems imgurl="./images/revision.png" name="Revision" />
          </li>
          <li>
            <ListItems imgurl="./images/testcreator.png" name="Test Creator" />
          </li>
          <li>
            <ListItems
              imgurl="./images/assignment.png"
              name="Assignment Creator"
            />
          </li>
          <li>
            <ListItems
              imgurl="./images/studymaterial.png"
              name="Study Material"
            />
          </li>
          <li>
            <ListItems imgurl="./images/formula.png" name="Formula Sheet" />
          </li>
        </ul>
      </div>
    </div>
    <br></br> 
    <img style={{float :"left", display: "inline"}} src="./images/pic.png"
            width="60" height="45" />
    <h2 style={{float:"left", color: '#5843BE',fontSize:23,display: "inline",fontWeight:"normal",
    fontStyle:"normal", fontFamily: "Poppins",}} >Real-time bitcoin graph</h2>
    <div>
            <h2 style={{ color: 'white',fontSize:20, float: 'right',fontWeight:"normal",display: "inline",backgroundColor:"#5843BE",width: "35",
  height: "50"}}>commodity 2</h2>
            <h2 style={{ color: 'white',fontSize:20, float: 'right',display: "inline",fontWeight:"normal",
            backgroundColor:"#C30F70", width: "35", height: "50"}}>commodity 1</h2>
          </div>
    <br></br>
    <br></br><br></br><br></br>
    <div className="dashboard">
      <div>
      <br></br>
      </div>
      
      <h2 style={{ color: '#5843BE'}}>{`$${price}`}</h2>

      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;