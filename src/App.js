import "./App.css";
import Ahmad from "./Comp/ahmad";

function App() {
  let subscripations = [
    {
      id: "1",
      date: new Date("2021", "09", "23"),
      title: "Monthly Subscraption",
      amount: "88787.00",
    },
    {
      id: "2",
      date: new Date("2022", "09", "23"),
      title: "yearly Subscraption",
      amount: "11111.00",
    },
    {
      id: "3",
      date: new Date("2022", "09", "23"),
      title: "6Month Subscraption",
      amount: "1222.00",
    },
  ];

  return (
    <div className="App">
      <Ahmad
        passeddate={subscripations[0].date}
        passedTitle={subscripations[0].title}
        passedAmount={subscripations[0].amount}
      />
      <Ahmad
        passeddate={subscripations[1].date}
        passedTitle={subscripations[1].title}
        passedAmount={subscripations[1].amount}
      />
      <Ahmad
        passeddate={subscripations[2].date}
        passedTitle={subscripations[2].title}
        passedAmount={subscripations[2].amount}
      />
    </div>
  );
}

export default App;
