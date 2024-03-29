import React from "react";

function SubDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.toLocaleString("default", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{month}</div>

      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default SubDate;
