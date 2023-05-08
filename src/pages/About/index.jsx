import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("products.json");
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

  const navigate = useNavigate();

  const handleItemClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="ddd">
     <Header/>
      <p className="p2">Products</p>
      <ul className="dc">
        {loading && <li>Loading...</li>}
        {data.map((product, index) => (
          <li className="l1" key={product.id} onClick={() => handleItemClick(product.id)}>
            <div className="divv">
              <img src={`images/${product.image}`} className="" />

              <div
                className="heart"
                id={`heart-${index}`}
                onClick={(event) => handleHeartClick(event, index)}
                style={{ backgroundColor: product.heartColor }}
              ></div>
            </div>
            <br />
            <div className="divv2">
              <h2>{product.name}</h2>
              <p className="pl2">{product.price}</p>
            </div>
            <br />
            <p className="pl1">{product.description}</p>

            <p className="pl3">{product.img}</p>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Home;