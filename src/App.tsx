import { useEffect, useState } from "react";
import "./App.css";
import { getDates } from "./utils/calendar";

type CommitDay = {
  date: Date;
  color: string;
};

function App() {
  const [year, setYear] = useState(2023);
  const [days, setDays] = useState<CommitDay[]>([]);
  const [selectedColor, setSelectedColor] = useState("#39d353");
  const [painterSize, setPainterSize] = useState("small");

  useEffect(() => {
    const days: CommitDay[] = [];
    const dates = getDates(year);
    dates.forEach((date) => {
      days.push({
        date,
        color: "#21262d",
      });
    });
    setDays(days);
  }, [year]);

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
      <select
        id="color"
        name="color"
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="#39d353">lightest</option>
        <option value="#26a641">second lightest</option>
        <option value="#006d32">second darkest</option>
        <option value="#0e4429">darkest</option>
      </select>
      <select
        id="painter-size"
        name="painter-size"
        onChange={(e) => setPainterSize(e.target.value)}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <div className="calendar-grid">
        {[...Array(Math.ceil(days.length / 7))].map((_, weekIndex) => (
          <div key={weekIndex} className="calendar-row">
            {[...Array(7)].map((_, dayIndex) => {
              const dateIndex = weekIndex * 7 + dayIndex;
              const date = days[dateIndex];

              if (date && date.date.getFullYear() === year) {
                return (
                  <p
                    key={dateIndex}
                    className={`calendar-date ${date.date}`}
                    style={{ background: date.color }}
                    onMouseDown={() => {
                      const updatedDate = days[dateIndex];
                      updatedDate.color = selectedColor;
                      days.splice(dateIndex, 1, updatedDate);
                      setDays([...days]);
                    }}
                  ></p>
                );
              } else {
                return (
                  <p className="calendar-date outside" key={dateIndex}></p>
                );
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
