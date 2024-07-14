import React from "react";
import "./Card.css";

export default function Card(props) {

  let date = new Date(props.item.dateTimeGMT)
  date.setHours(date.getHours()-1)
let istDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

let time = istDate.toISOString().slice(0, 19).replace("T", " ");
  let element = (props.item.status === 'Match not started') ? `Match time - ${time}` : props.item.status
   const imgurl = "team.jpg"
   if(!props.item.t1img) props.item.t1img = imgurl
   if(!props.item.t2img) props.item.t2img = imgurl
  return (
    <div className="match-card">
      <div className="main">
        <p className="head">
        </p>
        <br />
        <table className="table">
          <tr>
            <td>
              <span>{props.item.t1}</span>&emsp;
              <br/>
              <br/>
              <img
                className="flag"
                src={props.item.t1img}
                alt=""
              />
              <br />
              <p className="score">{props.item.t1s}</p>
            </td>
            <td className="right1">
              <span>{props.item.t2}</span>&emsp;
              <br></br>
              <br/>
              <img
                className="flag"
                src={props.item.t2img}
                alt=""
              />
              <br />
              <p>{props.item.t2s}</p>
            </td>
          </tr>
        </table>
        <center>
          <div className="result">{element}</div>
          <br></br>
        </center>
      </div>
    </div>
  );
}
