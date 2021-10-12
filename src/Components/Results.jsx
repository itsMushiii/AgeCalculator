import React from "react";
import "./Components.css";

function Results({ date }) {
  let today = new Date().getTime();
  let birthdate = new Date(date).getTime();
  let d = Math.abs(today - birthdate);
  let days = Math.floor(d / (1000 * 60 * 60 * 24));
  let years = Math.floor(days / 365);
  let months = Math.floor(days / 31);
  let weeks = Math.floor(days / 7);
  let hours = Math.abs(days * 24);
  let minutes = Math.floor(days * 24 * 60);
  let seconds = Math.floor(days * 60 * 60 * 24);

  return (
    <div className="Stats   border">
      <div className="card">
        <div align="center" className="card-header bg-info">
          Your Age
        </div>
        <div className="card-body">
          <h4 align="center">Your Age </h4>
          <h6>Years: {years}</h6>
          <h6>Months: {months}</h6>
          <h6>Weeks: {weeks}</h6>
          <h6>Days: {days}</h6>
          <h6>Hours: {hours}</h6>
          <h6>Minutes: {minutes}</h6>
          <h6>Seconds: {seconds}</h6>
        </div>
      </div>
    </div>
  );
}

export default Results;
