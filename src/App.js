import React, { useEffect, useState } from "react";
import { ApiUrl } from "./Data.js";
import "./App.css";
import { FilterData } from "./Data.js";
import NavBar from "./component/NavBar.js";
import Filter from "./component/Filter.js";
import Card from "./component/Card.js";

const App = () => {
  const [data, setCourse] = useState(null);
  const [main_data, setMainData] = useState(null);
  const [liked,setliked] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  
  async function fetchData() {
    try {
      const response = await fetch(ApiUrl);
      if (response.ok) {
        const temp = await response.json();
        setCourse(temp.data);
        setMainData(temp.data);
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Filter
        FilterData={FilterData}
        data={data}
        setCourse={setCourse}
        main_data={main_data}
      />
      <div className="flex flex-wrap justify-center card-box">
        
        {data &&
          Object.keys(data).map((key) =>
            data[key].map((obj, index) => (
              <Card className="card"
                Cardkey={obj.id}
                heading={obj.title}
                description={obj.description}
                bgimg={obj.image.url}
                liked = {liked}
                setliked = {setliked}
              />
            ))
          )}
      </div>
    </div>
  );
};

export default App;
