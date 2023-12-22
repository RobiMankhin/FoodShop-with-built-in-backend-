import { useEffect, useState } from "react";
import FoodcardContainer from "./Components/FoodcardContainer";
import Top from "./Components/Top";
import "/src/app.css";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filtereddata, setFiltereddata] = useState(null);
  // const [selectedBtn, setSelectedBtn] = useState("all");


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const responce = await fetch(BASE_URL);
        const json = await responce.json();
        setData(json);
        setFiltereddata(json);

        setLoading(false);
      } catch (error) {
        setError("Unable to Fetch Data...");
      }
    };
    fetchFoodData();
  }, []);

  const handlechange = (e) => {
    const searchvalue = e.target.value;
    console.log(searchvalue);
    if (searchvalue === "") {
      setFiltereddata(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setFiltereddata(filter);
  };

  const clickedBtn = (typeofFood) => {
    if (typeofFood === "all") {
      setFiltereddata(data);
      setSelectedBtn("all");
      return;
    }

    const filteringBtn = data?.filter((food) =>
      food.type.toLowerCase().includes(typeofFood.toLowerCase())
    );
    setFiltereddata(filteringBtn);
    setSelectedBtn(typeofFood);
  };

  const arrBtn = [
    {
      name: "ALL",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading....</div>;

  return (
    <div>
      <Top
        handlechange={handlechange}
        clickedBtn={clickedBtn}
        arrBtn={arrBtn}
        // selectedBtn={selectedBtn}
      />
      <FoodcardContainer data={filtereddata} />
    </div>
  );
}

export default App;
