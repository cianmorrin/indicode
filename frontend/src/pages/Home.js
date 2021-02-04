import React from "react";
import PenPaper from "../images/pen-paper.png";
import BarChart from "../images/barchart3.png";
import Pencil from "../images/pencil.webp";
import Calendar from "../images/calendar.webp";
import Trophy from "../images/trophy.png";

function Home() {
  return (
    <div className="home">
      <div className="main-tile">
        <h3>Welcome to IndiCode</h3>
        <h5>Your coding journey starts here ...</h5>
      </div>
      <div className="learning-tile">
        <h5>Continue learning....</h5>
        <div className="pic-title">
          <img className="pen-paper" src={PenPaper} />
          <h6>Python 3</h6>
        </div>
        <p>Strings and console output</p>
        <p>Quiz</p>
      </div>
      <div className="stats-tile">
        <h5>Your stats</h5>
        <div className="pic-title">
          <img className="barchart" src={BarChart} />
          <h6>Insights</h6>
        </div>
        <p>Check your progress so far</p>
        <p>See your learning style insights</p>
      </div>
      <div className="user-greeting">
        <h6>Hey Cian!</h6>
      </div>
      <div className="code-tile">
        <div className="pencil">
          <img className="pencil-img" src={Pencil} />
        </div>
        <div className="code-tile-text">
          <h6>Write some code</h6>
          <p>No lessons, no quiz, have some fun</p>
        </div>
      </div>
      <div className="challenge-tile">
        <div className="calendar">
          <img className="calendar-img" src={Calendar} />
        </div>
        <div className="challenge-tile-text">
          <h6>10 day challenge</h6>
          <p>Start your 10 day coding challenge</p>
        </div>
      </div>
      <div className="level-tile">
        <div className="trophy">
          <img className="trophy-img" src={Trophy} />
        </div>
        <div className="level-tile-text">
          <h6>Levels</h6>
          <p>Python basics award</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
