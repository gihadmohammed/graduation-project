import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./style.css";

import { Link } from "react-router-dom";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("product.json");
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleHeartClick = (event, itemIndex) => {
    event.preventDefault();
    setData(prevData => {
      const newData = [...prevData];
      const currentColor = newData[itemIndex].heartColor;
      newData[itemIndex].heartColor = currentColor === "#ff0000" ? "#000000" : "#ff0000";
      if (currentColor === newData[itemIndex].heartColor) {
        newData[itemIndex].heartColor = "#000000";
      }
      return newData;
    });
  };
  

  return (
    <div className="main">
      <Header />
      <div className="div1">
        <img src="image2.png" alt="img1" className="img1" />
        <p className="p1">Get 50% Off on Selected categories</p>
        <img src="image1.png" alt="img2" className="img2" />
      </div>
      <p className="p2">Products</p>
      <ul>
        {loading && <li>Loading...</li>}
        {data.map((product, index) => (
          <li className="l1" key={product.id}>
            <div className="divv">
              <img src={`images/${product.image}`} className="" />

              <div
                className="heart"
                id={`heart-${index}`}
                onClick={(event) => handleHeartClick(event, index)}
                style={{ backgroundColor: product.heartColor }}
              ></div>
           
            <br />
            <div className="divv2">
              <h2>{product.name}</h2>
              <p className="pl2">{product.price}</p>
            </div>
            <br />
            <p className="pl1">{product.description}</p>

            <p className="pl3">{product.img}</p> </div>
          </li>
        ))}
      </ul>
      <div className="button-container">
  <Link to="/about">
    <button className="rounded-button">See More</button>
  </Link>
</div>
     
    </div>
  );
};

export default Home;