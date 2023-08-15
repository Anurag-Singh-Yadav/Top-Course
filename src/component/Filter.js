import { useState } from "react";
import "./Filter.css";

function Filter(props) {
  const [activeId, setActiveId] = useState('All');

  function setfilter(filterkey) {
    setActiveId(filterkey);

    if (filterkey === "All") {
      props.setCourse(props.main_data);
      return;
    }
    if(!props.main_data)return;
    let temp = {};
    temp[filterkey] = props.main_data[filterkey];
    props.setCourse(temp);
  }

  return (
    <div className="flex gap-6 justify-center my-4 flex-wrap">
      <div
        className={`filterbtn ${activeId === "All" ? "active" : ""}`}
        onClick={() => setfilter("All")}
      >
        All
      </div>
      <div
        className={`filterbtn ${activeId === "Development" ? "active" : ""}`}
        onClick={() => setfilter("Development")}
      >
        Development
      </div>
      <div
        className={`filterbtn ${activeId === "Business" ? "active" : ""}`}
        onClick={() => setfilter("Business")}
      >
        Business
      </div>
      <div
        className={`filterbtn ${activeId === "Design" ? "active" : ""}`}
        onClick={() => setfilter("Design")}
      >
        Design
      </div>
      <div
        className={`filterbtn ${activeId === "Lifestyle" ? "active" : ""}`}
        onClick={() => setfilter("Lifestyle")}
      >
        Lifestyle
      </div>
    </div>
  );
}

export default Filter;
