import React, { useState } from "react";
import Card from "./Card";
import './cricScore.css'
let buttonSelected = '1';
let ongoingMatches = []
let completedMatches = []
let upcomingMatches = []
fetch(
  "https://api.cricapi.com/v1/cricScore?apikey=deba42f0-83a6-4e23-a021-19a6bfaeeeed"
)
.then((response) => {
  return response.json()
})
.then((data) => {
  const matches = data.data
  console.log(matches)
  for(let index = 0; index < matches.length; index++){
    
      if(matches[index].status === 'Match not started') upcomingMatches.push(<Card key={matches[index].id} item={matches[index]} />)
      else if(matches[index].ms === 'result') completedMatches.push(<Card key={matches[index].id} item={matches[index]} />)
      else ongoingMatches.push(<Card key={matches[index].id} item={matches[index]} />)
  };
});



export default function CricScore() {
  const [btn, setBtn] = useState('2');
  function handleClick(e) {
    setBtn(e.target.value)
    Array.from(document.querySelector('.nav-status').querySelectorAll('button')).forEach(bttn => {
      bttn.className = "not-selected"
    })
    e.target.className = "selected"
  }
  let element
  if(btn == '1') {
    element = <div className="upcoming-matches">{upcomingMatches}</div>
  }
  else if(btn == '2') {
    element = <div className="ongoing-matches">{ongoingMatches}</div>
  }
  else{
    element = <div className="recent-matches">{completedMatches}</div>
  }

  return (<>
  <div className="nav-status">
      <button value='1' onClick={e => handleClick(e)} className="not-selected">Upcoming Matches</button>
      <button value='2' onClick={e => handleClick(e)} className="selected" >Ongoing Matches</button>
      <button value='3' onClick={e => handleClick(e)} className="not-selected">Recent Matches</button>
    </div>
    {element}
    </>
  )
}