import { useEffect, useState } from "react";
import "./App.css";
import { getDates } from "./utils/calendar";

function App() {
  const [year, setYear] = useState(2023);
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    setDays(getDates(year));
  }, [year]);

  console.log("rerender");
  return (
    <>
      <select
        id="year"
        name="year"
        onChange={(e) => setYear(parseInt(e.target.value))}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <div className="text-3xl font-bold">Hello world</div>
      <div className="calendar-grid">
        {[...Array(Math.ceil(days.length / 7))].map((_, weekIndex) => (
          <div key={weekIndex} className="calendar-row">
            {[...Array(7)].map((_, dayIndex) => {
              const dateIndex = weekIndex * 7 + dayIndex;
              const date = days[dateIndex];

              if (date) {
                return (
                  <p key={dateIndex} className="calendar-date">
                    {date.toString()}
                  </p>
                );
              } else {
                return <p key={dateIndex} className="calendar-no-date"></p>;
              }
            })}
          </div>
        ))}
      </div>
      guh
    </>
  );
}

export default App;
