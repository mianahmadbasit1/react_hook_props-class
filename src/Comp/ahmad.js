import "../App.css";
import SubDate from "./SubDate";
import React, { useState } from "react";
function Ahmad(props) {
  const [passedTitle, settitle] = useState(props.passedTitle);

  const onClickHandler = () => {
       
    settitle("Chnage the title");
    console.log("buttone click");
  };

  // dyanmic data
  return (
    <>
      <SubDate date={props.passeddate} />

      <h1> {passedTitle} </h1>
      <h1>{props.passedAmount}</h1>
      <button type="button" id="chngetitle" onClick={onClickHandler}>
        Change title
      </button>
    </>
  );
}

export default Ahmad;
